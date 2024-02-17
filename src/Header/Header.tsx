import React, { HTMLAttributes, ReactNode } from "react";
import './Header.css'
import HeaderLogo from "./HeaderComponents/HeaderLogo";
import HeaderNavigation from "./HeaderComponents/HeaderNavigation";
import HeaderNavLink from "./HeaderComponents/HeaderNavLink";
import HeaderAuth from "./HeaderComponents/HeaderAuth";
import HeaderSearch from "./HeaderComponents/HeaderSearch";
import HeaderAvatar from "./HeaderComponents/HeaderAvatar";
import HeaderElementContainer from "./HeaderComponents/HeaderElementContainer";

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode[]
}

const Header:React.FC<HeaderProps> = ({children, ...props}) => {
    return (
        <div className="HeaderContainer" {...props}>
            <header className="Header">
                {/* <HeaderLogo as="img" src="https://ja-africa.org/wp-content/uploads/2020/02/FedEx-Logo-PNG-Transparent.png" /> */}
                {children}
            </header>
        </div>
    );
}
 
export default Header;