import type { AddProductFormData } from './product';

export type AddProductHandler = (
  formData: AddProductFormData,
) => Promise<void>;

export type AsyncHandlerType<T = void> = (arg: T) => Promise<void>;
