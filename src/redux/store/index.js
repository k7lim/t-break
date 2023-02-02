import { configureStore } from "@reduxjs/toolkit";
import answerReducer from '../reducers/answerReducer'

const store = configureStore({
  reducer: answerReducer
});

export default store;