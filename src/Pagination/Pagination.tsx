import React, { DetailedHTMLProps, HTMLAttributes, ReactElement, ReactNode } from "react";
import PaginationNavBtn from "./PaginationNavBtn";
import './Pagination.css'
import PaginationNavNext from "./PaginationNavNext";

export interface PaginationProps extends HTMLAttributes<HTMLDivElement>{
    children?: ReactNode[] 
}

const Pagination:React.FC<PaginationProps> = ({ children, ... props}) => {
    return (
        <nav className="Navigation" {...props}>
            {children}
            {/* <PaginationNavNext /> */}
        </nav>
    );
}
 
export default Pagination;