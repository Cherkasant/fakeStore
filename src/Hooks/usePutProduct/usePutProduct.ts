import { useQuery } from '@tanstack/react-query';
import { updateProduct } from '../../Redux/utils/api';
import { PostProduct } from '../../Redux/Types/products';

export function usePutProduct(id: number, data: PostProduct) {
  return useQuery({
    queryKey: ['usePutProduct', id],
    queryFn: () => updateProduct(data, id)
  });
}
