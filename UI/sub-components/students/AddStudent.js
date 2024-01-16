// import node module libraries
import { Card, Col, Form, Row } from 'react-bootstrap';

const AddStudent = () => {
  return (
    <Row className="mb-8 justify-content-center">

      <Col xl={9} lg={8} md={12} xs={12}>
        {/* card */}
        <Card id="edit">
          {/* card body */}
          <Card.Body className='mt-5'>

            <Form>
              {/* New email */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="newEmailAddress">First Name</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="text" placeholder="Enter your first name" id="firstName" required />
                </Col>

              </Row>
            </Form>

            <Form>


              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="lastName">Last Name</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="text" placeholder="Enter your last name" id="lastName" required />
                </Col>
              </Row>

              {/* New password */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="fatherName">Father Name</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="text" placeholder="Enter your father name" id="fatherName" required />
                </Col>
              </Row>

              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="fatherName">Mother Name</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="text" placeholder="Enter your Mother name" id="motherName" required />
                </Col>
              </Row>



            </Form>

          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default AddStudent