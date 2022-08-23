import * as actionTypes from "../actionTypes"

export function setError(error: IError) {
  const action: ErrorAction = {
    type: actionTypes.ERROR_MESSAGE,
    error,
  }
  console.log(action, 'error message');
  return (dispatch: DispatchType) => {
    dispatch(action)
  }
}