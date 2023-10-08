import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from './Form.module.css';
import { Button } from 'antd';
import { TOKEN_KEY, url } from '../../Redux/utils/api';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setLoggedIn } from '../../Redux/Reducers/authReducer';
import { useNavigate } from 'react-router';
import { PathNames } from '../../Pages/Router/Router';

type Inputs = {
  username: string;
  password: string;
};

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function loginUser(data: Inputs) {
    try {
      const response = await axios.post(url + 'auth/login', data);
      localStorage.setItem(TOKEN_KEY, JSON.stringify(response.data.token));
      dispatch(setLoggedIn(true));
      navigate(PathNames.Catalog);
    } catch (error) {
      console.error(error);
    }
  }

  const {
    control,
    register,
    clearErrors,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>({
    defaultValues: {
      username: '',
      password: ''
    },
    mode: 'onSubmit'
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => loginUser(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <div className={styles.title}>{'Sign in'}</div>
        <div className={styles.inputs}>
          <Controller
            control={control}
            name="username"
            render={({ field: { onChange, value } }) => (
              <div className={styles.inputContainer}>
                <label htmlFor={'text'} className={styles.label}>
                  Username
                </label>
                <input
                  className={styles.input}
                  type={'text'}
                  id={'text'}
                  placeholder={'Full name'}
                  onChange={onChange}
                  value={value}
                />
              </div>
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <div className={styles.inputContainer}>
                <label htmlFor={'password'} className={styles.label}>
                  {'Password'}
                </label>
                <input
                  className={styles.input}
                  id={'password'}
                  onChange={onChange}
                  onFocus={() => {
                    clearErrors('password');
                  }}
                  value={value}
                  type={'password'}
                  placeholder="Password"
                />
              </div>
            )}
          />
        </div>
        <Button className={styles.btn} htmlType={'submit'}>
          {'Log In'}
        </Button>
      </div>
    </form>
  );
};

export default Form;
