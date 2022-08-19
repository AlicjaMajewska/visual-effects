import React from 'react';
import styled from "styled-components";
import FujiImage from '../../images/image.jpeg';

export type TextOnImageProps = {}

export default function TextOnImage({}: TextOnImageProps) {
    return (
        <Wrapper>
            <TitleOnImage>Hello there </TitleOnImage>
        </Wrapper>);
}

const Wrapper = styled.div`
height: 100%;
width: 100%;
background-image: url(${FujiImage});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleOnImage = styled.h1`
display: inline-block;
backdrop-filter: blur(12px) brightness(90%);
border-radius: 8px;
padding: 16px;
`;

