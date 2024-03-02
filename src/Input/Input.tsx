import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import "./Input.css"

export type inputTypes = 'inactive' | 'error' | 'success'

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    theme: inputTypes,
    label?: string,
    className?: string
}


const Input:React.FC<InputProps> = ({theme, label, disabled, className, ...props}) => {
    return (
        <label style={{padding:'20px'}} className={className ? className : ''}>
            <span style={{marginRight: '5px'}}>{label}</span>
            <input type="text" {...props} className={`${theme}Input`} disabled={disabled}/>
        </label>
    );
}
 
export default Input;