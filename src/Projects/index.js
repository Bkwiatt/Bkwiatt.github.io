import React from 'react';
import { ProjectsContainer, ProjectTypeWrapper, CardWrapper, ProjectRoute, ProjectsWrapper, ProjectsH1, ProjectsP, ProjectsHr, CardImgWrap, CardImg, CardInfo } from '../Projects/ProjectsElements'
import img1 from '../images/codingimg.jpeg'

const ProjectsPage = () => {
    return (
        <>
            <ProjectsContainer>
                <ProjectTypeWrapper>
                    <ProjectRoute to='/'>Home</ProjectRoute>
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