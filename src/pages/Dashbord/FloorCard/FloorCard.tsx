import { Card, Image } from "react-bootstrap";
import "./FloorCard.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { ChevronRight } from "react-bootstrap-icons";
import FloorIcon from "../../../assets/floor-icon.png";

function FloorCard({
  floor,
  percentage,
}: {
  floor: number;
  percentage: number;
}) {
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

  return (
    <Card className="floor-card">
      <Card.Header className="d-flex justify-content-between">
        <Image src={FloorIcon} alt="profile-icon" />
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
