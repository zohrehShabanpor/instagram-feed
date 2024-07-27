/** @format */

import { createStore, combineReducers } from "redux";
import postReducer from "../reducers/postReducer";

const rootReducer = combineReducers({
  post: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
