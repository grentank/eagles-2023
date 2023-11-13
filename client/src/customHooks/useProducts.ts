import { useCallback, useEffect, useState } from 'react';
import type {
  AddProductHandlerType,
  DeleteHandlerType,
} from '../types/handlers';
import type {
  AddProductFormData,
  ProductType,
} from '../types/product';
import ProductsService from '../services/productsService';

type UseProductsReturnType = {
  products: ProductType[];
  addProductHandler: AddProductHandlerType;
  deleteProductHandler: DeleteHandlerType;
};

export default function useProducts(): UseProductsReturnType {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    ProductsService.getProducts()
      .then((data) => setProducts(data))
      .catch(console.log);
  }, []);

  const addProductHandler: AddProductHandlerType = useCallback(
    async (event) => {
      event.preventDefault();
      const formData = Object.fromEntries(
        new FormData(event.currentTarget),
      ) as AddProductFormData;

      try {
        const newProduct = await ProductsService.addProduct(formData);
        setProducts((prev) => [newProduct, ...prev]);
      } catch (error) {
        console.log(error);
      }
    },
    [],
  );

  const deleteProductHandler = useCallback(
    (id: ProductType['id']): void => {
      ProductsService.deleteProduct(id)
        .then(() =>
          setProducts((prev) =>
            prev.filter((product) => product.id !== id),
          ),
        )
        .catch(console.log);
    },
    [],
  );

  return {
    products,
    addProductHandler,
    deleteProductHandler,
  };
}
