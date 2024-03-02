import React from "react";
import "./CustomCheckBox.css"

export interface CustomCheckBoxProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    disabled: boolean,
    className?: string
}

const CustomCheckBox:React.FC<CustomCheckBoxProps> = ({disabled, className, ...props}) => {
    return (
        <div {...props} className={`customCheckBox textWhite ${className ? className : ''}`}>
            {disabled ?
                <span dangerouslySetInnerHTML={{ __html: '&#x2715;' }} />
                :
                <span dangerouslySetInnerHTML={{ __html: '&#10003;' }} />
            }
        </div>
    );
}
 
export default CustomCheckBox;