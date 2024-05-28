// import node module libraries
import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  OverlayTrigger,
  Row,
  Tab,
  Tooltip,
} from 'react-bootstrap';

// import widget/custom components
import { HighlightCode } from '@/widgets';

// import react code data file
import { BasicTooltip } from '@/data/code/TooltipsCode';

const Tooltips = () => {
  return (
    <Container fluid className="p-6">
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom d-md-flex align-items-center justify-content-between mb-4 pb-4">
            <div className="mb-md-0 mb-3">
              <h1 className="h2 fw-bold mb-1">Tooltips</h1>
              <p className="mb-0 ">
                Documentation and examples for adding custom Bootstrap tooltips.
                A tooltip component for a more stylish alternative to that
                anchor tag <code>title</code> attribute.
              </p>
            </div>
          </div>
        </Col>
      </Row>

      {/* tooltips */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12}>
          <div id="tooltips" className="mb-4">
            <h3>Examples</h3>
            <p>
              Hover over the buttons below to see the four tooltips directions:
              top, right, bottom, and left. You can pass the{' '}
              <code>Overlay</code> injected props directly to the Tooltip
              component.
            </p>
          </div>

          <Tab.Container defaultActiveKey="all">
            <Card>
              <Card.Header className="border-bottom-0 p-0">
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
                    {['top', 'right', 'bottom', 'left'].map((placement) => (
                      <OverlayTrigger
                        key={placement}
                        placement={placement}
                        overlay={
                          <Tooltip id={`tooltip-${placement}`}>
                            Tooltip on <strong>{placement}</strong>.
                          </Tooltip>
                        }
                      >
                        <Button
                          variant="secondary"
                          className="mb-lg-0 mb-2 me-1"
                        >
                          Tooltip on {placement}
                        </Button>
                      </OverlayTrigger>
                    ))}
                  </Tab.Pane>
                  <Tab.Pane eventKey="approved" className="react-code p-4 pb-4">
                    <HighlightCode code={BasicTooltip} />
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Card>
          </Tab.Container>
        </Col>
      </Row>
      {/* end of tooltips */}
    </Container>
  );
};

export default Tooltips;
