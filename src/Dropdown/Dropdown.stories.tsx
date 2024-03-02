import React from "react";
import Dropdown from "./Dropdown";
import { Meta, StoryObj} from '@storybook/react'
import DropdownOption from "./DropdownOption";
import DropdownDivider from "./DropdownDivider";



const meta: Meta<typeof Dropdown> = {
    title: 'Dropdown',
    component: Dropdown,
    argTypes: {
        title: {
            type: 'string',
            description: 'Select text'
        }
    }
}

export default meta

type Story = StoryObj<typeof Dropdown>
export const Default: Story = {
    render: () => {
        return (
            <Dropdown >
                <DropdownOption>First option</DropdownOption>
                <DropdownOption>Second option</DropdownOption>
                <DropdownOption>Third option</DropdownOption>
                <DropdownOption>Fourth option</DropdownOption>
            </Dropdown>
        )
    }
}

export const Divider: Story = {
    render: () => {
        return (
            <Dropdown title="Select with Divider">
                <DropdownOption>First option</DropdownOption>
                <DropdownOption>Second option</DropdownOption>
                <DropdownOption>Third option</DropdownOption>
                <DropdownDivider />
                <DropdownOption>Fourth option</DropdownOption>
            </Dropdown>
        )
    }
}
