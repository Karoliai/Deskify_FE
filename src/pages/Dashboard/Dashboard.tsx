import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import FloorCard from "./FloorCard/FloorCard";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="vw-100 vh-100 light-bg d-flex">
      <Sidebar />
      <div className="w-100 mx-5">
        <Header />
        <div className="m-5">
          <h2>Floors</h2>
          <Container className="m-0">
            <Row className="mb-4">
              <Col className="p-0">
                <FloorCard floor={1} percentage={50} />
              </Col>
              <Col className="p-0">
                <FloorCard floor={2} percentage={50} />
              </Col>
              <Col className="p-0">
                <FloorCard floor={3} percentage={50} />
              </Col>
            </Row>
            <Row>
              <Col className="p-0">
                <FloorCard floor={4} percentage={50} />
              </Col>
              <Col className="p-0">
                <FloorCard floor={5} percentage={50} />
              </Col>
              <Col className="p-0">
                <FloorCard floor={6} percentage={50} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
