import React from 'react';
import styled from "styled-components";
import PalmsImage from "../../images/palms.avif"

export type ImageZoomingInProps = {}

export default function ImageZoomingIn({}: ImageZoomingInProps) {
    return (<Wrapper>
        <Image alt={"Image zooming in on hover"} src={PalmsImage}/>
    </Wrapper>);
}
const Wrapper = styled.div`
height: 100%;
overflow: hidden;
`;

const Image = styled.img`
display: block;
width: 100%;
height: 100%;
object-fit: cover;
transition: transform 600ms;
will-change: transform;

${Wrapper}:hover & { // asumes that wrapper is interactive element such as link
transform: scale(1.1);
transition: transform 300ms;

}
`;