import Form from '../../Components/Form';
import { TOKEN_KEY } from '../../Redux/utils/api';
import { setLoggedIn } from '../../Redux/Reducers/authReducer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { PathNames } from '../Router/Router';
import { useNavigate } from 'react-router';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem(TOKEN_KEY)) {
      dispatch(setLoggedIn(true));
      navigate(PathNames.Catalog);
    }
  }, []);
  return (
    <div>
      <Form />
    </div>
  );
};

export default SignIn;
