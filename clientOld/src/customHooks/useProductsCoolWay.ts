import ProductService from '../services/productService';
import type {
  AddProductHandler,
  AsyncHandlerType,
} from '../types/handlers';
import type {
  AddProductFormData,
  ProductType,
  ProductsContextActions,
} from '../types/product';

type UseContextProductsReturnType = {
  addProductHandler: AsyncHandlerType<AddProductFormData>;
  initialLoadProducts: AsyncHandlerType;
  deleteHandler: AsyncHandlerType<ProductType['id']>;
  editProductHandler: (
    formData: AddProductFormData,
    id: ProductType['id'],
  ) => Promise<void>;
};

export default function useProductsCoolWay(
  dispatch: React.Dispatch<ProductsContextActions>,
): UseContextProductsReturnType {
  const addProductHandler: AddProductHandler = async (formData) => {
    const newProductFromBackend = await ProductService.sendNewProduct(
      formData,
    );
    dispatch({ type: 'ADD_PRODUCT', payload: newProductFromBackend });
  };

  const initialLoadProducts = async (): Promise<void> => {
    const allProducts = await ProductService.getProducts();
    dispatch({ type: 'SET_PRODUCTS', payload: allProducts });
  };

  const deleteHandler: AsyncHandlerType<ProductType['id']> = async (
    productId,
  ) => {
    try {
      await ProductService.deleteProductById(productId);
      dispatch({ type: 'DELETE_PRODUCT', payload: productId });
    } catch (error) {
      console.log(error);
    }
  };

  const editProductHandler = async (
    formData: AddProductFormData,
    id: ProductType['id'],
  ): Promise<void> => {
    const newEditedProduct = await ProductService.editProduct(
      formData,
      id,
    );
    dispatch({ type: 'EDIT_PRODUCT', payload: newEditedProduct });
  };

  return {
    addProductHandler,
    initialLoadProducts,
    deleteHandler,
    editProductHandler,
  };
}
