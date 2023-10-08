import { FC } from 'react';
import { ProductType } from '../../Redux/Types/products';
import styles from './Product.module.css';
import { useNavigate } from 'react-router';

type ProductPropsType = {
  product: ProductType;
};
const Product: FC<ProductPropsType> = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.container}
      onClick={() => {
        navigate(`/products/${product.id}`);
      }}>
      <div className={styles.title}>{product.title}</div>
    </div>
  );
};

export default Product;
