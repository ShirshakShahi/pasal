import { API } from "../../config/baseurlProvider";
import ActionTypes from "../../constants/action_types";
import ApiEndpoints from "../../constants/api_endpoints";

export const getAllProducts: any = () => async (dispatch: any) => {
  dispatch({
    type: ActionTypes.GET_ALL_PRODUCTS_REQUEST,
  });

  try {
    const { data } = await API.get(ApiEndpoints.GET_ALL_PRODUCTS);

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

export const getProductsByCategory: any =
  (category: string) => async (dispatch: any) => {
    dispatch({
      type: ActionTypes.GET__PRODUCTS_BY_CATEGORY_REQUEST,
    });

    try {
      const { data } = await API.get(
        `${ApiEndpoints.GET_ALL_PRODUCTS_BY_CATEGRORY}/${category}`
      );

      dispatch({
        type: ActionTypes.GET__PRODUCTS_BY_CATEGORY_SUCCESS,
        payload: data?.products,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.GET__PRODUCTS_BY_CATEGORY_FAILURE,
        payload: error,
      });
      console.log("errrrr", error);
    }
  };
