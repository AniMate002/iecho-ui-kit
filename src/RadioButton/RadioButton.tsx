import React, { InputHTMLAttributes } from "react";
import CustomRadioButton from "./CustomRadioButton";
import './CustomRadioButton.css'


export interface CheckBoxProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    checked?: boolean,
    disabled?: boolean,
    label?: string,
    name: string,
    className?: string
}


const RadioButton:React.FC<CheckBoxProps> = ({checked, disabled, label, name, className, ...props}) => {
    return (
        <label className={`radioButtonContainer ${className ? className : ''}`} style={{cursor: disabled ? 'not-allowed' : 'pointer'}}>
            <input className="realRadioButton" type="radio" {...props} checked={checked} disabled={disabled} />
            <CustomRadioButton disabled={disabled || false}/>
            <span className="textBlack textSemiBold">
                {label}
            </span>
        </label>
    );
}
 
export default RadioButton;