import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const composedEnhancer = compose(applyMiddleware(logger));

export const store = createStore(rootReducer, composedEnhancer);
