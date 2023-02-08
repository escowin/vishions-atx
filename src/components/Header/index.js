import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function Header({ vishions, setSelectedProduct }) {
  const navigation = ["gummies", "vapes", "bongs", "smokes"];
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
          <p>
            {vishions.address}
            <FontAwesomeIcon className="icon" icon={faLocationDot} />
          </p>
          <p>
            {vishions.contact.phone}
            <FontAwesomeIcon className="icon" icon={faMobile} />
          </p>
        </article>

        <article className="hours">
          {vishions.hours.map((days, i) => (
            <>
              <p key={`day-${i}`}>{days.day}</p>
              <p key={`time-${i}`}>{days.time}</p>
            </>
          ))}
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
