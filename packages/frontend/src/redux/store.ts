import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "./auth/reducer";
import { schoolsReducer } from "./schools/reducer";
import { usersReducer } from "./users/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  schools: schoolsReducer,
  users: usersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const middleware = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
