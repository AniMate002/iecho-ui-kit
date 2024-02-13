import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import "./Button.css"

export type btnTypes = 'primary' | 'warning' | 'default' | 'danger' | 'success' | 'inverse' | 'info' | 'disabled'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    theme: btnTypes,
    disabled?: boolean
}

const Button:React.FC<ButtonProps> = ({children, theme, disabled, ...props}) => {
    return (
        <button className={theme + "Btn"} disabled={disabled} {...props}>
            {children}
        </button>
    );
}
 
export default Button;