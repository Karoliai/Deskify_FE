import React, {
  Context,
  createContext,
  Dispatch,
  useEffect,
  useState,
} from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import ReservationPhoto from "./Photo/Photo";
import ReservationTable from "./Table/Table";
import { TableReservations, TableReservationsInt } from "../../TempData";
import "./Reservation.css";

const initialTableReservations = {
  photo: "",
  tables: [],
};

export const TableContext = createContext<{
  table: (
    | TableReservationsInt
    | React.Dispatch<React.SetStateAction<TableReservationsInt>>
  )[];
}>({
  table: [initialTableReservations, () => {}],
});

function Reservation() {
  const [tableReservations, setTableReservations] =
    useState<TableReservationsInt>(initialTableReservations);

  useEffect(() => {
    setTableReservations(TableReservations);
  }, []);

  const tableStore = { table: [tableReservations, setTableReservations] };

  return (
    <div className="vw-100 vh-100 light-bg d-flex">
      <Sidebar />
      <div className="w-100 mx-5">
        <Header text="Reservations" />
        <div className="m-5">
          <h2>First Floor</h2>
          <Container>
            <TableContext.Provider value={tableStore}>
              <Row>
                <Col className="table-container white-bg me-4">
                  <ReservationTable />
                </Col>
                <Col className="photo-container white-bg ms-4">
                  <ReservationPhoto />
                </Col>
              </Row>
            </TableContext.Provider>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
