import React from 'react'
import ProjectPage from '../components/Projects/index'
import ProjectCards from '../components/Projects/ProjectCards'
import { ProjectsContainer } from '../components/Projects/ProjectsElements'

const Projects = () => {
    return (
        <>
            <ProjectsContainer>
                <ProjectPage />
                <ProjectCards />
            </ProjectsContainer>
        </>
    )
}

export default Projects
