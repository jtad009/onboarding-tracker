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
    console.log(action.type, 'type')
    switch (action.type) {
      case actionTypes.ERROR_MESSAGE:
        const newError: IError = {
          title: action.error.title,
          body: action.error.body,
        }
        console.log(newError, 'New Error')
        return {
          ...state,
          error: newError,
        }
    }
    return state
  }
  
  export default reducer;
  