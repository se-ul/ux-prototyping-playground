import { Link } from "react-router-dom";
import "./Header.css";

export const Header: React.FC = () => {
  return (
    <nav className="header">
      <ul className="header__list">
        <li>
          <Link to="/">내 코드</Link>
        </li>
        <li>
          <Link to="/examples">예제</Link>
        </li>
        <li>
          <Link to="/settings">설정</Link>
        </li>
      </ul>
    </nav>
  );
};
