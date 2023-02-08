import "./index.css";

function Header({vishions}) {
    const navigation = [
        "product1",
        "product2",
        "product3",
        "product4"
    ]

  return (
    <header>
      <aside className="logo">{vishions.name} logo</aside>
      <nav>
        <ul className="navigation">
            {navigation.map((link, i) => (
                <li key={i} className="link">{link}</li>
            ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
