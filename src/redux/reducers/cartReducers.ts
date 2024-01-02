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
  cartItems: {
    cartId: 0,
    products: [],
    totalQuantity: 0,
    totalProducts: 0,
  },
  isLoading: false,
};

export const cartReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ActionTypes.GET_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cartItems: action.payload,
        error: null,
      };
    case ActionTypes.GET_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        cartItems: {
          cartId: undefined,
          products: [],
          totalQuantity: 0,
          totalProducts: 0,
        },
      };

    case ActionTypes.UPDATE_CART_QUANTITY:
      const { id, qty, price } = action.payload;
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          products: state.cartItems?.products.map((product) =>
            product.id === id
              ? { ...product, quantity: qty, total: qty * price }
              : product
          ),
        },
      };

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
