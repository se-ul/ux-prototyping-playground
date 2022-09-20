import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header: React.FC = () => {
  return (
    <nav className="header">
      <ul className="header__list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            프로젝트
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/examples"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            예제
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            설정
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
