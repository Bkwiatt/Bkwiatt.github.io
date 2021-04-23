import React from 'react'
import { AiOutlineExclamationCircle } from "react-icons/ai"
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap, SidebarRouteLi } from './SidebarElements'; 

const Sidebar = ( {isOpen, toggle} ) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >About</SidebarLink>
                    <SidebarLink to="skills" onClick={toggle}
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Skills</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Projects</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Contact</SidebarLink>
                    <SidebarRouteLi to="/todo" onClick={toggle}><AiOutlineExclamationCircle /></SidebarRouteLi>
                </SidebarMenu>
            </SidebarWrapper>
            <SideBtnWrap>
                <SidebarRoute to="/resume">Résumé</SidebarRoute>
            </SideBtnWrap>
            
        </SidebarContainer>
    )
}

export default Sidebar;
