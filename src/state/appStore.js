import { configureStore } from "@reduxjs/toolkit";
import { myReducer } from "../reducer/myReducer";
import logger from "redux-logger";
import rootSaga from "../saga/rootSaga";
import createSagaMiddleware from "@redux-saga/core";
const sagaMiddleware = createSagaMiddleware();

export const appStore = configureStore({
  reducer: { myReducer },
  middleware: () => {
    return [logger, sagaMiddleware];
  },
});
sagaMiddleware.run(rootSaga);
