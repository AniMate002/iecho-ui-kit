import React from "react";
import Input from "./Input";
import { Meta, StoryObj } from '@storybook/react'
import './Input.css'
// import './Button.css'

const meta: Meta<typeof Input> = {
    title: 'Input',
    component: Input,
}
export default meta

type Story = StoryObj<typeof Input>


export const Success: Story = {
    args:{
        theme: 'success',
        label: 'Success',
        placeholder: 'Success...'
    }
}

export const Error: Story = {
    args:{
        theme: 'error',
        label: 'Error',
        placeholder: 'Error...'
    }
}

export const Inactive: Story = {
    args:{
        theme: 'inactive',
        label: 'Inactive',
        placeholder: 'Inactive...'
    }
}

export const Disabled: Story = {
    args:{
        theme: 'success',
        disabled: true,
        label: 'Disabled',
        placeholder: 'Disabled...'
    }
}