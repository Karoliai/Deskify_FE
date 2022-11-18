import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import chunk from "lodash/chunk";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import FloorCard from "./FloorCard/FloorCard";
import { FloorData } from "../../TemData";

function Dashboard() {
  const renderFloorCards = () => {
    return chunk(FloorData, 3).map((chunk, index) => {
      return (
        <Row key={index} className="mb-4">
          {chunk.map((floor) => {
            return (
              <Col key={floor.id} className="p-0">
                <FloorCard floor={floor.id} percentage={floor.percentage} />
              </Col>
            );
          })}
        </Row>
      );
    });
  };

  return (
    <div className="vw-100 vh-100 light-bg d-flex">
      <Sidebar />
      <div className="w-100 mx-5">
        <Header text="Good morning!" />
        <div className="m-5">
          <h2>Floors</h2>
          <Container className="m-0">
            <Row className="mb-4">{renderFloorCards()}</Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
