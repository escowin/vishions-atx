import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function Header({ vishions, setSelectedProduct }) {
  const navigation = ["smokes", "vapes", "bongs", "gummies"];
  const [selected, setSelected] = useState(null);

  function handleClick(category) {
    setSelectedProduct(category);
    setSelected(category);
  }

  return (
    <header>
      <aside className="logo">{vishions.name} logo</aside>

      <section className="info">
        <article className="contact">
          <a
            href={`https://maps.google.com/?q=${vishions.address}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              {vishions.address}
              <FontAwesomeIcon className="icon" icon={faLocationDot} />
            </p>
          </a>
          <a className="link" href={`tel:${vishions.contact.phone}`}>
            <p>
              {vishions.contact.phone}
              <FontAwesomeIcon className="icon" icon={faMobile} />
            </p>
          </a>
        </article>

        <article className="hours">
          {vishions.hours.map((days, i) => (
            <>
              <p key={`day-${i}`} className="day">
                {days.day}
              </p>
              <p key={`time-${i}`} className="time">
                {days.time}
              </p>
            </>
          ))}
          <p className="hours-icon">
            <FontAwesomeIcon className="icon" icon={faClock} />
          </p>
        </article>
      </section>

      <nav>
        <ul className="menu">
          {navigation.map((category, i) => (
            <li
              key={`nav-${i}`}
              onClick={() => handleClick(category)}
              className={`link ${category === selected ? "selected" : ""}`}
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
