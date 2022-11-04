import { Image } from "react-bootstrap";
import Logo from "../assets/logo.png";
import "./Sidebar.css";
import { BoxArrowLeft } from "react-bootstrap-icons";

function Sidebar() {
  return (
    <nav className="sidebar d-flex flex-column justify-content-space-between h-100 pt-3">
      <div className="sidebar-header h-25">
        <Image src={Logo} className="w-100 p-2" />
      </div>

      <ul className="list-unstyled components h-75 text-center">
        <li className="display-6">
          <span>1</span>
        </li>
        <li className="display-6">
          <span>2</span>
        </li>
        <li className="display-6">
          <span>3</span>
        </li>
        <li className="display-6">
          <span>4</span>
        </li>
        <li className="display-6">
          <span>5</span>
        </li>
        <li className="display-6">
          <span>6</span>
        </li>
      </ul>

      <div className="d-flex justify-content-center align-items-center mb-5">
        <BoxArrowLeft className="log-out" height={50} width={50} />
      </div>
    </nav>
  );
}

export default Sidebar;
