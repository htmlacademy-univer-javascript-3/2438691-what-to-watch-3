import {UserAuthBlock} from '@utils/components/user-block/user-auth-block.tsx';
import {UnauthorizedUser} from '@utils/components/user-block/unauthorized-block.tsx';
import {AuthorizationStatus} from '@utils/types/authorization-status.ts';

export function UserBlock(props: {authStatus: AuthorizationStatus}) {
  return props.authStatus === AuthorizationStatus.Auth ? (<UserAuthBlock/>) : (<UnauthorizedUser/>);
}
