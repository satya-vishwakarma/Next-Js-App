import { useSession } from 'next-auth/react';
import Router from 'next/router';
import { useEffect } from 'react';

type Props = {
  children?: any;
};
const SessionManager = ({ children }: Props) => {
  const { status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') Router.replace('/authentication/sign-in');
  }, [status]);

  return <>{children}</>;
};

export default SessionManager;
