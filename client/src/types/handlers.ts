import type { ProductType } from './product';

export type AddProductHandlerType = (
  event: React.FormEvent<HTMLFormElement>,
) => Promise<void>;

export type DeleteHandlerType = (id: ProductType['id']) => void;
