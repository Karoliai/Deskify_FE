import { Col, Container, Row, Table } from "react-bootstrap";
import { CalendarPlusFill, ChevronDown } from "react-bootstrap-icons";
import GreenButton from "../../../components/Buttons/GreenButton";
import "./Table.css";

function ReservationTable() {
  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex justify-content-end mt-3">
            <GreenButton
              text={`State `}
              icon={<ChevronDown />}
              className="me-2"
            ></GreenButton>
            <GreenButton text={`Today `} icon={<ChevronDown />}></GreenButton>
          </Col>
        </Row>
      </Container>
      <Table borderless hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>State</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className="free">Free</td>
            <td>
              <CalendarPlusFill />
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="total-txt">
        <span>Total tables 2</span>
      </div>
    </>
  );
}

export default ReservationTable;
