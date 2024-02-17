import React, { ComponentProps, ElementType, ImgHTMLAttributes, ReactNode } from "react";

// export interface HeaderAvatarProps extends ImgHTMLAttributes<HTMLImageElement>{}


// const HeaderAvatar:React.FC<HeaderAvatarProps> = ({...props}) => {
//     return (
//         <div className="HeaderAvatarContainer">
//             <img className="HeaderAvatarImg" {...props} />
//         </div>
//     );
// }

type HeaderAvatarOwnProps<E extends ElementType = ElementType> = {
    as?: E,
    src?: string,
    alt?: string,
} 

type HeaderAvatarProps<E extends ElementType> = HeaderAvatarOwnProps<E> & Omit<ComponentProps<E>, keyof HeaderAvatarOwnProps>

const defaultElement = 'a'

function HeaderAvatar<E extends ElementType = typeof defaultElement>({src, alt, as, ...props}: HeaderAvatarProps<E>){
    const Tag = as || defaultElement
    return(
        <Tag className="HeaderAvatarContainer" {...props}>
            <img className="HeaderAvatarImg" src={src} alt={alt}/>
        </Tag>
    )
}
 
export default HeaderAvatar;