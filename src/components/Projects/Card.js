import React, { useState } from 'react'
import { CardWrapper, ProjectsH1, ProjectsP, ProjectsHr, CardImgWrap, CardImg, CardInfo, ModalCloseButton, ModalH1, ModalImgWrap, ModalImg, ModalP, ModalHeader, ModalSocial, ModalHr, ModalContent, ModalLeft, ModalRight, ModalH4, ModalImgWrapSmall, CardCategory, ProjectsTypeLogo, ModalHrSmall, ProgressContainer } from './ProjectsElements'
import iphone2 from '../../images/iphone2.jpeg'
import ProgressBar from '../ProgressBar'
import { FaGithub } from 'react-icons/fa'
import Modal from 'react-modal'
import './modalStyles.css'



const Card = ({ projectName, projectTypeLogo, description, githubLink, img, skill, img1, img2, img3, img4, img5 }) => {
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
                        <ProjectsTypeLogo src={projectTypeLogo} alt="projetlogo" />
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
                            <ModalImg src={img1} alt="iphone2" />
                            <ModalImg src={img2} alt="iphone2" />
                            <ModalImg src={img3} alt="iphone2" />
                            <ModalImg src={img4} alt="iphone2" />
                            <ModalImg src={img5} alt="iphone2" />
                        </ModalImgWrapSmall>
                    </ModalLeft>
                    <ModalRight>               
                        <ModalImgWrap>
                            <ModalImg src={img1} alt="iphone2" />
                            <ModalImg src={img2} alt="iphone2" />
                            <ModalImg src={img3} alt="iphone2" />
                            <ModalImg src={img4} alt="iphone2" />
                            <ModalImg src={img5} alt="iphone2" />
                        </ModalImgWrap>
                        <ModalHrSmall style={{color: 'black'}} />
                        <ModalH4>Skills Demonstrated</ModalH4>
                        <ModalHrSmall />
                        <ProgressContainer>
                            <ProgressBar />
                            <ProgressBar />
                            <ProgressBar />
                            <ProgressBar />
                            <ProgressBar />
                            <ProgressBar />
                            
                        </ProgressContainer>
                    </ModalRight>
                </ModalContent>

            </Modal>
        </>
    )
}

export default Card
