export type ProductType = {
  id: number;
  title: string;
  description: string;
  img: string;
  price: number;
  createdAt: Date;
};

export type AddProductFormData = {
  title: string;
  description: string;
  price: string;
  img: string;
};

export type ProductContextType = {
  products: ProductType[];
  favorites: ProductType[];
};

export type ProductsContextActions =
  | {
      type: 'CLEAR_ALL_PRODUCTS';
    }
  | { type: 'ADD_PRODUCT'; payload: ProductType }
  | { type: 'DELETE_PRODUCT'; payload: ProductType['id'] }
  | { type: 'EDIT_PRODUCT'; payload: ProductType }
  | { type: 'SET_PRODUCTS'; payload: ProductType[] }
  | { type: 'ADD_PRODUCT_TO_FAVORITES'; payload: ProductType };
