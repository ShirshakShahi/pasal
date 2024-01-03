import { API } from "../../config/baseurlProvider";
import ActionTypes from "../../constants/action_types";
import ApiEndpoints from "../../constants/api_endpoints";

export const getCart: any = () => async (dispatch: any) => {
  dispatch({
    type: ActionTypes.GET_CART_REQUEST,
  });

  try {
    const { data } = await API.get(ApiEndpoints.GET_CART);

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

export const updateCartQuantity: any =
  (id: number, qty: number, price: number) => (dispatch: any) => {
    dispatch({
      type: ActionTypes.UPDATE_CART_QUANTITY,
      payload: { id, qty, price },
    });
  };

export const addToCart: any = (id: number) => async (dispatch: any) => {
  dispatch({
    type: ActionTypes.ADD_TO_CART_REQUEST,
  });

  try {
    const { data } = await API.post(
      ApiEndpoints.ADD_TO_CART,

      {
        userId: 1,
        products: [
          {
            id,
            quantity: 1,
          },
        ],
      }
    );

    const refinedData = data.products[0];

    dispatch({
      type: ActionTypes.ADD_TO_CART_SUCCESS,
      payload: refinedData,
    });
  } catch (error: any) {
    dispatch({
      type: ActionTypes.ADD_TO_CART_FAILURE,
      payload: error?.message,
    });
  }
};
