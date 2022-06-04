import Styles from "./Profile.module.css";
import { Link, Outlet } from "react-router-dom";
export default function Profile() {
  return (
    <div className={Styles.profileNav}>
      <Link to="/profile/">Account</Link>
      <Link to="/profile/orders">Orders</Link>
      <Outlet />
    </div>
  );
}
