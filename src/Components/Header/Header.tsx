import styles from './Header.module.css';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { setLoggedIn, setModalOpened } from '../../Redux/Reducers/authReducer';
import { TOKEN_KEY } from '../../Redux/utils/api';
import { useNavigate } from 'react-router';
import { PathNames } from '../../Pages/Router/Router';

export const MOCK_DATA = {
  title: '',
  price: 12334,
  description: 'mock',
  image: 'https://i.pravatar.cc',
  category: 'jewelery'
};

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutClick = () => {
    dispatch(setLoggedIn(false));
    localStorage.removeItem(TOKEN_KEY);
    navigate(PathNames.SignIn);
  };

  const onAddClick = () => {
    dispatch(setModalOpened(true));
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <Button className={styles.btn} htmlType={'button'} type={'primary'} onClick={onAddClick}>
          {'Add new'}
        </Button>
        <Button className={styles.btn} htmlType={'button'} title={'Logout'} type={'primary'} onClick={onLogoutClick}>
          {'Logout'}
        </Button>
      </div>
    </div>
  );
};

export default Header;
