import { ActionTypes } from "../constants/actionTypes";

const initState = {
	activity: [],
};

export const activityReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case ActionTypes.RANDOM_ACTIVITY:
			return { ...state, activity: payload };
		case ActionTypes.FILTERED_ACTIVITY:
			return { ...state, activity: payload };
		default:
			return { ...state };
	}
};
