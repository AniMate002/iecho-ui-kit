import React, { DetailedHTMLProps, HTMLAttributes, ReactElement, ReactNode } from "react";
import PaginationNavBtn from "./PaginationNavBtn";
import './Pagination.css'

export interface PaginationProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>{
    children?: ReactNode[],
    clasName?: string
}

const Pagination:React.FC<PaginationProps> = ({ children, clasName, ... props}) => {
    return (
        <nav className={`Navigation ${clasName ? clasName : ''}`} {...props}>
            {children}
        </nav>
    );
}
 
export default Pagination;