import { FC } from 'react';
import { ProductType } from '../../Redux/Types/products';
import styles from './Product.module.css';
import { useNavigate } from 'react-router';
import { Button } from 'antd';
import { useDeleteProduct } from '../../Hooks/useDeleteProduct/useDeleteProduct';

type ProductPropsType = {
  product: ProductType;
};
const Product: FC<ProductPropsType> = ({ product }) => {
  const navigate = useNavigate();
  const { refetch } = useDeleteProduct(product.id);
  return (
    <div
      className={styles.container}
      onClick={() => {
        navigate(`/products/${product.id}`);
      }}>
      <div className={styles.title}>{product.title}</div>
      <Button
        className={styles.btn}
        htmlType={'button'}
        type={'primary'}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
          refetch();
        }}>
        {'Delete'}
      </Button>
    </div>
  );
};

export default Product;
