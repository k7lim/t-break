const answerReducer = (state = [], action) => {
    switch (action.type) {
      case 'SAVE_ANSWERS':
        return [...state, action.answers];
      default:
        return state;
    }
  };
  
  export default answerReducer;
  