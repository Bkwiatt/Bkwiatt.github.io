import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroBg, HeroContainer, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'

const HeroSection = () => {
const [hover, setHover] = useState(false)


const onHover = () => {
    setHover(!hover) 
} 

const playVideo = () => {
    Video.play();
}


    return (
        <HeroContainer onLoad={playVideo}>
        
            <HeroBg>
                <VideoBg autoPlay loop muted playsinline>
                    <source src={Video} />
                </VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Brandon Kwiatkowski</HeroH1>
                <HeroP>Software Developer</HeroP>
                <HeroBtnWrapper>
                    <Button to="contact" onMouseEnter={onHover} onMouseLeave={onHover} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Contact Me {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>

                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
