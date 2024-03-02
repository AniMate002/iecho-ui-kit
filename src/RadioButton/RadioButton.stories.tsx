import React from "react";
import RadioButton from "./RadioButton";
import { Meta, StoryObj } from '@storybook/react'

// import './Button.css'

const meta: Meta<typeof RadioButton> = {
    title: 'RadioButton',
    component: RadioButton,
    args: {
        disabled: false,
        name: 'RadioBtn'
    }
}
export default meta

type Story = StoryObj<typeof RadioButton>


export const Inactive: Story = {
    args:{
        label: 'Inactive',
        checked: false
    }
}

export const Active: Story = {
    args:{
        label: 'Active',
        checked: true
    }
}

export const Disabled: Story = {
    args:{
        label: 'Disabled',
        checked: true,
        disabled: true
    }
}