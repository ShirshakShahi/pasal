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
    default:
      return state;
  }
};
