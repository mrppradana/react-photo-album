import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignInAlt,
  faHeart,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`sidebar ${isExpanded ? "expanded" : "collapsed"} ${
        isDarkMode ? "dark-mode" : ""
      }`}
    >
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <span>{isExpanded ? "<<" : ">>"}</span>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faUser} />
              <span>User</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faSignInAlt} />
              <span>Login</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faHeart} />
              <span>Likes</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faCompass} />
              <span>Explore</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar-toggle dark-mode-toggle" onClick={toggleDarkMode}>
        <span>{isDarkMode ? "Light" : "Dark"}</span>
      </div>
    </div>
  );
}

export default Sidebar;
