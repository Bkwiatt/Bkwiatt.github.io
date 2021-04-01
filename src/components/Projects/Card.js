import React from 'react'
import { CardWrapper, CardLink, ProjectsH1, ProjectsP, ProjectsHr, CardImgWrap, CardImg, CardInfo, ModalStyles } from './ProjectsElements'
import img1 from '../../images/codingimg.jpeg'
import Modal from 'react-modal'

const Card = ({projectName, description}) => {
    Modal.setAppElement('#root')

    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    
    
    function closeModal(){
    setIsOpen(false);
}
    return (
        <>
            <CardWrapper onClick={openModal}>
                    <CardImgWrap>
                        <CardImg src={img1} alt="Card Image" />
                    </CardImgWrap>
                    <ProjectsHr/>
                    <CardInfo>
                        <ProjectsH1>{projectName}</ProjectsH1>
                        <ProjectsP>{description}</ProjectsP>
                    </CardInfo>
            </CardWrapper>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={ModalStyles} >  
                
                <h2>Hello</h2>
                <button onClick={closeModal}>X</button>
            </Modal>
        </>
    )
}

export default Card
