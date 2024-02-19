import React from "react";

export interface TabContentListProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

const TabContentList:React.FC<TabContentListProps> = ({ children, className, ...props}) => {
    return (
        <div className={`TabContentList ${className ? className : ''}`} {...props}>
            { children }
        </div>
    );
}
 
export default TabContentList;