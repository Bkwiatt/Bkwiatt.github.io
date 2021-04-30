import React from 'react'
import { CardWrapperLink, ProjectsH1, ProjectsP, ProjectsHr, CardImgWrap, CardImg, CardInfo, CardCategory, ProjectsTypeLogo} from './ProjectsElements'


const CardModal = ({ projectName, projectTypeLogo, description, img, projectLink }) => {


    return (
        

        <>
            <CardWrapperLink to={projectLink}>
                <CardImgWrap>
                    <CardCategory>
                        <ProjectsTypeLogo src={projectTypeLogo} alt="projetlogo" />
                    </CardCategory>
                    <CardImg src={img} alt="Card Image" />
                </CardImgWrap>
                <ProjectsHr />
                <CardInfo>
                    <ProjectsH1>{projectName}</ProjectsH1>
                    <ProjectsP>{description}</ProjectsP>
                </CardInfo>
                
            </CardWrapperLink>
        </>
    )
}

export default CardModal
