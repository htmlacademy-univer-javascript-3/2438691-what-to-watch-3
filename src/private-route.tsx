import {Navigate} from 'react-router-dom';
import {useAppSelector} from '@utils/hooks/use-app-selector.ts';
import {AuthorizationStatus} from '@utils/types/authorization-status.ts';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({children}: PrivateRouteProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={'/login'} />;
}

export default PrivateRoute;
