export enum HttpRequestShape {
    GET = "GET",
    POST = "POST",
};

export interface HookResponseShape<T>{
    data: T,
    loading: boolean
}

export interface HookConfig<T>{
    errorCallBack?: (error: {}, type: string, dispatch?: () => void) => void,
    reloadCondition: boolean,
    errorData?: T,
    updateCondition?:boolean
  } 