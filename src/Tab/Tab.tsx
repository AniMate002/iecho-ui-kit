import React from "react";
import "./Tab.css"
import TabBtn from "./TabComponents/TabBtn";
import TabBtnList from "./TabComponents/TabBtnList";
import TabContentList from "./TabComponents/TabContentList";
import TabContent from "./TabComponents/TabContent";

export interface TabProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

const Tab:React.FC<TabProps> = ({children, ... props}) => {

    return (
        <div {...props}>
            { children }
        </div>
    );
}
 
export default Tab;