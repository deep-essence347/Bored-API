import boredApi from "../../boredApi";
import { ActionTypes } from "../constants/actionTypes";

export const getRandomProduct = () => async (dispatch) => {
	const response = await boredApi.get("/activity");
	dispatch({ type: ActionTypes.RANDOM_ACTIVITY, payload: response.data });
};

export const filterProduct = (params) => async (dispatch) => {
	const response = await boredApi.get("/activity", { params: params });
	dispatch({ type: ActionTypes.FILTERED_ACTIVITY, payload: response.data });
};
