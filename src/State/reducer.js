import * as actiontype from "./actiontypes";
const initialState = {
  idToken: null,
  userId: null,
  loading: false,
  error: null,
  location: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.AUTH_START:
      return { ...state, loading: true, error: null };

    case actiontype.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        idToken: action.idToken,
        userId: action.userId,
      };
    case actiontype.AUTH_FAIL:
      return { ...state, loading: false, error: action.error };
    case actiontype.AUTH_LOGOUT:
      return {
        ...state,
        loading: false,
        idToken: null,
        userId: null,
        error: null,
      };
    case actiontype.ERROR_REMOVER:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
