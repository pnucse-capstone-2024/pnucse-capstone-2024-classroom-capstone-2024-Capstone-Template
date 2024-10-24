import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const location = useLocation();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/overview":
        setSelected("overview");
        break;
      case "/process":
        setSelected("process");
        break;
      case "/evaluation":
        setSelected("evaluation");
        break;
      case "/practice":
        setSelected("practice");
        break;
      default:
        setSelected("");
    }
  }, [location.pathname]);

  return (
    <header className="header-container">
      <div className="logo">🚪🔑️</div>
      <nav className="nav">
        <ul>
          <li>
            <Link
              to="/overview"
              className={`nav-link ${selected === "overview" ? "selected" : ""}`}
            >
              개요
            </Link>
          </li>
          <li>
            <Link
              to="/process"
              className={`nav-link ${selected === "process" ? "selected" : ""}`}
            >
              과정
            </Link>
          </li>
          <li>
            <Link
              to="/evaluation"
              className={`nav-link ${selected === "evaluation" ? "selected" : ""}`}
            >
              평가
            </Link>
          </li>
          <li>
            <Link
              to="/practice"
              className={`nav-link ${selected === "practice" ? "selected" : ""}`}
            >
              실습
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
