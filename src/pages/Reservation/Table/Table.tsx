import { useContext } from "react";
import { Table } from "react-bootstrap";
import { TableReservationsInt } from "../../../TempData";
import { TableContext } from "../Reservation";
import Filters from "./Filters/Filters";
import "./Table.css";
import TableBody from "./TableBody/TableBody";
import TableHead from "./TableHead/TableHead";

function ReservationTable({}) {
  const { table } = useContext(TableContext);
  const [tableReservations] = table as [TableReservationsInt];

  return (
    <>
      <Filters />
      <Table borderless hover responsive className="mb-2">
        <TableHead HeadElements={["#", "State", "Action"]} />
        <TableBody />
      </Table>
      <div className="d-flex justify-content-end">
        <span>Total tables {tableReservations.tables.length}</span>
      </div>
    </>
  );
}

export default ReservationTable;
