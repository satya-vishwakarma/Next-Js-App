// import node module libraries
import { ErrorMessage, Formik } from 'formik';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

import { AddStudentSchema } from "./../../validation";




const initialValues = {
  firstName: "",
  lastName: "",
  fatherName: "",
  motherName: "",
  class: "",

};



const AddStudent = () => {

  const classList = [1, 2, 3, 4, 5, 6, 7, 8]





  function ordinal_suffix_of(i) {
    let j = i % 10,
      k = i % 100;
    if (j === 1 && k !== 11) {
      return i + "st";
    }
    if (j === 2 && k !== 12) {
      return i + "nd";
    }
    if (j === 3 && k !== 13) {
      return i + "rd";
    }
    return i + "th";
  }









  return (
    <Row className="mb-8 justify-content-center">

      <Col xl={9} lg={8} md={12} xs={12}>
        {/* card */}
        <Card id="edit">
          {/* card body */}
          <Card.Body className='mt-5'>

            <Formik


              initialValues={initialValues}
              validationSchema={AddStudentSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  setSubmitting(false)
                }, 400)
              }}

            >


              {
                (
                  { values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit, isSubmitting }) => (



                  < Form onSubmit={handleSubmit}>

                    {JSON.stringify(errors)}
                    {/* New email */}
                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="newEmailAddress">First Name</Form.Label>
                      <Col md={8} xs={12}>
                        <Form.Control
                          value={values.firstName}
                          type="text"
                          name='firstName'
                          onChange={handleChange}
                          placeholder="Enter your first name" id="firstName" />

                        <ErrorMessage name="firstName" component="div" />
                      </Col>

                    </Row>


                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="lastName">Last Name</Form.Label>
                      <Col md={8} xs={12}>
                        <Form.Control
                          onChange={handleChange}
                          value={values.lastName}
                          name='lastName'
                          type="text"
                          placeholder="Enter your last name"
                          id="lastName"
                        />
                        <ErrorMessage name="lastName" component="div" />
                      </Col>
                    </Row>


                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="fatherName">Father Name</Form.Label>
                      <Col md={8} xs={12}>
                        <Form.Control

                          onChange={handleChange}
                          value={values.fatherName}

                          type="text" name='fatherName' placeholder="Enter your father name" id="fatherName" />
                        <ErrorMessage className='validation-error-message' name="fatherName" component="div" />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="fatherName">Mother Name</Form.Label>
                      <Col md={8} xs={12}>
                        <Form.Control
                          name='motherName'
                          onChange={handleChange}
                          value={values.motherName}
                          type="text"
                          placeholder="Enter your Mother name" id="motherName" />

                        <ErrorMessage name="motherName" component="div">

                        </ErrorMessage>
                      </Col>
                    </Row>


                    <Row className="mb-3">
                      <Form.Label className="col-sm-4" htmlFor="fatherName">Class</Form.Label>
                      <Col md={8} xs={12}>
                        <Form.Select
                          name='class'
                          onChange={handleChange}
                          value={values.class}
                          aria-label="Default select example">

                          <option value="">Please select</option>
                          {
                            classList.map(i => (
                              <option value={i}>{ordinal_suffix_of(i)}</option>
                            )
                            )

                          }

                        </Form.Select>
                        <ErrorMessage name="class" component="div" />
                      </Col>
                      <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                        <Button variant="primary" type="submit" disabled={isSubmitting}>
                          Save Changes
                        </Button>
                      </Col>
                    </Row>

                  </Form>

                )}

            </Formik>


          </Card.Body>
        </Card>
      </Col>
    </Row >
  )
}

export default AddStudent