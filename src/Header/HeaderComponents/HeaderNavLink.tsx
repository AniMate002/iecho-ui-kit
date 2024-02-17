import React, { AnchorHTMLAttributes, ReactNode } from "react";

interface HeaderNavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children?: ReactNode;
}

const HeaderNavLink: React.FC<HeaderNavLinkProps> = ({ children, ...props }) => {
    return (
        <a className="HeaderNavLink" {...props}>{children}</a>
    );
}

export default HeaderNavLink;
