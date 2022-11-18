import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import ReservationPhoto from "./Photo/Photo";
import ReservationTable from "./Table/Table";
import "./Reservation.css";

function Reservation() {
  return (
    <div className="vw-100 vh-100 light-bg d-flex">
      <Sidebar />
      <div className="w-100 mx-5">
        <Header text="Reservations" />
        <div className="m-5">
          <h2>First Floor</h2>
          <Container>
            <Row>
              <Col className="table-container white-bg me-4">
                <ReservationTable />
              </Col>
              <Col className="photo-container white-bg ms-4">
                <ReservationPhoto />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
