import logo from "../../logo.svg";
import './Header.css'
import mtgLogo from '../../images/mtg-logo.png'

const Header = () => {
    return (
        <header>
            <div className="navbar">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="">
                    React Functional Components Tutorial
                </h1>
                <img src={mtgLogo} className="MTG-Logo" alt="MTG Logo" />
            </div>
        </header>
    )
}

export default Header;