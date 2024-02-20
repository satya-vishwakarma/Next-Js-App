// import node module libraries

import { Container } from 'react-bootstrap';

const AuthLayout = (props: any) => {
  return <Container className="d-flex flex-column">{props.children}</Container>;
};
export default AuthLayout;
