import axios from 'axios';
import type {
  AddProductFormData,
  ProductType,
} from '../types/product';

const productsService = axios.create({
  baseURL: 'http://localhost:3000/api/v1/products',
});

class ProductsService {
  static async getProducts(): Promise<ProductType[]> {
    const response = await productsService.get<ProductType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }

  static async addProduct(
    productFormData: AddProductFormData,
  ): Promise<ProductType> {
    const response = await productsService.post<ProductType>(
      '/',
      productFormData,
    );
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('Server error adding product'));
  }

  static async deleteProduct(id: ProductType['id']): Promise<void> {
    const response = await productsService.delete(`/${id}`);
    if (response.status === 200) return;
    return Promise.reject(
      new Error(`Server error deleting product id ${id}`),
    );
  }
}

export default ProductsService;
