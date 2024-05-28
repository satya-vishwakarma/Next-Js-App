// import node module libraries
import { Col, Container, Row } from 'react-bootstrap';

// import sub components
import Version_01_00_00 from '@/sub-components/changelog/Version_01_00_00';

const ChangeLog = () => {
  return (
    <Container fluid className="p-6">
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom d-md-flex justify-content-between align-items-center mb-4 pb-4">
            <div className="mb-md-0 mb-3">
              <h1 className="h2 fw-bold mb-0">Changelog</h1>
              <p className="mb-0">
                We’re constantly improving & updating Dashui. See the latest
                features and improvements.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Version_01_00_00 />
    </Container>
  );
};

export default ChangeLog;
