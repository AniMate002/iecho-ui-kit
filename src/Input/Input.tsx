import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import "./Input.css"

export type inputTypes = 'inactive' | 'error' | 'success' | 'disabled'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    theme: inputTypes,
    label?: string,
}


const Input:React.FC<InputProps> = ({theme, label, disabled, ...props}) => {
    return (
        <label style={{padding:'20px'}}>
            {label}
            <input type="text" {...props} className={theme + "Input"} disabled={disabled}/>
        </label>
    );
}
 
export default Input;