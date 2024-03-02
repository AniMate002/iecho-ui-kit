import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import "./Button.css"

export type btnTypes = 'primary' | 'warning' | 'default' | 'danger' | 'success' | 'inverse' | 'info'

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode,
    theme: btnTypes,
    disabled?: boolean,
    className?: string
}

const Button:React.FC<ButtonProps> = ({children, theme, disabled, className, ...props}) => {
    return (
        <button className={`${theme}Btn ${className ? className : ''}`} disabled={disabled} {...props}>
            {children}
        </button>
    );
}
 
export default Button;