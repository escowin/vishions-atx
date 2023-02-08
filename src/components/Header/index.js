import './index.css';

function Header() {
    const vishions = {
            name: "Vishions ATX",
            address: "3207 Red River Street, Austin TX",
            hours: ["Mon-Sat : 10a-10p", "Sun: 10a-9p"],
            contact: {
                phone: "512-645-0575",
                email: "vishions.atx@gmail.com",
                ig: "vishions-atx"
            }
        }

    return (
        <header>
            <h1>{vishions.name}</h1>
            <nav>
                <ul>
                    <li></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header