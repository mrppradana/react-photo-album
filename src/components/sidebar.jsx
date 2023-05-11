import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignInAlt, faHeart, faCompass } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <FontAwesomeIcon icon={faUser} />
            <span>User</span>
          </a>
        </li>
        <li>
          <a href="/login">
            <FontAwesomeIcon icon={faSignInAlt} />
            <span>Login</span>
          </a>
        </li>
        <li>
          <a href="/likes">
            <FontAwesomeIcon icon={faHeart} />
            <span>Likes</span>
          </a>
        </li>
        <li>
          <a href="/explore">
            <FontAwesomeIcon icon={faCompass} />
            <span>Explore</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
