import React from "react";
import './Header.css'
import HeaderLogo from "./HeaderComponents/HeaderLogo";
import HeaderNavigation from "./HeaderComponents/HeaderNavigation";
import HeaderNavLink from "./HeaderComponents/HeaderNavLink";
import HeaderAuth from "./HeaderComponents/HeaderAuth";

const Header:React.FC = () => {
    return (
        <div className="HeaderContainer">
            <header className="Header">
                {/* <HeaderLogo as="img" src="https://ja-africa.org/wp-content/uploads/2020/02/FedEx-Logo-PNG-Transparent.png" /> */}
                <HeaderLogo as="a" href="/">Logo</HeaderLogo>
                <HeaderNavigation>
                    <HeaderNavLink href="/">Home</HeaderNavLink>
                    <HeaderNavLink href="/">About</HeaderNavLink>
                    <HeaderNavLink href="/">Services</HeaderNavLink>
                    <HeaderNavLink href="/">Projects</HeaderNavLink>
                </HeaderNavigation>
                <HeaderAuth as="a" href="a">Login</HeaderAuth>
            </header>
        </div>
    );
}
 
export default Header;