import React,  {FC, ReactNode} from 'react'
import './MyButton.css'

export type themeType = 'success' | 'pending' | 'rejected'

export interface MyButtonProps{
    color: string,
    big?: boolean,
    children: ReactNode,
    btnTheme: themeType
}

const MyButton:FC<MyButtonProps> = ({children, color, btnTheme, big,...props}) => {
    return (
        <button {...props} className={`${big ? 'bigBtn' : ''} ${btnTheme}`} style={{color}}>
            {children}
        </button>
    );
}
 
export default MyButton;