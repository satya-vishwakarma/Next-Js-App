import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import nextConfig from '../next.config';
type Props = {
  children?: any;
};
const SessionManager = ({ children }: Props) => {
  const idleTimerTimeout = nextConfig.publicRuntimeConfig?.idleTimerTimeout;
  const maxIdleTime = nextConfig.publicRuntimeConfig?.maxIdleTime;
  const { data: session, update } = useSession();
  const [isActive, setIsActive] = useState(true);
  const [idleTime, setIdleTime] = useState(0);
  const [expiresOn, setExpiresOn] = useState(
    new Date().setHours(new Date().getHours() + 1),
  );

  /*  useEffect(() => {
    if (session?.user?.token) {
      let exp: any = jwtDecode(session?.user?.token).exp;
      setExpiresOn(exp * 1000);
    }
  }, [session]) */ /*   useEffect(() => {
    const sessionInterval = setInterval(
      () => {
        if (session?.user?.token) {
          if (!isActive) {
            setIdleTime(idleTime + 30);
          }
          let diff = (expiresOn - new Date().getTime()) / 1000;
          if (diff < 300) {
            //     refreshToken();
          }
        }
      },
      1000 * 30 * 1,
    );

    return () => {
      clearInterval(sessionInterval);
    };
  }, [idleTime, expiresOn, isActive]); */

  const onIdle = () => {
    setIsActive(false);
    setIdleTime(0);
  };
  const onActive = () => {
    setIsActive(true);
    if (idleTime > maxIdleTime) {
      signOut({ callbackUrl: '/' });
    }
    setIdleTime(0);
  };
  useIdleTimer({
    onIdle,
    onActive,
    timeout: idleTimerTimeout,
    crossTab: true,
  });
  return <>{children}</>;
};

export default SessionManager;
