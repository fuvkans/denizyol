import { NavLink } from "react-router-dom";
import "../styles/SubNavbar.css";

export default function SubNavbar() {
  return (
    <nav className="navbar navbar-expand bg-white border-top border-bottom shadow-sm">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item mx-3">
          <NavLink to="/fashion" className="nav-link fw-bold">
            Fashion & Clothing
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink to="/electronics" className="nav-link fw-bold">
            Electronics
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink to="/home-living" className="nav-link fw-bold">
            Home & Living
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink to="/beauty" className="nav-link fw-bold">
            Beauty & Personal Care
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink to="/sports" className="nav-link fw-bold">
            Sports & Outdoor
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
