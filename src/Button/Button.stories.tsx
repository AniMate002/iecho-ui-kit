import React from "react";
import Button from "./Button";
import { Meta, StoryObj } from '@storybook/react'

// import './Button.css'

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
}
export default meta

type Story = StoryObj<typeof Button>


export const Default: Story = {
    args:{
        theme: 'default',
        disabled: false,
        children: 'Default button',
    }
}
export const Danger: Story = {
    args:{
        theme: 'danger',
        disabled: false,
        children: 'Danger button'
    }
}
export const Disabled: Story = {
    args:{
        theme: 'default',
        disabled: true,
        children: 'Disabled button'
    }
}
export const Info: Story = {
    args:{
        theme: 'info',
        disabled: false,
        children: 'Info button'
    }
}

export const Inverse: Story = {
    args:{
        theme: 'inverse',
        disabled: false,
        children: 'Inverse button'
    }
}

export const Primary: Story = {
    args:{
        theme: 'primary',
        disabled: false,
        children: 'Primary button'
    }
}

export const Success: Story = {
    args:{
        theme: 'success',
        disabled: false,
        children: 'Success button'
    }
}

export const Warning: Story = {
    args:{
        theme: 'warning',
        disabled: false,
        children: 'Warning button'
    }
}