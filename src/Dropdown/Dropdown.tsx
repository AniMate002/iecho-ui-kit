import React, { ReactElement } from "react";
import './Dropdown.css'
import DropdownOption from "./DropdownOption";
import DropdownDivider from "./DropdownDivider";
import Input from "../Input/Input";

export interface DropdownProps{
    children?: ReactElement<typeof DropdownOption>[] | ReactElement<typeof DropdownDivider>[] | ReactElement<typeof DropdownOption> | ReactElement<typeof DropdownDivider>,
    title?: string,
}

const Dropdown:React.FC<DropdownProps> = ({children, title, ...props}) => {
    function openMenuHandler(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
        let select = e.target as HTMLDivElement
        console.log(select.classList)
        if(select){
            let menu
            if(select instanceof HTMLSpanElement){
                if(select.parentElement instanceof HTMLDivElement)
                    select = select.parentElement
            }
            menu = select.nextElementSibling
                
            console.log(menu)
            if(menu instanceof HTMLUListElement){
                menu.classList.toggle('DropdownMenu-open')
            }
        }
    }

    function optionClickHandler(e: React.MouseEvent<HTMLUListElement, MouseEvent>){
        const option = e.target as HTMLElement
        if(option instanceof HTMLElement){
            const menu = option.parentElement
            if(menu){
                Array.from(menu.children).forEach((el) => {
                    el.classList.remove('DropdownActive')
                })
                const select = menu.previousElementSibling
                if(select){
                    const selected = select.firstElementChild
                    if(selected)
                        selected.textContent = option.textContent
                }
            }
            option.classList.toggle('DropdownActive')
        }
    }
    return (
        <div className="Dropdown" {...props}>
            <div onClick={e => openMenuHandler(e)} className="DropdownSelect">
                <span className="DropdownSelected">{title || "Select"}</span>
                <span className="DropdownCaret"></span>
            </div>
            <ul onClick={e => optionClickHandler(e)} className="DropdownMenu">
                {children}
            </ul>
        </div>
    );
}

export default Dropdown;