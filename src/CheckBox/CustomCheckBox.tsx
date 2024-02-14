import React from "react";
import "./CustomCheckBox.css"

export interface CustomCheckBoxProps{
    disabled: boolean
}

const CustomCheckBox:React.FC<CustomCheckBoxProps> = ({disabled}) => {
    return (
        <div className="customCheckBox textWhite">
            {disabled ?
                <span dangerouslySetInnerHTML={{ __html: '&#x2715;' }} />
                :
                <span dangerouslySetInnerHTML={{ __html: '&#10003;' }} />
            }
        </div>
    );
}
 
export default CustomCheckBox;