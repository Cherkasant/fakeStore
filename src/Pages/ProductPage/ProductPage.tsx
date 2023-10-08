import { useParams } from 'react-router';
import { getSingleProduct } from '../../Redux/utils/api';
import { useQuery } from '@tanstack/react-query';
import styles from '../Catalog/Catalog.module.css';
import Loader from '../../Components/Loader';

const ProductPage = () => {
  const params = useParams();
  const { id } = params;
  const { isLoading, error, data } = useQuery({
    queryKey: ['useProduct', id],
    queryFn: () => {
      if (id) {
        return getSingleProduct(+id);
      }
    }
  });
  if (isLoading)
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );

  if (error) return <div>{'An error has occurred: ' + error}</div>;

  return (
    <div>
      <div>{data?.title}</div>
      <div>{data?.price}</div>
      <div>{data?.description}</div>
      <div>{data?.category}</div>
      <img src={data?.image} alt="no image..." />
    </div>
  );
};

export default ProductPage;
