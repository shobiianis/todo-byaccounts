import { userAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { user } = userAuth();
  
  return user ? children : navigate("/");
};

export default ProtectedRoutes;
