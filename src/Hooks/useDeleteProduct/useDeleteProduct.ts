import { useQuery } from '@tanstack/react-query';
import { deleteProduct } from '../../Redux/utils/api';

export function useDeleteProduct(id: number) {
  return useQuery({
    queryKey: ['useDeleteProduct', id],
    queryFn: () => deleteProduct(id)
  });
}
