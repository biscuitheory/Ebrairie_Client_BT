// le state par default
const initialState = {
  name: 'E-brairie',
  init: false,
  loading: false,
};

// le reducer
const initialStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APP_READY':
      return { ...state, loading: false, init: true };
    case 'APP_INIT':
      return { ...state, loading: true };
    case 'APP_RESET':
      return state;
    default:
      return state;
  }
};

export default initialStateReducer;
