import React from 'react'
import NavbarMobile from './navbar-mobile'
import NavbarDesktop from './navbar-desktop'

type NavbarProps = {
    isMobile: boolean
}

const Navbar = (props: NavbarProps) => {

    const { isMobile } = props

    return isMobile ? <NavbarMobile /> : <NavbarDesktop />
}

export default Navbar