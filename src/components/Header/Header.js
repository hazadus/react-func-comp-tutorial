import logo from "../../logo.svg";
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="navbar">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="">
                    React Functional Components Tutorial
                </h1>
            </div>
        </header>
    )
}

export default Header;