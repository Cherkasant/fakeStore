import { FC } from 'react';
import { ProductsListType } from '../../Redux/Types/products';
import Product from '../Product';
import styles from './ProductList.module.css';

type ProductListPropsType = {
  productsList: ProductsListType;
};

const ProductList: FC<ProductListPropsType> = ({ productsList }) => {
  return productsList?.length ? (
    <div className={styles.container}>
      {productsList.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  ) : (
    <div>No products yet...</div>
  );
};

export default ProductList;
