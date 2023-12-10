import { Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./FloorCard.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { ChevronRight } from "react-bootstrap-icons";

function FloorCard({
  floor,
  percentage,
}: {
  floor: number;
  percentage: number;
}) {
  const navigate = useNavigate();

  const circleStatusText = (percentage: number) => {
    if (percentage <= 1) {
      return "Empty";
    } else if (percentage <= 25) {
      return "Low";
    } else if (percentage <= 50) {
      return "Moderate";
    } else if (percentage <= 99) {
      return "High";
    } else {
      return "Full";
    }
  };

  const redirectToDashboard = (floor: number) =>
    navigate(`/reservation/${floor}`);

  return (
    <Card className="floor-card" onClick={() => redirectToDashboard(floor)}>
      <Card.Header className="d-flex justify-content-between">
        <Image
          src={"https://identicon-api.herokuapp.com/profile/40?format=png"}
          alt="profile-icon"
        />
        <span className="display-6">{floor}</span>
      </Card.Header>
      <Card.Body className="d-flex justify-content-center align-items-start">
        <CircularProgressbar
          value={percentage}
          text={circleStatusText(percentage)}
          circleRatio={0.5}
          styles={buildStyles({
            rotation: 0.75,
            pathColor: "#fc818d",
            textColor: "var(--text)",
            textSize: "13px",
          })}
          strokeWidth={5}
          background={false}
          className="circular-progress"
        />
      </Card.Body>
      <Card.Footer className="d-flex justify-content-end">
        <ChevronRight height={40} width={40} />
      </Card.Footer>
    </Card>
  );
}

export default FloorCard;
