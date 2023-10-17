import { Outlet, useLocation } from 'react-router';
import { PathNames } from '../../Pages/Router/Router';
import Catalog from '../../Pages/Catalog';
import styles from './PagesWrapper.module.css';
import Header from '../Header/Header';

const PagesWrapper = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.title}>Catalogue</div>
      <div className={styles.innerContainer}>{pathname === PathNames.Home ? <Catalog /> : <Outlet />}</div>
    </div>
  );
};

export default PagesWrapper;
