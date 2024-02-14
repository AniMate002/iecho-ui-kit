import React, { InputHTMLAttributes } from "react";
import CustomRadioButton from "./CustomRadioButton";
import './CustomRadioButton.css'


export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean,
    disabled?: boolean,
    label?: string,
    name: string
}


const RadioButton:React.FC<CheckBoxProps> = ({checked, disabled, label, name, ...props}) => {
    return (
        <label className="radioButtonContainer" style={{cursor: disabled ? 'not-allowed' : 'pointer'}}>
            <input className="realRadioButton" type="radio" {...props} checked={checked} disabled={disabled} />
            <CustomRadioButton disabled={disabled || false}/>
            <span className="textBlack textSemiBold">
                {label}
            </span>
        </label>
    );
}
 
export default RadioButton;