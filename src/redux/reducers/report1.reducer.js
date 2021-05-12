const report1Reducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_REPORT_1':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default report1Reducer;