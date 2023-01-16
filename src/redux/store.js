import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { activityReducer } from "./reducers/activity_reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore(
	{
		reducer: {
			activity: activityReducer,
		},
	},
	composeEnhancers(applyMiddleware(thunk))
);
