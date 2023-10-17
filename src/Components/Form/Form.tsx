import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from './Form.module.css';
import { Button } from 'antd';
import { TOKEN_KEY, url } from '../../Redux/utils/api';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setLoggedIn } from '../../Redux/Reducers/authReducer';
import { useNavigate } from 'react-router';
import { PathNames } from '../../Pages/Router/Router';
import { validationRules } from '../../Redux/utils/validation';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

const Form = () => {
  const personSchema = z
    .object({
      username: z.string().min(1, { message: 'Username is required' }),
      password: z.string().min(4, { message: ' Password must be at least 4 characters' })
    })
    .required();
  type Person = z.infer<typeof personSchema>;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function loginUser(data: Person) {
    try {
      const response = await axios.post(url + 'auth/login', data);
      localStorage.setItem(TOKEN_KEY, JSON.stringify(response.data.token));
      dispatch(setLoggedIn(true));
      navigate(PathNames.Catalog);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  const {
    control,
    register,
    clearErrors,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
    reset
  } = useForm<Person>({
    resolver: zodResolver(personSchema),
    defaultValues: {
      username: '',
      password: ''
    },
    mode: 'onSubmit'
  });
  const onSubmit: SubmitHandler<Person> = async (data) => {
    await loginUser(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <div className={styles.title}>{'Sign in'}</div>
        <div className={styles.inputs}>
          <Controller
            control={control}
            rules={validationRules.fullName}
            name="username"
            render={({ field: { onChange, value } }) => (
              <div className={styles.inputContainer}>
                <label htmlFor={'text'} className={styles.label}>
                  Username
                </label>
                <input
                  {...register('username')}
                  className={styles.input}
                  type={'text'}
                  id={'text'}
                  placeholder={'Full name'}
                  onChange={onChange}
                  value={value}
                />
                {errors.username && <div className={styles.error}>{errors.username.message}</div>}
              </div>
            )}
          />
          <Controller
            control={control}
            rules={validationRules.passwordSignIn}
            name="password"
            render={({ field: { onChange, value } }) => (
              <div className={styles.inputContainer}>
                <label htmlFor={'password'} className={styles.label}>
                  {'Password'}
                </label>
                <input
                  {...register('password')}
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
                {errors.password && <div className={styles.error}>{errors.password.message}</div>}
              </div>
            )}
          />
        </div>
        <div>
          <Button className={styles.btn} htmlType={'submit'} disabled={!isDirty || isSubmitting}>
            {'Log In'}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Form;
