import React, { ComponentProps, ElementType, ReactNode } from "react";

type HeaderLogoOwnProps<E extends ElementType = ElementType> = {
    as?: E,
    children?: ReactNode
}

type HeaderLogoProps<E extends ElementType> = HeaderLogoOwnProps<E> & Omit<ComponentProps<E>, keyof HeaderLogoOwnProps>

const defaultElement = 'div'

function HeaderLogo<E extends ElementType = typeof defaultElement>({children, as, ...props}: HeaderLogoProps<E>){
    const Tag = as || defaultElement
    return(
        <Tag {...props} className="HeaderLogo">{children}</Tag>
    )
}
 
export default HeaderLogo;