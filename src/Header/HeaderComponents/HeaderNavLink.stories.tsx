import React from "react";
import { Meta, StoryObj } from '@storybook/react'
import HeaderNavLink from "./HeaderNavLink";
import Header from "../Header";
import HeaderNavigation from "./HeaderNavigation";

// import './Button.css'

const meta: Meta<typeof HeaderNavLink> = {
    title: 'Header|UI/Header NavLink',
    component: HeaderNavLink,
    decorators:[
        (Story) => (
            <Header>
                <HeaderNavigation>
                    <Story />
                </HeaderNavigation>
            </Header>
        )
    ]
}
export default meta

type Story = StoryObj<typeof HeaderNavLink>


export const NavLink: Story = {
    args:{
        children: 'Link',
        href: '/',
        target: '_self'
    }
}