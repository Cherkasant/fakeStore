import { useParams } from 'react-router';
import styles from '../Catalog/Catalog.module.css';
import Loader from '../../Components/Loader';
import { useProduct } from '../../Hooks/useProduct/useProduct';

const ProductPage = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useProduct(+id!);
  if (isLoading)
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );

  if (error) return <div>{'An error has occurred: ' + error}</div>;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageBlock}>
        <div className={styles.category}>{data?.category}</div>
        <img src={data?.image} alt="no image..." className={styles.image} />
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.title}>{data?.title}</div>
        <div className={styles.price}>{data?.price}$</div>
        <div className={styles.descContainer}>
          <div className={styles.descTitle}>{'Description'}</div>
          <div>{data?.description}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
