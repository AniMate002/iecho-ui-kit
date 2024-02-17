import React, { HTMLAttributes, ReactNode } from "react";

export interface HeaderElementContainerProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode
}

const HeaderElementContainer:React.FC<HeaderElementContainerProps> = ({ children, ...props}) => {
    return (
        <div className="HeaderElementContainer" {...props}>
            {children}
        </div>
    );
}
 
export default HeaderElementContainer;