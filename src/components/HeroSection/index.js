import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroBg, HeroContainer, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'

const HeroSection = () => {
const [hover, setHover] = useState(false)


const onHover = () => {
    setHover(!hover) 
} 


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg playsinline autoPlay loop muted src={Video} type='/video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Brandon Kwiatkowski</HeroH1>
                <HeroP>Software Developer</HeroP>
                <HeroBtnWrapper>
                    <Button to="resume" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Resume {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>

                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
