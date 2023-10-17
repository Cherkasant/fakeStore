import { useQuery } from '@tanstack/react-query';
import { addNewProduct } from '../../Redux/utils/api';
import { PostProduct } from '../../Redux/Types/products';

export function usePostProduct(data: PostProduct) {
  return useQuery({
    queryKey: ['usePostProduct'],
    queryFn: () => addNewProduct(data),
    enabled: false
  });
}
