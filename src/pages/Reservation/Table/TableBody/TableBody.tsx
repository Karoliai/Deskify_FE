import { useContext } from "react";
import { CalendarPlusFill, Pencil } from "react-bootstrap-icons";
import { AuthContext } from "../../../../main";
import { TableReservationsInt } from "../../../../TempData";
import { TableContext } from "../../Reservation";

function TableBody() {
  const { table } = useContext(TableContext);
  const [tableReservations] = table as [TableReservationsInt];
  const authContext = useContext(AuthContext);

  const renderTableItems = () => {
    return tableReservations.tables.map((table) => {
      const isFree = table.State === "Free";
      return (
        <tr key={table.id}>
          <td>{table.id}</td>
          <td className={`${isFree ? "free" : "reserved"}`}>{table.State}</td>
          <td>{isFree ? <CalendarPlusFill /> : null}</td>
          <td>
            {authContext().isAdmin === "false" ? null : (
              <Pencil onClick={() => null} />
            )}
          </td>
        </tr>
      );
    });
  };
  return <tbody>{renderTableItems()}</tbody>;
}

export default TableBody;
