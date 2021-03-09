import styled from 'styled-components';

export const ResumeContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1; */

     :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const ResumeBg = styled.div`
    /* position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden; */
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a43;
`

export const NameCardWrapper = styled.div`
    z-index: 3;
`

export const ResumeName = styled.h2`
    color: 'white';
`

export const ResumeJobTitle = styled.h4`

`

export const ResumeHr = styled.hr`

`

export const ResumeH5 = styled.h5`
    color: '#FFF';
`

export const ResumeP = styled.p`
    color: '#FFF';
`
