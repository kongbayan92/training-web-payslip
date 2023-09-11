import { useState } from "react";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import configApi from "../config.api";
import SalaryModel from "../models/SalaryModel";

const WidgetSalaryDetail = ({salaryId}) => {
  const [show, setShow] = useState(false);
  const [salary, setSalary] = useState(SalaryModel)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const get = async () => {
    try {
      const response = await fetch(`${configApi.BASE_URL}/salary/${salaryId}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem("token")
        }
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      let content = await response.json();
      setSalary(content);
      // eventListener({detail: { status: true, content }})
    } catch (error) {
      // eventListener({detail: { status: false, error }})
    }
  }

  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Detail
      </Button>

      <Modal show={show} onHide={handleClose} onShow={get} size="lg" backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Table striped bordered hover>
                <caption style={{captionSide: "top"}}>Others Allowance</caption>
                <thead>
                  <tr>
                    <th>Allowance</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {salary.othersAllowance.map((allowance, index) => (
                    <tr key={index}>
                      <td>{allowance.name}</td>
                      <td>{allowance.total}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
            <Col>
              <Table striped bordered hover>
                <caption style={{captionSide: "top"}}>Others Deduction</caption>
                <thead>
                  <tr>
                    <th>Deduction</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {salary.othersDeduction.map((deduction, index) => (
                    <tr key={index}>
                      <td>{deduction.name}</td>
                      <td>{deduction.total}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default WidgetSalaryDetail