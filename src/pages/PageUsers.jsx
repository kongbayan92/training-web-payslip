import { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import configApi from "../config.api";

const PageUsers = () => {
  const [users, setUsers] = useState([]);
  
  const get = async () => {
    try {
      const response = await fetch(`${configApi.BASE_URL}/users`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'x-access-token': localStorage.getItem("token")
        }
      })

      if (!response.ok) {
        throw new Error(`Error! status ${response.status}`)
      }

      const content = await response.json();
      setUsers(content)
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h3>Users</h3>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover className="mt-4">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PageUsers;