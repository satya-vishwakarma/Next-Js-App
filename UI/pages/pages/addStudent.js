// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { AddStudent } from 'sub-components';
import { PageHeading } from 'widgets';

// import sub components

const AddStudentPage = () => {
  return (
    <Container fluid className="p-6">
 <PageHeading heading="Add Student" />
      <AddStudent />
    </Container>
  )
}

export default AddStudentPage