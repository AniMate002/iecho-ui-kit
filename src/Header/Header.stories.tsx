import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import HeaderLogo from "./HeaderComponents/HeaderLogo";
import HeaderNavigation from "./HeaderComponents/HeaderNavigation";
import HeaderNavLink from "./HeaderComponents/HeaderNavLink";
import HeaderAuth from "./HeaderComponents/HeaderAuth";
import '../Reset.css'
import HeaderElementContainer from "./HeaderComponents/HeaderElementContainer";
import HeaderSearch from "./HeaderComponents/HeaderSearch";
import HeaderAvatar from "./HeaderComponents/HeaderAvatar";
// import "./Header.css"

const meta: Meta<typeof Header> = {
    title: 'Header|UI/Header',
    component: Header
}

export default meta

type Story = StoryObj<typeof Header>

export const HeaderLogIn: Story = {
    render:() => {
        return (
            <Header className="testHeader">
                <HeaderLogo as="a" href="/">Logo</HeaderLogo>
                <HeaderNavigation>
                    <HeaderNavLink href="/">About</HeaderNavLink>
                    <HeaderNavLink href="/">Team</HeaderNavLink>
                    <HeaderNavLink href="/">Projects</HeaderNavLink>
                    <HeaderNavLink href="/">Service</HeaderNavLink>
                </HeaderNavigation>
                <HeaderAuth href="/">Log in</HeaderAuth>
            </Header>
        )
    }
}

export const HeaderLogged: Story = {
    render:() => {
        return (
            <Header className="testHeader">
                <HeaderLogo as="img" src="https://www.svgrepo.com/show/354397/storybook-icon.svg"></HeaderLogo>
                <HeaderNavigation>
                    <HeaderNavLink href="/">About</HeaderNavLink>
                    <HeaderNavLink href="/">Team</HeaderNavLink>
                    <HeaderNavLink href="/">Projects</HeaderNavLink>
                    <HeaderNavLink href="/">Service</HeaderNavLink>
                </HeaderNavigation>
                <HeaderElementContainer>
                    <HeaderSearch placeholder="Search..."/>
                    <HeaderAvatar as="a" href="/" src="https://images.pexels.com/photos/12730104/pexels-photo-12730104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                </HeaderElementContainer>
            </Header>
        )
    }
}