import styles from '../Form/Form.module.css';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'antd';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { usePostProduct } from '../../Hooks/usePostProduct/usePostProduct';
import { FC } from 'react';
import classNames from 'classnames';

type ModalProps = {
  isOpened: boolean;
};

const Modal: FC<ModalProps> = ({ isOpened }) => {
  const personSchema = z
    .object({
      title: z.string().min(1),
      price: z.number().min(1),
      description: z.string().min(8),
      image: z.string().optional(),
      category: z.string().min(4)
    })
    .required();
  type Product = z.infer<typeof personSchema>;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    control,
    register,
    clearErrors,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
    reset
  } = useForm<Product>({
    resolver: zodResolver(personSchema),
    defaultValues: {
      title: '',
      price: 0,
      description: '',
      image: '',
      category: ''
    },
    mode: 'onSubmit'
  });
  const OnSubmit: SubmitHandler<Product> = (data) => {
    usePostProduct(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(OnSubmit)}>
      <div className={classNames(styles.container, { [styles.activeModal]: isOpened })}>
        <div className={styles.title}>{'Create form'}</div>
        <div className={styles.inputs}>
          <Controller
            control={control}
            name="title"
            render={({ field: { onChange, value } }) => (
              <div className={styles.inputContainer}>
                <label htmlFor={'text'} className={styles.label}>
                  {'Title'}
                </label>
                <input
                  {...register('title')}
                  className={styles.input}
                  type={'text'}
                  id={'text'}
                  placeholder={'title'}
                  onChange={onChange}
                  value={value}
                />
                {errors.title && <div className={styles.error}>{errors.title.message}</div>}
              </div>
            )}
          />
          <Controller
            control={control}
            name="price"
            render={({ field: { onChange, value } }) => (
              <div className={styles.inputContainer}>
                <label htmlFor={'price'} className={styles.label}>
                  {'Price'}
                </label>
                <input
                  {...register('price')}
                  className={styles.input}
                  id={'price'}
                  onChange={onChange}
                  onFocus={() => {
                    clearErrors('price');
                  }}
                  value={value}
                  type={'number'}
                  placeholder="Price"
                />
                {errors.price && <div className={styles.error}>{errors.price.message}</div>}
              </div>
            )}
          />
          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, value } }) => (
              <div className={styles.inputContainer}>
                <label htmlFor={'description'} className={styles.label}>
                  {'description'}
                </label>
                <input
                  {...register('description')}
                  className={styles.input}
                  id={'description'}
                  onChange={onChange}
                  onFocus={() => {
                    clearErrors('description');
                  }}
                  value={value}
                  type={'text'}
                  placeholder="description"
                />
                {errors.description && <div className={styles.error}>{errors.description.message}</div>}
              </div>
            )}
          />
          <Controller
            control={control}
            name="image"
            render={({ field: { onChange, value } }) => (
              <div className={styles.inputContainer}>
                <label htmlFor={'image'} className={styles.label}>
                  {'image'}
                </label>
                <input
                  {...register('image')}
                  className={styles.input}
                  id={'image'}
                  onChange={onChange}
                  onFocus={() => {
                    clearErrors('image');
                  }}
                  value={value}
                  type={'file'}
                  placeholder="image"
                />
                {errors.image && <div className={styles.error}>{errors.image.message}</div>}
              </div>
            )}
          />
          <Controller
            control={control}
            name="category"
            render={({ field: { onChange, value } }) => (
              <div className={styles.inputContainer}>
                <label htmlFor={'category'} className={styles.label}>
                  {'category'}
                </label>
                <input
                  {...register('category')}
                  className={styles.input}
                  id={'category'}
                  onChange={onChange}
                  onFocus={() => {
                    clearErrors('category');
                  }}
                  value={value}
                  type={'text'}
                  placeholder="category"
                />
                {errors.category && <div className={styles.error}>{errors.category.message}</div>}
              </div>
            )}
          />
        </div>
        <div>
          <Button className={styles.btn} htmlType={'submit'} disabled={!isDirty || isSubmitting}>
            {'Save'}
          </Button>
          <Button className={classNames(styles.btn, styles.btnCancel)} htmlType={'reset'}>
            {'Cancel'}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Modal;
