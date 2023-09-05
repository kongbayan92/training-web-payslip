import { Col, Container, Row, Table } from "react-bootstrap";

const PageUsers = () => {
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
}

export default PageUsers;