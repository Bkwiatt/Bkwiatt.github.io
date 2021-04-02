import React from 'react'
import { CardWrapper, ProjectsH1, ProjectsP, ProjectsHr, CardImgWrap, CardImg, CardInfo, ModalStyles, ModalCloseButton, ModalH1, ModalImgWrap, ModalImg, ModalP, ModalHeader, ModalSocial, ModalHr } from './ProjectsElements'
import iphone1 from '../../images/iphone1.jpeg'
import iphone2 from '../../images/iphone2.jpeg'
import { FaGithub } from 'react-icons/fa'

import Modal from 'react-modal'

const Card = ({ projectName, description, githubLink, img }) => {
    Modal.setAppElement('#root')

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <CardWrapper onClick={openModal}>
                <CardImgWrap>
                    <CardImg src={img} alt="Card Image" />
                </CardImgWrap>
                <ProjectsHr />
                <CardInfo>
                    <ProjectsH1>{projectName}</ProjectsH1>
                    <ProjectsP>{description}</ProjectsP>
                </CardInfo>
            </CardWrapper>


Í
            {/* On card click, Modal opens */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={ModalStyles} >

                <ModalHeader>
                    <ModalCloseButton onClick={closeModal}>x</ModalCloseButton>

                    <ModalSocial href={githubLink} target="_blank" aria-label="Github">
                        <FaGithub />
                    </ModalSocial>
                    
                </ModalHeader>

                <ModalH1>{projectName}</ModalH1>
                <ModalImgWrap>
                    <ModalImg src={iphone1} alt="iphone1" />
                    <ModalImg src={iphone2} alt="iphone2" />
                </ModalImgWrap>
                <ModalHr />
                <ModalP>{description}</ModalP>
            </Modal>
        </>
    )
}

export default Card
