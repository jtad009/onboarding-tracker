import {useEffect, useRef, useState} from "react";
// import {useDispatch} from "react-redux";
import http from "../helpers/http";
// import { SHOW_SNACKBAR, showSnackbar} from "../../store/actions/core_action";
import {updateQueryParams} from "../helpers/url";
import {isTypeOf} from "../helpers/utility";
import { HookConfig, HookResponseShape, HttpRequestShape } from "./typed";



const defaultErrorCallback = (error: {}, type: string, dispatch?: () => void) => {
  // if (!error.response) {
    // dispatch({type: SHOW_SNACKBAR, payload: {config: {
    //   message: "Error occured",
    //   action: {},
    //   type: 'error',
    //   show: true,
    // }}});
  // } else {
    // dispatch(showSnackbar({
    //   message: `Error getting ${type}: ${error.message}`,
    //   action: {},
    //   type: 'error',
    //   show: true,
    // }));
  // }
};

const useHTTPGetRequest =  <T>(route: string, type: HttpRequestShape, params?: {}, config?: HookConfig<{}>) => {
  const mountedRef = useRef(true);
  let c = config;

  // const dispatch = useDispatch();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  if (params) {
    route = updateQueryParams({route, params}).route;
  }
  if (c && !isTypeOf('Function', c?.errorCallBack)) {
    c.errorCallBack = defaultErrorCallback;
  }

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);
  useEffect(() => {
    
    if(c?.reloadCondition) {
      setData(null);
      setLoading(true);
      http.get<T>(route).then(
        (response) => {
          if (!mountedRef.current) return null;
          setData(response.data);
          setLoading(false);
        },
        error => {
          // if (!mountedRef.current) return null;
          // errorCallBack(error, dispatch, type);
          // setData((errorData === undefined || errorData === null) ? {} : errorData);
          // setLoading(false);
        }
      );
    }
  }, [route, type,data, c?.reloadCondition, c?.errorCallBack]);
  const result: HookResponseShape<T> = {
    loading,
    data: data as T
  }
  return result;
};

export default useHTTPGetRequest;
