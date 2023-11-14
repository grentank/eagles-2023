import type {
  ProductContextType,
  ProductsContextActions,
} from '../../../types/product';

export default function productsReducer(
  state: ProductContextType,
  action: ProductsContextActions,
): ProductContextType {
  const { type } = action;
  switch (type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [action.payload, ...state.products],
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload,
        ),
      };
    case 'ADD_PRODUCT_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'CLEAR_ALL_PRODUCTS':
      return { products: [], favorites: [] };
    case 'EDIT_PRODUCT':
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product,
        ),
      };
    default:
      return state;
  }
}
