import axios from 'axios';
import type {
  AddProductFormData,
  ProductType,
} from '../types/product';

const serviceInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1/products',
});

class ProductService {
  static async getProducts(): Promise<ProductType[]> {
    const response = await serviceInstance.get<ProductType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }

  static async sendNewProduct(
    formData: AddProductFormData,
  ): Promise<ProductType> {
    const response = await serviceInstance.post<ProductType>(
      '/',
      formData,
    );
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('adding product server error'));
  }

  static async deleteProductById(
    productId: ProductType['id'],
  ): Promise<void> {
    const response = await serviceInstance.delete(`/${productId}`);
    if (response.status !== 200)
      return Promise.reject(new Error('delete server error'));
  }

  static async editProduct(
    formData: AddProductFormData,
    id: ProductType['id'],
  ): Promise<ProductType> {
    const response = await serviceInstance.patch<ProductType>(`/${id}`, formData);
    if(response.status !== 200) return Promise.reject(new Error('edit server error'));
    return response.data;
  }
}

export default ProductService;
