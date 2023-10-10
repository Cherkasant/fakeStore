import { Outlet, useLocation } from 'react-router';
import { PathNames } from '../../Pages/Router/Router';
import Catalog from '../../Pages/Catalog';
import styles from './PagesWrapper.module.css';

const PagesWrapper = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.container}>
      <div className={styles.title}>Catalogue</div>
      <div className={styles.innerContainer}>{pathname === PathNames.Home ? <Catalog /> : <Outlet />}</div>
    </div>
  );
};

export default PagesWrapper;
