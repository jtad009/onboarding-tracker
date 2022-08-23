import * as actionTypes from "../actionTypes"

const initialState: ErrorState = {
  error: 
    {
     
      title: "post 1",
      body:
        "Error One",
    },
}

const reducer = (
    state: ErrorState = initialState,
    action: ErrorAction
  ): ErrorState => {
    switch (action.type) {
      case actionTypes.ERROR_MESSAGE:
        const newError: IError = {
          title: action.error.title,
          body: action.error.body,
        }
        return {
          ...state,
          error: newError,
        }
    }
    return state
  }
  
  export default reducer;
