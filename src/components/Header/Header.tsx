import { Image, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar className="navbar pt-3 d-flex justify-content-between">
      <h1>Good Morning!</h1>
      <Image
        src={"https://identicon-api.herokuapp.com/profile/40?format=png"}
        alt="profile-icon"
      ></Image>
    </Navbar>
  );
}

export default Header;
