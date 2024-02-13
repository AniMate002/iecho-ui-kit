import React from 'react'
import { themeType } from '../MyButton/MyButton';
import './MyInput.css'

export type displayType = 'ghost' | 'underline' | 'full'

export interface MyInputProps{
    placeholder?: string,
    inputTheme?: displayType,
    color: string,
    label?: string,
    inputType: 'email' | 'password' | 'text',
    // children: never
}

const MyInput:React.FC<MyInputProps> = ({placeholder, inputTheme, inputType, label, color, ...props}) => {
    return (
        <label className={`${color}`}>
            {label}
            <input type={inputType} {...props} placeholder={placeholder} className={`${inputTheme}`}/>
        </label>
    );
}
 
export default MyInput;