import React from "react";
import HeaderSearch from "./HeaderSearch";
import { Meta, StoryObj } from '@storybook/react'
import Header from "../Header";

// import './Button.css'

const meta: Meta<typeof HeaderSearch> = {
    title: 'Header|UI/Header Search',
    component: HeaderSearch,
    decorators:[
        (Story) => (
            <Header>
                <Story />
            </Header>
        )
    ]
}
export default meta

type Story = StoryObj<typeof HeaderSearch>


export const Search: Story = {
    args:{
        placeholder: 'Placeholder',
    }
}