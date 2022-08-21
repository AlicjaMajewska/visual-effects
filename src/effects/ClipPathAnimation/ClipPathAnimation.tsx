import React from 'react';
import styled from "styled-components";
import BridgeImage from "../../images/bridge.jpeg"

export type ClipPathAnimationProps = {}

export default function ClipPathAnimation({}: ClipPathAnimationProps) {
    return (<Wrapper>
        <Image src={BridgeImage}/>
        <TextOnImage>Hover to view image</TextOnImage>
    </Wrapper>);
}


const Wrapper = styled.div`
height: 100%;
align-items: center;
justify-content: center;
display: flex;
background-color: gray;
position: relative;
    `;

const Image = styled.img`
display: block;
width: 100%;
height: 100%;
object-fit: cover;

--starting-Y: calc(50% - 1.5rem);
--ending-Y: calc(50% + 2.5rem);


clip-path: polygon(
    25% var(--starting-Y),
    75% var(--starting-Y),
    75% var(--ending-Y),
    25% var(--ending-Y)
);
transition: clip-path 600ms;
will-change: transform;



&:hover {
transition: clip-path 300ms;

clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 100%,
    0% 100%
);
}
`;

const TextOnImage = styled.div`
display: block;
backdrop-filter: blur(12px) brightness(80%);
border-radius: 8px;
padding: 1em;
top: calc(50% - 1em);
position: absolute;
font-size: 1.5rem;
pointer-events: none;
text-align: center;
`;

