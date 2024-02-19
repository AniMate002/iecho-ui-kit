import React from "react";

export interface TabContentProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    className?: string,
    defaultActive?: boolean
}

const TabContent:React.FC<TabContentProps> = ({ children, className, defaultActive, ...props}) => {
    return (
        <p {...props} className={`TabContent ${defaultActive ? 'TabContentActive' : ''} ${className ? className : ''}`}>{children}</p>
    );
}
 
export default TabContent;