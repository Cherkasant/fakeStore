import { useQuery } from '@tanstack/react-query';
import { PathNames } from '../../Pages/Router/Router';
import { useNavigate } from 'react-router';
import { getAllProducts } from '../../Redux/utils/api';

export function useProducts(isLoggedIn: boolean) {
  const navigate = useNavigate();
  return useQuery({
    queryKey: ['useProducts'],
    queryFn: () => {
      if (isLoggedIn) {
        return getAllProducts();
      } else {
        navigate(PathNames.SignIn);
      }
    }
  });
}
