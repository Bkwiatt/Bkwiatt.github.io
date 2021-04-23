import React, { useState, useEffect } from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, TodoLink } from './NavbarElements';
import { IconContext } from 'react-icons/lib';
import { FaBars } from 'react-icons/fa';
import { AiOutlineExclamationCircle } from "react-icons/ai"
import {animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };


    return (
        <>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>Bk</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about" 
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="skills"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >Skills</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="projects"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >Projects</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="contact"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >Contact</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/resume">Résumé</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                    <IconContext.Provider value={{ color: 'red' }}>
                        <TodoLink to="/todo">
                            <AiOutlineExclamationCircle />
                        </TodoLink>
                    </IconContext.Provider>
                </Nav>
        </>
    )
}

export default Navbar;
