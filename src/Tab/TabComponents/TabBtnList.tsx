import React from "react";

export interface TabBtnListProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

const TabBtnList:React.FC<TabBtnListProps> = ({ children, className, ...props}) => {
    return (
        <div className={`TabBtnList ${className ? className : ''}`} {...props}>
            { children }
        </div>
    );
}
 
export default TabBtnList;