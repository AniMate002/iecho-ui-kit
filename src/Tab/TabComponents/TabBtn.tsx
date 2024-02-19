import React from "react";

export interface TabBtnProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    className?: string,
    tabBtnIndex: number,
    defaultActive?: boolean
}

const TabBtn:React.FC<TabBtnProps> = ({ children, className, tabBtnIndex, defaultActive, ...props}) => {
    function TabBtnClickHandler (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>){
        const btn = e.target as HTMLParagraphElement
        const btnParent = btn.parentElement
        const contentParent = btnParent?.nextElementSibling
        const allBtns = btnParent?.children
        let activeIndex
        if(allBtns){
            for(let singleBtn of Array.from(allBtns)){
                singleBtn.classList.remove('TabBtnActive')
            }
        }
        if(btn){
            btn.classList.add('TabBtnActive')
            activeIndex = btn.dataset.tabBtn
        }
        if(contentParent){
            const allContents = contentParent.children
            for(let i = 1; i <= Array.from(allContents).length; i++){
                if(activeIndex == String(i)){
                    allContents.item(i-1)?.classList.add('TabContentActive')
                }else{
                    allContents.item(i-1)?.classList.remove('TabContentActive')
                }
            }
        }
    }
    return (
        <p {...props} data-tab-btn={String(tabBtnIndex)} onClick={e => TabBtnClickHandler(e)} className={`TabBtn ${defaultActive ? 'TabBtnActive' : ''} ${className ? className : ''}`}>{children}</p>
    );
}
 
export default TabBtn;