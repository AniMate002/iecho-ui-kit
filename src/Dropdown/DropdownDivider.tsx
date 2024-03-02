import React from "react";
import './DropdownDivider.css'

export interface DropdownDividerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    className?: string
}

const DropdownDivider:React.FC<DropdownDividerProps> = ({className, ...props}) => {
    return (
        <div className={`DropdownDivider ${className ? className : ''}`} {...props}></div>
    );
}
 
export default DropdownDivider;