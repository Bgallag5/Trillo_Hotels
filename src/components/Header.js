import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBookmark,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
//non filled icons
// import {faComments} from '@fortawesome/free-regular-svg-icons'

export default function Header() {
  return (
    <header className="header">
      <img
        src={require("../images/logo.png")}
        alt="trillo logo"
        className="header__logo"
      />
      <div className="search">
        <input type="text" className="search__input" placeholder="Search" />
        <button className="search__button">
          <FontAwesomeIcon className="search__icon" icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="nav">
        <div className="navbox--background">
          <FontAwesomeIcon
            icon={faBookmark}
            className="nav__icon nav__icon--bookmark"
          />
        </div>
        <div className="navbox--background">
          <FontAwesomeIcon
            icon={faComments}
            className="nav__icon nav__icon--message"
          />{" "}
        </div>
          <div className="nav__user">
            <img
              src={require("../images/user-1.jpg")}
              alt=""
              className="nav__user--img"
            />
            <span className="nav__user--name">Ben G</span>
          </div>
      </div>
    </header>
  );
}
