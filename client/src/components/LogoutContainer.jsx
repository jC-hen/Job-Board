import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { Wrapper } from "../assets/wrappers/LogoutContainer";
import { useState } from "react";
import { useDashboardContext } from "../pages/DashboardLayout";

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [user, logoutUser] = useDashboardContext();
  return (
    <Wrapper>
      <buttom
        type="buttom"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      ></buttom>
    </Wrapper>
  );
};
export default LogoutContainer;
