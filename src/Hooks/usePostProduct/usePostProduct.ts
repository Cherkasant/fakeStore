import { useQuery } from '@tanstack/react-query';
import { addNewProduct } from '../../Redux/utils/api';

export function usePostProduct(id: number) {
  return useQuery({
    queryKey: ['usePostProduct', id],
    queryFn: () => addNewProduct({ title: '', category: '', description: '', price: 1, image: '' })
  });
}
