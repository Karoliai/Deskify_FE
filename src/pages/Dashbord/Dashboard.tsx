import { Col, Container, Row } from "react-bootstrap";
import chunk from "lodash/chunk";
import FloorCard from "./FloorCard/FloorCard";
import { FloorData } from "../../TempData";
import Header from "../../components/Header/Header";

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

  const getGreetingsByTimeOfDay = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return "Good morning!";
    } else if (currentHour < 18) {
      return "Good afternoon!";
    } else {
      return "Good evening!";
    }
  };

  return (
    <div className="overflow-auto vh-100 light-bg d-flex">
      <div className="w-100 mx-5">
        <Header text={getGreetingsByTimeOfDay()} />
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
