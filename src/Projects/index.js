import React from 'react';
import { ProjectsContainer, ProjectTypeWrapper, CardWrapper, ProjectRoute, ProjectsWrapper, ProjectsH1, ProjectsP, ProjectsHr, CardImgWrap, CardImg, CardInfo, ProjectTypeMenu, NavItem, MobileIcon, NavLogo } from '../Projects/ProjectsElements'
import img1 from '../images/codingimg.jpeg'
import { FaBars } from 'react-icons/fa';

const ProjectsPage = ({ toggle }) => {
    return (
        <>
            <ProjectsContainer>
                <ProjectTypeWrapper>
                    <NavLogo to='/'>Bk</NavLogo>                    
                    <ProjectTypeMenu>
                        <NavItem>
                            C#
                        </NavItem>
                        <NavItem>
                            iOS
                        </NavItem>
                        <NavItem>
                            SQL
                        </NavItem>
                        <NavItem>
                            React
                        </NavItem>
                    </ProjectTypeMenu>
                    <MobileIcon onClick={toggle}>
                            <FaBars />
                    </MobileIcon>
                    <ProjectRoute to='/resume'>Résumé</ProjectRoute>
                </ProjectTypeWrapper>


                
                <ProjectsWrapper>
                    <CardWrapper>
                        <CardImgWrap>
                            <CardImg src={img1} alt="Card Image" />

                        </CardImgWrap>
                        <ProjectsHr/>
                        <CardInfo>
                            <ProjectsH1>iOS Fructus App</ProjectsH1>
                            <ProjectsP>Morbi lectus dui, rutrum in mi ut, accumsan dignissim urna. Nullam venenatis imperdiet nibh eget finibus. Aliquam id tellus mi. Vestibulum aliquet molestie eros eget interdum.</ProjectsP>
                        </CardInfo>
                        
                    </CardWrapper>
                    <CardWrapper>
                        <CardImgWrap>
                            <CardImg src={img1} alt="Card Image" />

                        </CardImgWrap>
                        <ProjectsHr/>
                        <CardInfo>
                            <ProjectsH1>iOS Avocado App</ProjectsH1>
                            <ProjectsP>Morbi lectus dui, rutrum in mi ut, accumsan dignissim urna. Nullam venenatis imperdiet nibh eget finibus. Aliquam id tellus mi. Vestibulum aliquet molestie eros eget interdum.</ProjectsP>
                        </CardInfo>
                    </CardWrapper>
                    <CardWrapper>
                        <CardImgWrap>
                            <CardImg src={img1} alt="Card Image" />

                        </CardImgWrap>
                        <ProjectsHr/>
                        <CardInfo>
                            <ProjectsH1>iOS Slot Machine App</ProjectsH1>
                            <ProjectsP>Morbi lectus dui, rutrum in mi ut, accumsan dignissim urna. Nullam venenatis imperdiet nibh eget finibus. Aliquam id tellus mi. Vestibulum aliquet molestie eros eget interdum.</ProjectsP>
                        </CardInfo>
                    </CardWrapper>
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
        
         
    )
}

export default ProjectsPage