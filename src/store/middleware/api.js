import axios from "axios";
import * as actions from "../api";

const api =
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) {
      next(action);
      return;
    }

    const { baseURL, url, method, data, onSuccess, onError, onStart } =
      action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const response = await axios.request({
        baseURL,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
          "Access-Control-Allow-Headers": "*",
        },
        url,
        method,
        data,
      });

      //general action
      dispatch(actions.apiCallSuccess(response.data));

      //specific
      if (onSuccess) {
        dispatch({ type: onSuccess, payload: response.data });
      }
    } catch (ex) {
      //general action
      dispatch(actions.apiCallFailed(ex.message));

      //specific action
      if (onError) {
        dispatch({ type: onError, payload: ex.message });
      }
    }
  };

export default api;
