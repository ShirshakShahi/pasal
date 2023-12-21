import { API } from "../../config/baseurlProvider";
import ActionTypes from "../../constants/action_types";
import ApiEndpoints from "../../constants/api_endpoints";

export const getAllProducts: any = () => async (dispatch: any) => {
  dispatch({
    type: ActionTypes.GET_ALL_PRODUCTS_REQUEST,
  });

  try {
    const { data } = await API.get(ApiEndpoints.GET_ALL_PRODUCTS);
    console.log(data.products);

    dispatch({
      type: ActionTypes.GET_ALL_PRODUCTS_SUCCESS,
      payload: data?.products,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.GET_ALL_PRODUCTS_FAILURE,
      payload: err,
    });
  }
};
