import { Image } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import "./Sidebar.css";
import { BoxArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router";

function Sidebar() {
  const navigate = useNavigate();

  function LogOut() {
    localStorage.removeItem("isAdmin");
    navigate("/login");
  }
  const redirect = (floor: number) => navigate(`/reservation/${floor}`);

  return (
    <nav className="sidebar d-flex flex-column justify-content-space-between pt-3">
      <div className="sidebar-header h-25">
        <Image src={Logo} className="w-100 p-2" />
      </div>

      <ul className="list-unstyled components h-75 text-center">
        {[1, 2, 3, 4, 5, 6].map((floor, index) => (
          <li key={index} className="display-6" onClick={() => redirect(floor)}>
            <span>{floor}</span>
          </li>
        ))}
      </ul>

      <div
        className="d-flex justify-content-center align-items-center mb-5"
        onClick={LogOut}
      >
        <BoxArrowLeft className="log-out" height={50} width={50} />
      </div>
    </nav>
  );
}

export default Sidebar;
