import React from "react";
import TabBtn from "./TabBtn";
import { Meta, StoryObj } from '@storybook/react'
import Tab from "../Tab";
import TabBtnList from "./TabBtnList";
import TabContentList from "./TabContentList";
import TabContent from "./TabContent";

// import './Button.css'

const meta: Meta<typeof TabBtn> = {
    title: 'Tab|UI/Tab Button',
    component: TabBtn,
    decorators: [
        (Story) => (
            <Tab>
                <TabBtnList>
                    <Story />
                    {/* <TabBtn tabBtnIndex={1} defaultActive>One</TabBtn> */}
                    <TabBtn tabBtnIndex={2}>Two</TabBtn>
                    <TabBtn tabBtnIndex={3}>Three</TabBtn>
                    <TabBtn tabBtnIndex={4}>Four</TabBtn>
                </TabBtnList>
                <TabContentList>
                    <TabContent defaultActive>It's one</TabContent>
                    <TabContent>It's two</TabContent>
                    <TabContent>It's three</TabContent>
                    <TabContent>It's four</TabContent>
                </TabContentList>
            </Tab>
        )
    ]
}
export default meta

type Story = StoryObj<typeof TabBtn>


export const TabButton: Story = {
    args:{
        children: '1 Tab',
        tabBtnIndex: 1,
        defaultActive: false
    }
}

export const TabButtonWithDifferentIndex: Story = {
    args:{
        children: 'One (But shows 2)',
        tabBtnIndex: 2,
        defaultActive: false

    }
}

export const TabButtonDefaultActive: Story = {
    args:{
        children: 'One (Active by default)',
        tabBtnIndex: 1,
        defaultActive: true
    }
}