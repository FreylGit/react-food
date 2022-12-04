import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="amber darken-3">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                    Рецепты
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/about">О нас</Link>
                    </li>
                    <li>
                        <Link to="/contact">Контакты</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export { Header };
