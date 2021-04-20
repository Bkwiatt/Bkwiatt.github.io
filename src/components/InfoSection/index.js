import React, { useState } from 'react'
import { Button } from '../ButtonElement';
import Modal from 'react-modal'
import ProgressBar from '../ProgressBar'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap, Phone, ModalButton, ModalHeader, ModalWrapper } from './InfoElements';

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, buttonLocation, number, imgVal }) => {
    let button;

    Modal.setAppElement('#root')
    const [modalIsOpen, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    function closeModal() {
        setShowModal(false);
    }

    if (imgVal == 1) {
        button = <ModalButton onClick={openModal}>Skills</ModalButton>
    }
    else { button = null }

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <Phone darkText={darkText} href="tel:847-951-6388">{number}</Phone>
                                <BtnWrap>
                                    {button}
                                </BtnWrap>
                                <BtnWrap>
                                    <Button to={buttonLocation}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >
                                        {buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className='modalStyles'>

                <ModalHeader>Skills</ModalHeader>
                <ModalWrapper>
                    <ProgressBar />
                    <ProgressBar />
                    <ProgressBar />
                    <ProgressBar />
                    <ProgressBar />
                    <ProgressBar />
                    <ProgressBar />
                    <ProgressBar />
                    <ProgressBar />
                    <ProgressBar />
                    <ProgressBar />
                    <ProgressBar />
                    <ProgressBar />
                </ModalWrapper>
                
            </Modal>
        </>
    )
}

export default InfoSection
