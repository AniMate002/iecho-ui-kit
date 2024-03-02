import React, { useState } from "react";
import Pagination from "./Pagination";
import { Meta, StoryObj } from '@storybook/react'
import PaginationNavBtn from "./PaginationNavBtn";

// import './Button.css'

const meta: Meta<typeof Pagination> = {
    title: 'Pagination|UI/Pagination',
    component: Pagination,
}
export default meta

type Story = StoryObj<typeof Pagination>

const PaginationWithHooks = () => {
    const [currPage, setCurrPage] = useState(1)
    return(
        <Pagination clasName='test'>
            <PaginationNavBtn onClick={() => setCurrPage(prev => prev - 1)} disabled={currPage === 1}>&#60;</PaginationNavBtn>
            <PaginationNavBtn className='test' onClick={() => setCurrPage(1)} isActive={currPage === 1}>1</PaginationNavBtn>
            <PaginationNavBtn onClick={() => setCurrPage(2)} isActive={currPage === 2}>2</PaginationNavBtn>
            <PaginationNavBtn onClick={() => setCurrPage(3)} isActive={currPage === 3}>3</PaginationNavBtn>
            <PaginationNavBtn onClick={() => setCurrPage(4)} isActive={currPage === 4}>4</PaginationNavBtn>
            <PaginationNavBtn onClick={() => setCurrPage(prev => prev + 1)} disabled={currPage === 4}>&#62;</PaginationNavBtn>
        </Pagination>
    )
}

export const PaginationNavigation: Story = {
    render: () => <PaginationWithHooks />
}