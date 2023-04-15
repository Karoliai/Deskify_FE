import { Col, Container, Row } from "react-bootstrap";
import chunk from "lodash/chunk";
import FloorCard from "./FloorCard/FloorCard";
import { FloorData } from "../../TempData";

interface FloorData {
  id: number;
  percentage: number;
}

function Dashboard() {
  const renderFloorCards = (FloorData: FloorData[]) => {
    return chunk(FloorData, 3).map((chunk, index) => {
      return (
        <Row key={index} className="mb-4">
          {chunk.map((floor) => {
            return (
              <Col key={floor.id} className="p-0" data-testid={"floor-card"}>
                <FloorCard floor={floor.id} percentage={floor.percentage} />
              </Col>
            );
          })}
        </Row>
      );
    });
  };

  return (
    <div className="overflow-auto vh-100 light-bg d-flex">
      <div className="w-100 mx-5">
        <div className="container mt-5">
          <h2>Floors</h2>
          <Container className="m-0">
            <Row className="mb-4">{renderFloorCards(FloorData)}</Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
