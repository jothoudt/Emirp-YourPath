const careReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CARE_INFO':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default careReducer;