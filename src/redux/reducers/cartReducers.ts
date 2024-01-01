import ActionTypes from "../../constants/action_types";

interface Product {
  id?: number;
  title?: string;
  price?: number;
  quantity?: number;
  total?: number;
  discountPercentage?: number;
  discountedPrice?: number;
  thumbnail?: string;
}

export interface cartStateInterface {
  cartItems: {
    cartId: number;
    products: Product[];
    totalQuantity: number;
    totalProducts: number;
  } | null;
  isLoading: boolean;
  error?: any;
}

const initialState: cartStateInterface = {
  cartItems: null,
  isLoading: false,
};

export const cartReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART_REQUEST:
      return {};
    case ActionTypes.ADD_TO_CART_SUCCESS:
      return {};
    case ActionTypes.ADD_TO_CART_FAILURE:
      return {};

    default:
      return state;
  }
};
