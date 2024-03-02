import React from "react";
import Tab from "./Tab";
import { Meta, StoryObj } from '@storybook/react'
import TabBtnList from "./TabComponents/TabBtnList";
import TabBtn from "./TabComponents/TabBtn";
import TabContentList from "./TabComponents/TabContentList";
import TabContent from "./TabComponents/TabContent";

// import './Button.css'

const meta: Meta<typeof Tab> = {
    title: 'Tab|UI/Tab',
    component: Tab,
}
export default meta

type Story = StoryObj<typeof Tab>


export const TabComponent: Story = {
    render:() => (
        <Tab>
                <TabBtnList>
                    <TabBtn tabBtnIndex={1} defaultActive>One</TabBtn>
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
}