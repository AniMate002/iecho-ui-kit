import React from "react";
import TabContent from "./TabContent";
import { Meta, StoryObj } from '@storybook/react'
import Tab from "../Tab";
import TabBtnList from "./TabBtnList";
import TabBtn from "./TabBtn";
import TabContentList from "./TabContentList";

// import './Button.css'

const meta: Meta<typeof TabContent> = {
    title: 'Tab|UI/Tab Content',
    component: TabContent,
    decorators: [
        (Story) => (
            <Tab>
                <TabBtnList>
                    <TabBtn tabBtnIndex={1} defaultActive>One</TabBtn>
                    <TabBtn tabBtnIndex={2}>Two</TabBtn>
                    <TabBtn tabBtnIndex={3}>Three</TabBtn>
                    <TabBtn tabBtnIndex={4}>Four</TabBtn>
                </TabBtnList>
                <TabContentList>
                    {/* <TabContent defaultActive>It's one</TabContent> */}
                    <Story />
                    <TabContent>It's two</TabContent>
                    <TabContent>It's three</TabContent>
                    <TabContent>It's four</TabContent>
                </TabContentList>
            </Tab>
        )
    ]
}
export default meta

type Story = StoryObj<typeof TabContent>


export const TabContentComponent: Story = {
    args:{
        children: "Any text you want",
        defaultActive: true
    }
}


export const TabContentDefaultActive: Story = {
    args:{
        children: "Any text you want (Active by default)",
        defaultActive: true
    }
}