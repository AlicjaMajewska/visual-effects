import React from 'react';
import styled from "styled-components";
import DiscoBallImage from "../../images/disco-ball.png"
import VenusGlobeImage from "../../images/venus.png"

export type BlurredGlowWithImageProps = {}

export default function BlurredGlowWithImage({}: BlurredGlowWithImageProps) {
    return (<Wrapper>
        <ImageWithGlowWrapper>
            <ImageGlow src={VenusGlobeImage}/>
            <Image src={VenusGlobeImage}/>
        </ImageWithGlowWrapper>
    </Wrapper>);
}

const Wrapper = styled.div`
height: 100%;
align-items: center;
justify-content: center;
display: flex;
overflow: hidden;
    `;

const ImageWithGlowWrapper = styled.div`
position:relative;
isolation: isolate;
`;

const Image = styled.img`
height: 100%;
width: 100%;

object-fit: cover;
z-index: 1;

position: relative;
`;

const ImageGlow = styled(Image)`
z-index: 0;
position: absolute;
top: 0;
left: 0;
filter: blur(56px) brightness(110%);
 `;
