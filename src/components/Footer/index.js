import React from 'react'
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
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
                                <FooterLinkTitle>Links</FooterLinkTitle>
                                <FooterLink to="/resume">About me</FooterLink>
                                <FooterLink to="/resume">Skills</FooterLink>
                                <FooterLink to="/resume">Projects</FooterLink>
                                <FooterLink to="/resume">Contact</FooterLink>
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
                                <SocialIconLink href='/' target="_blank" aria-label="Github">
                                    <FaGithub />
                                </SocialIconLink>
                                <SocialIconLink href='/' target="_blank" aria-label="Linkedn">
                                    <FaLinkedin />
                                </SocialIconLink>
                                <SocialIconLink href='/' target="_blank" aria-label="Instagram">
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
