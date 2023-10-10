export type ProductType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export type ProductsListType = Array<ProductType>;

export type PostProduct = {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};
