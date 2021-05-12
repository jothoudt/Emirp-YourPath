const formReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_API_INFO':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default formReducer;