import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export interface PaginationNavBtnProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    isActive?: boolean,
    className?: string
}

const PaginationNavBtn:React.FC<PaginationNavBtnProps> = ({children, isActive, className, ...props}) => {
    return (
        <button className={`PaginationNavBtn ${isActive ? 'PaginationNavBtnActive' : ''} ${className ? className : ''}`} {...props}>
            {children}
        </button>
    );
}
 
export default PaginationNavBtn;