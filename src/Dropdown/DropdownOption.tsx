import React, { ComponentProps, ElementType, LiHTMLAttributes, ReactNode } from "react";

export type DropdownOwnOptionProps<E extends ElementType = ElementType> = {
    as?: E,
    children?: ReactNode,
}

type DropdownOptionProps<E extends ElementType> = DropdownOwnOptionProps<E> & Omit<ComponentProps<E>, keyof DropdownOwnOptionProps>

const defaultElement = 'li'

function DropdownOption<E extends ElementType = typeof defaultElement>({ children, as, defaultOption, ...props}: DropdownOptionProps<E>){
    const TagName = as || defaultElement
    return(
        <TagName {...props}>{children}</TagName>
    )
}

export default DropdownOption;