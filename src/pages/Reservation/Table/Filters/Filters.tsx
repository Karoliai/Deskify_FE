import { useCallback, useContext, useMemo, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { ChevronDown } from "react-bootstrap-icons";
import GreenButton from "../../../../components/Buttons/GreenButton";
import { TableReservationsInt } from "../../../../TempData";
import { TableContext } from "../../Reservation";

function Filters() {
  const { table } = useContext(TableContext);
  const [tableReservations, setTableReservations] = table as [
    TableReservationsInt,
    React.Dispatch<React.SetStateAction<TableReservationsInt>>
  ];
  const tableState = {
    ANY: "Any",
    FREE: "Free",
    RESERVED: "Reserved",
  };

  const [selectedState, setSelectedState] = useState(tableState.ANY);

  const filterTableState = useCallback(
    (state: string) => {
      if (state === tableState.ANY) {
        setSelectedState(tableState.ANY);
        return;
      }
      const filteredTables = tableReservations.tables.filter((table) => {
        return table.State === state;
      });
      setTableReservations({ ...tableReservations, tables: filteredTables });
    },
    [tableReservations]
  );

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-end mt-3">
          <Dropdown>
            <Dropdown.Toggle variant="success" className="green-button me-2">
              {selectedState}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href="#"
                onClick={() => {
                  filterTableState(tableState.FREE);
                  setSelectedState(tableState.FREE);
                }}
              >
                Free
              </Dropdown.Item>
              <Dropdown.Item
                href="#"
                onClick={() => {
                  filterTableState(tableState.RESERVED),
                    setSelectedState(tableState.RESERVED);
                }}
              >
                Reserve
              </Dropdown.Item>
              <Dropdown.Item
                href="#"
                onClick={() => {
                  filterTableState(tableState.ANY),
                    setSelectedState(tableState.ANY);
                }}
              >
                Any
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <GreenButton text={`Today `} icon={<ChevronDown />}></GreenButton>
        </Col>
      </Row>
    </Container>
  );
}

export default Filters;
