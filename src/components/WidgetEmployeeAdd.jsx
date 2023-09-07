import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import EmployeeModel from "../models/EmployeeModel";

const WidgetEmployeeAdd = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [employee, setEmployees] = useState(EmployeeModel);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let type = e.target.type;

    if (type === 'number') {
      value = parseInt(value);
    }
    
    setEmployees((values) => ({...values, [name]: value}))
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Employee
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" value={employee.email} onChange={handleInput}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" value={employee.firstName} onChange={handleInput} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastName" value={employee.lastName} onChange={handleInput} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Department</Form.Label>
                <Form.Control type="text" name="department" value={employee.department} onChange={handleInput} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Basic Salary</Form.Label>
                <Form.Control type="number" name="basicSalary" value={employee.basicSalary} onChange={handleInput} />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default WidgetEmployeeAdd;