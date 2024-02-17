import React, { ComponentProps, ElementType, ReactNode } from "react";

type HeaderAuthOwnProps<E extends ElementType = ElementType> = {
    as?: E,
    children?: ReactNode
}

type HeaderAuthProps<E extends ElementType> = HeaderAuthOwnProps<E> & Omit<ComponentProps<E>, keyof HeaderAuthOwnProps>

const defaultElement = 'a'

function HeaderAuth<E extends ElementType = typeof defaultElement>({children, as, ...props}: HeaderAuthProps<E>){
    const Tag = as || defaultElement
    return(
        <Tag {...props} className="HeaderAuth">{children}</Tag>
    )
}
 

export default HeaderAuth;