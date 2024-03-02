import React from "react";
import HeaderAvatar from "./HeaderAvatar";
import { Meta, StoryObj } from '@storybook/react'

// import './Button.css'

const meta: Meta<typeof HeaderAvatar> = {
    title: 'Header|UI/Header Avatar',
    component: HeaderAvatar,
    argTypes:{
        as:{
            type: 'string',
            description: 'Tag that will wrap image'
        },
        alt: {
            type: 'string',
            description: 'Alternative text for avatar'
        },
        src: {
            type: 'string',
            src: 'Link to avatar'
        }
    }
}
export default meta

type Story = StoryObj<typeof HeaderAvatar>

export const AvatarLink: Story = {
    args:{
        as: 'a',
        alt: 'Alternative text for avatar',
        src: 'https://images.pexels.com/photos/12730104/pexels-photo-12730104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        href: '/'
    }
}

export const AvatarButton: Story = {
    args:{
        as: 'button',
        alt: 'Alternative text for avatar',
        src: 'https://images.pexels.com/photos/12730104/pexels-photo-12730104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }
}