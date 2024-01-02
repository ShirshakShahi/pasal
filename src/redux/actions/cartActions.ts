import { API } from "../../config/baseurlProvider";
import ActionTypes from "../../constants/action_types";
import ApiEndpoints from "../../constants/api_endpoints";

export const getCart: any = () => async (dispatch: any) => {
  dispatch({
    type: ActionTypes.GET_CART_REQUEST,
  });

  try {
    const { data } = await API.get(ApiEndpoints.GET_CART);

    console.log("data.productsssssssssssssss", data);

    dispatch({
      type: ActionTypes.GET_CART_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    console.log("cart error ", error);
    dispatch({
      type: ActionTypes.GET_CART_FAILURE,
      payload: error?.message,
    });
  }
};
