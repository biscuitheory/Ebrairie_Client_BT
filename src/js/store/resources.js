const initialState = {
  references: [],
  loading: false,
};

const resourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESOURCES_SET':
      return { ...state, loading: false, references: action.payload };
    default:
      return state;
  }
};

export default resourcesReducer;
