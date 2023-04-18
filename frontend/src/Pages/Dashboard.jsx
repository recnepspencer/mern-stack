import authReducer from '../features/auth/authSlice'
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";


function Dashboard() {
  const { user } = useSelector((state) => state.auth);

  return (
    user ? <div>Dashboard</div> : null
  )
}

export default Dashboard
