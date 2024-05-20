// import node module libraries

import { Container } from 'react-bootstrap';

// import widget as custom components
import { ListStudent } from './../../sub-components';
import { PageHeading } from './../../widgets';

// import sub components

const ListStudentPage = () => {
  return (
    <Container fluid className="p-6">
      <PageHeading heading="List Student" />
      <ListStudent />
    </Container>
  );
};

export default ListStudentPage;

ListStudentPage.auth = true;
