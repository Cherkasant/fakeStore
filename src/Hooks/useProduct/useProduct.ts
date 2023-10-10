import { useQuery } from '@tanstack/react-query';
import { getSingleProduct } from '../../Redux/utils/api';

export function useProduct(id: number | undefined) {
  return useQuery({
    queryKey: ['useProduct', id],
    queryFn: () => getSingleProduct(id),
    enabled: !!id
  });
}
