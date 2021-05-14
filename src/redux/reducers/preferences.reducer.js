const preferencesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PREFERENCES':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default preferencesReducer;