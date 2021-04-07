import React from 'react'
import { ProjectTypeWrapper, ProjectRoute, ProjectTypeMenu, NavItem, MobileIcon, NavLogo } from './ProjectsElements'
import { FaBars } from 'react-icons/fa';



const ProjectPage = () => {
    return (
            <ProjectTypeWrapper>
                <NavLogo to='/'>Bk</NavLogo>                    
                <ProjectTypeMenu>
                    <NavItem>
                        iOS
                    </NavItem>
                    <NavItem>
                        C#
                    </NavItem>
                    <NavItem>
                        SQL
                    </NavItem>
                    <NavItem>
                        React
                    </NavItem>
                </ProjectTypeMenu>
                <MobileIcon>
                        <FaBars />
                </MobileIcon>
                <ProjectRoute to='/resume'>Résumé</ProjectRoute>
            </ProjectTypeWrapper>
    )
}

export default ProjectPage
