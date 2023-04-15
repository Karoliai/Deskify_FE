import { Image } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import UserIcon from "../../assets/user-icon.png";

function Header({ text }: { text: string }) {
  return (
    <Navbar className="navbar pt-3 d-flex justify-content-between">
      <h1 data-testid="header">{text}</h1>
      <Image src={UserIcon} alt="profile-icon"></Image>
    </Navbar>
  );
}

export default Header;
