import { useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row, Table } from "react-bootstrap";
import EmployeeModel from "../models/EmployeeModel";
import AllowanceModel from "../models/AllowanceModel";
import DeductionModel from "../models/DeductionModel";

const WidgetEmployeeAdd = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [employee, setEmployee] = useState(EmployeeModel);
  const [allowance, setAllowance] = useState(AllowanceModel);
  const [deduction, setDeduction] = useState(DeductionModel);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let type = e.target.type;

    if (type === 'number') {
      value = parseInt(value);
    }

    setEmployee((values) => ({...values, [name]: value}))
  }

  const handleAllowanceAndDeduction = (e, isAllowance) => {
    let name = e.target.name;
    let value = e.target.value;
    let type = e.target.type;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (isAllowance) {
      setAllowance((values) => ({...values, [name]: value}))
    } else {
      setDeduction((values) => ({...values, [name]: value}))
    }
  }

  const addAllowance = () => {
    if (allowance.name && allowance.total) {
      setEmployee((values) => {
        let currentData = {...values}
        currentData.allowances.push(allowance);
        return currentData
      })
    }
  }

  const addDeduction = () => {
    if (deduction.name && deduction.total) {
      setEmployee((values) => {
        let currentData = {...values}
        currentData.deductions.push(deduction);
        return currentData
      })
    }
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
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Allowance</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control placeholder="Name" type="text" name="name" value={allowance.name} onChange={(e) => handleAllowanceAndDeduction(e, true)}/>
                  <Form.Control placeholder="Total" type="number" name="total" value={allowance.total} onChange={(e) => handleAllowanceAndDeduction(e, true)}/>
                  <Button onClick={addAllowance} variant="secondary" size="sm">Add</Button>
                </InputGroup>
              </Form.Group>
              {employee.allowances.length > 0 && (
                <Table bordered hover striped>
                  <thead>
                    <tr>
                      <th>Allowance</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employee.allowances.map((value, index) => (
                      <tr key={index}>
                        <td>{value.name}</td>
                        <td>{value.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}

              <Form.Group className="mb-3">
                <Form.Label>Deduction</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control placeholder="Name" type="text" name="name" value={deduction.name} onChange={(e) => handleAllowanceAndDeduction(e)}/>
                  <Form.Control placeholder="Total" type="number" name="total" value={deduction.total} onChange={(e) => handleAllowanceAndDeduction(e)}/>
                  <Button onClick={addDeduction} variant="secondary" size="sm">Add</Button>
                </InputGroup>
              </Form.Group>
              {employee.deductions.length > 0 && (
                <Table bordered hover striped>
                  <thead>
                    <tr>
                      <th>deduction</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employee.deductions.map((value, index) => (
                      <tr key={index}>
                        <td>{value.name}</td>
                        <td>{value.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default WidgetEmployeeAdd;