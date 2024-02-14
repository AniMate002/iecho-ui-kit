import React from "react";

export interface CustomRadioButtonProps{
    disabled: boolean
}

const CustomRadioButton:React.FC<CustomRadioButtonProps> = ({disabled}) => {
    return (
        <div className="customRadioButton textWhite">

        </div>
    );
}
 
export default CustomRadioButton;