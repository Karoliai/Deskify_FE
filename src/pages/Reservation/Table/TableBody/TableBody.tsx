import { useContext } from "react";
import { CalendarPlusFill } from "react-bootstrap-icons";
import { TableReservationsInt } from "../../../../TempData";
import { TableContext } from "../../Reservation";

function TableBody() {
  const { table } = useContext(TableContext);
  const [tableReservations] = table as [TableReservationsInt];

  const renderTableItems = () => {
    return tableReservations.tables.map((table) => {
      const isFree = table.State === "Free";
      return (
        <tr key={table.id}>
          <td>{table.id}</td>
          <td className={`${isFree ? "free" : "reserved"}`}>{table.State}</td>
          <td>{isFree ? <CalendarPlusFill /> : null}</td>
        </tr>
      );
    });
  };
  return <tbody>{renderTableItems()}</tbody>;
}

export default TableBody;
