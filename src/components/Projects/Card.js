import React, { useState } from 'react'
import { CardWrapper, ProjectsH1, ProjectsP, ProjectsHr, CardImgWrap, CardImg, CardInfo, ModalCloseButton, ModalH1, ModalImgWrap, ModalImg, ModalP, ModalHeader, ModalSocial, ModalHr, ModalContent, ModalLeft, ModalRight, ModalH4, SkillsItem, SkillsList, ModalImgWrapSmall, CardCategory, ProjectsTypeLogo } from './ProjectsElements'
import iphone1 from '../../images/iphone1.jpeg'
import iphone2 from '../../images/iphone2.jpeg'
import appleLogo from '../../images/apple_logo_black.svg'
import cLogo from '../../images/c.png'

import { FaGithub } from 'react-icons/fa'
import Modal from 'react-modal'
import './modalStyles.css'

const Card = ({ projectName, description, githubLink, img }) => {
    Modal.setAppElement('#root')
    const [modalIsOpen, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    function closeModal() {
        setShowModal(false);
    }

    return (

        <>
            <CardWrapper onClick={openModal}>
                <CardImgWrap>
                    <CardCategory>
                        <ProjectsTypeLogo src={appleLogo} alt="ioslogo" />
                    </CardCategory>
                    <CardImg src={img} alt="Card Image" />
                </CardImgWrap>
                <ProjectsHr />
                <CardInfo>
                    <ProjectsH1>{projectName}</ProjectsH1>
                    <ProjectsP>{description}</ProjectsP>
                </CardInfo>
                
            </CardWrapper>


            {/* On card click, Modal opens */}
            <Modal
            
                closeTimeoutMS={500}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className='modalStyles'>

                <ModalContent>
                    <ModalLeft>
                        <ModalHeader>
                            <ModalCloseButton onClick={closeModal}>x</ModalCloseButton>
                            <ModalSocial href={githubLink} target="_blank" aria-label="Github">
                                <FaGithub />
                            </ModalSocial> 
                        </ModalHeader>
                        
                        <ModalH1>{projectName}</ModalH1>
                        <ModalHr />
                        <ModalP>{description}</ModalP>
                        <ModalHr />
                        <ModalImgWrapSmall>
                            <ModalImg src={iphone2} alt="iphone2" />
                            <ModalImg src={iphone2} alt="iphone2" />
                            <ModalImg src={iphone2} alt="iphone2" />
                            <ModalImg src={iphone2} alt="iphone2" />
                            <ModalImg src={iphone2} alt="iphone2" />
                        </ModalImgWrapSmall>
                    </ModalLeft>
                    <ModalRight>               
                        <ModalImgWrap>
                            <ModalImg src={iphone2} alt="iphone2" />
                            <ModalImg src={iphone2} alt="iphone2" />
                            <ModalImg src={iphone2} alt="iphone2" />
                            <ModalImg src={iphone2} alt="iphone2" />
                            <ModalImg src={iphone2} alt="iphone2" />
                        </ModalImgWrap>
                        <ModalHr style={{color: 'black'}} />
                        <ModalH4>Skills Demonstrated</ModalH4>
                        <ModalHr />
                        <SkillsList>
                            <SkillsItem>Swift</SkillsItem>
                            <SkillsItem>SwiftUI</SkillsItem>
                            <SkillsItem>UI/UX</SkillsItem>
                            <SkillsItem>Object Oriented Programming</SkillsItem>

                        </SkillsList>
                    </ModalRight>
                </ModalContent>

            </Modal>
        </>
    )
}

export default Card
