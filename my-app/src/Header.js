import './index.css'
// image 도 import 로 연결해주기
import logo from './logo.svg';

// 이렇게 적어도 된다
export default function Header() {
    return (
        <header>
            <nav className="nav">
                {/* <img src=""./image/logo.svg" className="nav-logo" /> */}
                <img src={logo} className="nav-logo" />
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

// 이렇게 적어도 되지만
// export default Header