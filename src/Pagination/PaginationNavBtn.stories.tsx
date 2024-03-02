import React from "react";
import PaginationNavBtn from "./PaginationNavBtn";
import { Meta, StoryObj } from '@storybook/react'

// import './Button.css'

const meta: Meta<typeof PaginationNavBtn> = {
    title: 'Pagination|UI/PaginationNavBtn',
    component: PaginationNavBtn,
}
export default meta

type Story = StoryObj<typeof PaginationNavBtn>


export const PaginationButtonInactive: Story = {
    args:{
        children: '1',
        isActive: false,
        disabled: false
    }
}


export const PaginationButtonActive: Story = {
    args:{
        children: '1',
        isActive: true,
        disabled: false
    }
}


export const PaginationButtonDisabled: Story = {
    args:{
        children: '1',
        disabled: true,
        // isActive: false
    }
}