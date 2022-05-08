import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancer = compose(applyMiddleware(logger));

export const store = createStore(persistedReducer, undefined, composedEnhancer);

export const persistor = persistStore(store);
