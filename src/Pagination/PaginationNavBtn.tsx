import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export interface PaginationNavBtnProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    isActive?: boolean
}

const PaginationNavBtn:React.FC<PaginationNavBtnProps> = ({children, isActive, ...props}) => {
    return (
        <button className={`PaginationNavBtn ${isActive ? 'PaginationNavBtnActive' : ''}`} {...props}>
            {children}
        </button>
    );
}
 
export default PaginationNavBtn;