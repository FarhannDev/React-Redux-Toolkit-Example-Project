import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllUsers } from "../../utils/usersSlice";

export default function UsersList() {
  const users = useSelector(selectAllUsers);

  const renderedUsers = users?.map((user, index) => (
    <tr key={user.id}>
      <td className="text-white">{index + 1}</td>
      <td className="text-white">
        <Link
          to={`/posts/author/${user.id}`}
          className="text-white text-decoration-none"
        >
          {user.name}
        </Link>
      </td>
      <td className="text-white">{user.email}</td>
      <td className="text-white">
        <a
          href={`https://${user.website}`}
          target="_blank"
          className="btn p-0 btn-link text-underline-none"
          rel="noreferrer"
        >
          {user.website}
        </a>
      </td>
    </tr>
  ));

  return (
    <>
      <Container className="d-block w-100 pt-5 py-5 mt-3  ">
        <Row className="flex-column g-3">
          <Col>
            <div>
              <h1 className="text-capitalize fw-bolder pt-5 mb-3">
                List All Users
              </h1>
            </div>
            <div>
              <Card className="postCardDetail animate__animated ">
                <div>
                  <Table striped responsive>
                    <thead>
                      <tr>
                        <th className="text-white col-*">#</th>
                        <th className="text-white col-*">Name</th>
                        <th className="text-white col-*">Email</th>
                        <th className="text-white col-*">Website</th>
                      </tr>
                    </thead>
                    <tbody>{renderedUsers}</tbody>
                  </Table>
                </div>
                <div>
                  <div className="d-flex justify-content-center align-item-center mb-3">
                    Showing All User ({users.length})
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
