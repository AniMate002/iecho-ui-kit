import React, { DetailedHTMLProps, HTMLAttributes, ReactComponentElement, ReactElement } from "react";
import HeaderNavLink from "./HeaderNavLink";

export interface HeaderNavigationProps extends HTMLAttributes<HTMLElement> {
    children?: ReactElement<typeof HeaderNavLink>[] | ReactElement<typeof HeaderNavLink>
}

const HeaderNavigation:React.FC<HeaderNavigationProps> = ({children, ...props}) => {
    return (
        <nav className="HeaderNavigation" {...props}>
            {children}
        </nav>
    );
}
 
export default HeaderNavigation;