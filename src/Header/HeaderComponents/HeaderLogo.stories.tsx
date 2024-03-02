import React from "react";
import { Meta, StoryObj } from '@storybook/react'
import HeaderLogo from "./HeaderLogo";
import Header from "../Header";

// import './Button.css'

const meta: Meta<typeof HeaderLogo> = {
    title: 'Header|UI/Header Logo',
    component: HeaderLogo,
    decorators: [
        (Story) => (
            <Header>
                <Story />
            </Header>
        )
    ]
}
export default meta

type Story = StoryObj<typeof HeaderLogo>


export const LogoLink: Story = {
    args:{
        as: 'a',
        children: 'Logo',
        href: '/'
    },
}

export const LogoImage: Story = {
    args:{
        as: 'img',
        src: 'https://www.svgrepo.com/show/354397/storybook-icon.svg',
        'alt': 'Alternative text'
    },
}
