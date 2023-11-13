export type ProductType = {
  id: number;
  title: string;
  description: string;
  img: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
};

export type AddProductFormData = {
  title: string;
  description: string;
  price: string;
  img: string;
};
