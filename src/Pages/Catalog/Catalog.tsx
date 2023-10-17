import ProductList from '../../Components/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import authSelector from '../../Redux/Selectors/authSelector';
import { useProducts } from '../../Hooks/useProducts/useProducts';
import { useEffect, useState } from 'react';
import { setProducts } from '../../Redux/Reducers/authReducer';
import Modal from '../../Components/Modal';
import classNames from 'classnames';
import styles from './Catalog.module.css';

const Catalog = () => {
  const isLoggedIn = useSelector(authSelector.getLoggedIn);
  const { data } = useProducts(isLoggedIn);
  const dispatch = useDispatch();

  const isVisible = useSelector(authSelector.isVisible);

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data]);

  const [activeModal, setActiveModal] = useState(false);

  return (
    <div
      className={classNames(styles.wrapModal, {
        [styles.showModal]: activeModal
      })}>
      <ProductList productsList={data} />
      <Modal isOpened={isVisible} />
    </div>
  );
};

export default Catalog;
