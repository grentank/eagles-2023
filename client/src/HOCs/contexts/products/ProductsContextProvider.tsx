import React, { useReducer } from 'react';
import {
  ProductsContext,
  ProductsDispatchContext,
} from './productsContext';
import productsReducer from './productsReducer';

type ProductsContextProviderProps = {
  children: JSX.Element;
};

export default function ProductsContextProvider({
  children,
}: ProductsContextProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(productsReducer, {
    products: [],
    favorites: [],
  });
  return (
    <ProductsContext.Provider value={state}>
      <ProductsDispatchContext.Provider value={dispatch}>
        {children}
      </ProductsDispatchContext.Provider>
    </ProductsContext.Provider>
  );
}
