import { createContext, useContext } from 'react';
import type {
  ProductContextType,
  ProductsContextActions,
} from '../../../types/product';

export const ProductsContext =
  createContext<ProductContextType | null>(null);
export const ProductsDispatchContext =
  createContext<React.Dispatch<ProductsContextActions> | null>(null);

export function useProductsContext(): ProductContextType {
  const context = useContext(ProductsContext);
  if (!context) throw new Error('Products context error');
  return context;
}

export function useProductsDispatch(): React.Dispatch<ProductsContextActions> {
  const context = useContext(ProductsDispatchContext);
  if (!context) throw new Error('Products dispatch error');
  return context;
}
