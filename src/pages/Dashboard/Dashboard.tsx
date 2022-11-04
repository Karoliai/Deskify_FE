import { useNavigate } from "react-router";
import Sidebar from "../../components/Sidebar";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="vw-100 vh-100 light-bg flex-column">
      <Sidebar />
    </div>
  );
}

export default Dashboard;
