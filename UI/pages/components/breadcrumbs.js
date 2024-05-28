// import node module libraries
import {
  Breadcrumb,
  Card,
  Col,
  Container,
  Nav,
  Row,
  Tab,
} from 'react-bootstrap';

// import widget/custom components
import { HighlightCode } from '@/widgets';

// import react code data file
import { BasicBreadcrumb } from '@/data/code/BreadcrumbCode';

const Breadcrumbs = () => {
  return (
    <Container fluid className="p-6">
      <Row>
        <Col xl={12} lg={12} md={12} sm={12}>
          <div className="border-bottom d-md-flex align-items-center justify-content-between mb-4 pb-4">
            <div className="mb-md-0 mb-3">
              <h1 className="h2 fw-bold mb-1">Breadcrumb</h1>
              <p className="mb-0 ">
                Indicate the current page’s location within a navigational
                hierarchy that automatically adds separators via CSS.
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12}>
          <div id="button" className="mb-4">
            <h3>Basic example</h3>
            <p>
              Add <code>active</code> prop to active{' '}
              <code>Breadcrumb.Item</code> . Do not set both <code>active</code>{' '}
              and <code>href</code> attributes. <code>active</code> overrides{' '}
              <code>href</code> and <code>span</code> element is rendered
              instead of <code>a</code>.
            </p>
          </div>
          <Tab.Container defaultActiveKey="all">
            <Card>
              <Card.Header className="border-bottom-0 p-0 ">
                <Nav className="nav-lb-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
                      Design
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="approved" className="mb-sm-3 mb-md-0">
                      Code
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body className="p-0">
                <Tab.Content>
                  <Tab.Pane eventKey="all" className="p-4 pb-4">
                    <Breadcrumb>
                      <Breadcrumb.Item active>Home</Breadcrumb.Item>
                    </Breadcrumb>
                    <Breadcrumb>
                      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                      <Breadcrumb.Item active>Library</Breadcrumb.Item>
                    </Breadcrumb>
                    <Breadcrumb>
                      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                      <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                      <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                  </Tab.Pane>

                  <Tab.Pane eventKey="approved" className="react-code p-4 pb-4">
                    <HighlightCode code={BasicBreadcrumb} />
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Card>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};
export default Breadcrumbs;
