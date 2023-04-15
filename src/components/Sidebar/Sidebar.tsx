import { Image } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import "./Sidebar.css";
import { BoxArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router";

function Sidebar() {
  const navigate = useNavigate();

  function LogOut() {
    navigate("/login");
  }

  return (
    <nav className="sidebar d-flex flex-column justify-content-between align-items-stretch pt-3">
      <div className="sidebar-header h-25">
        <Image src={Logo} alt="company-logo" className="w-100 p-2" />
      </div>

      <button
        className="d-flex justify-content-center align-items-center mb-5"
        onClick={LogOut}
      >
        <BoxArrowLeft className="log-out" height={50} width={50} />
      </button>
    </nav>
  );
}

export default Sidebar;
