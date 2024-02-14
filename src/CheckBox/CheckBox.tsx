import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import CustomCheckBox from "./CustomCheckBox";

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean,
    disabled?: boolean,
    label?: string,
}

const CheckBox:React.FC<CheckBoxProps> = ({checked, disabled, label, ...props}) => {

    return (
        <label style={{cursor: disabled ? 'not-allowed' : 'pointer'}}>
            <input className="realCheckbox" type="checkbox" {...props} checked={checked} disabled={disabled} />
            <CustomCheckBox disabled={disabled || false}/>
            <span className="textBlack textSemiBold">
                {label}
            </span>
        </label>
    );
}
 
export default CheckBox;