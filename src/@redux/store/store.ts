/** @format */

import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, combineReducers, applyMiddleware, Reducer } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

import postReducer, { PostState } from "../reducers/postReducer";
import commentReducer, { CommentState } from "../reducers/commentReducer";
import { PostActionTypes } from "../actions/postActions";
import { CommentActionTypes } from "../actions/commentActions";

export type RootState = Partial<{
  post: PostState;
  comment: CommentState;
}>;

const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage,
  whitelist: ["post", "comment"],
};

const rootReducer = combineReducers<{
  post: (state: PostState | undefined, action: PostActionTypes) => PostState;
  comment: (
    state: CommentState | undefined,
    action: CommentActionTypes
  ) => CommentState;
}>({
  post: postReducer,
  comment: commentReducer,
});

const persistedReducer = persistReducer<RootState>(
  persistConfig,
  rootReducer as unknown as Reducer<RootState>
);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware())
);

const persistor = persistStore(store);

export { store, persistor };
