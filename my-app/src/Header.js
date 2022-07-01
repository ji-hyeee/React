import './index.css'
import logo from './logo.svg';

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} alt="img" className="nav-logo" />
                <h1 className="nav-text">ReactFacts</h1>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
