import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function Header({ vishions }) {
  const navigation = ["link1", "link2", "link3", "link4"];

  return (
    <header>
      <aside className="logo">{vishions.name} logo</aside>

      <section className="contact">
        <p>
          {vishions.address}
          <FontAwesomeIcon className="icon" icon={faLocationDot} />
          </p>
        <p>
          {vishions.contact.phone}
          <FontAwesomeIcon className="icon" icon={faMobile} />
        </p>
      </section>

      <nav>
        <ul className="menu">
          {navigation.map((link, i) => (
            <li key={i} className="link">
              {link}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
