import { FunctionComponent, ReactNode } from "react";
import { Button, Image } from "react-bootstrap";
import { Icon, IconProps } from "react-bootstrap-icons";
import "./GreenButton.css";

function GreenButton({
  text,
  className,
  icon,
}: {
  text: string;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <Button className={`green-button ${className}`}>
      {text}
      {icon}
    </Button>
  );
}

export default GreenButton;
