import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

function Header() {
  return (
    <header>
      <h1>
        RemindWrite <FontAwesomeIcon icon={faBookmark} />
      </h1>
    </header>
  );
}

export default Header;