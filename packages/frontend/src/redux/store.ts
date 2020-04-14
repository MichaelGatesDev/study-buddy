import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const middleware = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
