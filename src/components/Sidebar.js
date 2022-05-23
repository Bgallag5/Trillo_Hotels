import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPlane,
  faKey,
  faMap,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar__item">
        <FontAwesomeIcon className="sidebar__item--icon" icon={faHouse} />
        <p className="sidebar__item--name">Hotels</p>
      </div>
      <div className="sidebar__item">
        <FontAwesomeIcon className="sidebar__item--icon" icon={faPlane} />
        <p className="sidebar__item--name">Flights</p>
      </div>
      <div className="sidebar__item">
        <FontAwesomeIcon className="sidebar__item--icon" icon={faKey} />
        <p className="sidebar__item--name">Car Rentals</p>
      </div>
      <div className="sidebar__item">
        <FontAwesomeIcon className="sidebar__item--icon" icon={faMap} />
        <p className="sidebar__item--name">Tours</p>
      </div>
    </nav>
  );
}
