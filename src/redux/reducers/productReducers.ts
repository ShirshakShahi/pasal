import { message } from "antd";
import { IProducts } from "../../commonInterfaces";
import ActionTypes from "../../constants/action_types";

export interface productStateInterface {
  products: IProducts[];
  isLoading: boolean;
  error: any;
}

const initialState: productStateInterface = {
  products: [],
  isLoading: false,
  error: null,
};

export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {
        products: action.payload,
        isLoading: false,
        error: null,
      };

    case ActionTypes.GET_ALL_PRODUCTS_FAILURE:
      return {
        products: null,
        isLoading: false,
        error: action.payload,
      };

    case ActionTypes.GET__PRODUCTS_BY_CATEGORY_REQUEST:
      return {
        isLoading: true,
        error: null,
        products: null,
      };
    case ActionTypes.GET__PRODUCTS_BY_CATEGORY_SUCCESS:
      return {
        products: action.payload,
        isLoading: false,
        error: null,
      };

    case ActionTypes.GET__PRODUCTS_BY_CATEGORY_FAILURE:
      message.error("something went wrong", 1000);
      return {
        error: action.payload,
        products: null,
        isLoading: false,
      };

    default:
      return state;
  }
};
