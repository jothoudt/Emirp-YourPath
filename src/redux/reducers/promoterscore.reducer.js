const PromoterScoreReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PROMOTER_SCORES':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default PromoterScoreReducer;