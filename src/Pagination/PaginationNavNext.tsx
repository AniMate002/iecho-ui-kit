import React from "react";
import NextSvg from './PaginationSvg/next.svg'

export interface PaginationNavNextProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    className?: string
}

const PaginationNavNext:React.FC<PaginationNavNextProps> = ({className, ...props}) => {
    return (
        <button className={`PaginationNav PaginationNavBtn ${className ? className : ''}`} {...props}>
            &#62;
        </button>
    );
}
 
export default PaginationNavNext;