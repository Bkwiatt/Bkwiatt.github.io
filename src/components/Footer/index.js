import React from 'react'
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterLinkId, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import {animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Quick Links</FooterLinkTitle>
                                <FooterLinkId to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About me</FooterLinkId>
                                <FooterLinkId to="skills" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Skills</FooterLinkId>
                                <FooterLinkId to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</FooterLinkId>
                                <FooterLinkId to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</FooterLinkId>
                                <FooterLink to="/resume">Resume</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>
                                Bk
                            </SocialLogo>
                            <WebsiteRights>Bk © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href='//www.twitter.com/bkwiatt' target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href='//www.github.com/Bkwiatt' target="_blank" aria-label="Github">
                                    <FaGithub />
                                </SocialIconLink>
                                <SocialIconLink href='//www.linkedin.com/in/bkwiat/' target="_blank" aria-label="Linkedn">
                                    <FaLinkedin />
                                </SocialIconLink>
                                <SocialIconLink href='//www.instagram.com/bkwiatt/' target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
