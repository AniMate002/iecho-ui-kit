import CheckBox from "./CheckBox";
import { Meta, StoryObj} from '@storybook/react'

const meta: Meta<typeof CheckBox> = {
    title: 'CheckBox',
    component: CheckBox
}

export default meta
type Story = StoryObj<typeof CheckBox>

export const Checked: Story = {
    args:{
        disabled: false,
        checked: true,
        label: 'Checked'
    }
}


export const Unchecked: Story = {
    args:{
        disabled: false,
        checked: false,
        label: 'Unchecked'
    }
}

export const Disabled: Story = {
    args:{
        disabled: true,
        checked: false,
        label: 'Disabled'
    }
}