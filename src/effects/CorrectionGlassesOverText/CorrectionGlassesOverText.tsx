import React from 'react';
import TextImage from '../../images/text.png';
import styled from "styled-components";

export type CorrectionGlassesOverTextProps = {}

export default function CorrectionGlassesOverText({}: CorrectionGlassesOverTextProps) {

    const svgImage = (
        <svg version="1.1" id="Layer_1"
             viewBox="0 0 472.615 472.615">
            <defs>
                <clipPath id="svgPath">
                    <path fill="#FFFFFF" stroke="#000000" strokeWidth="1.5794" strokeMiterlimit="10" d="M472.615,205.762h-25.35c-12.786-38.004-48.659-65.454-90.942-65.454c-43.176,0-79.826,28.702-91.826,68.07
    c-7.581-5.005-17.296-8.106-28.194-8.106c-10.9,0-20.619,3.103-28.201,8.112c-12-39.372-48.65-68.076-91.827-68.076
    c-42.283,0-78.156,27.45-90.942,65.454H0v19.692h20.93c-0.403,3.567-0.656,7.179-0.656,10.853c0,52.972,43.028,96,96,96
    c52.874,0,96-43.028,96-96c0-0.551-0.074-1.084-0.083-1.633h0.058c0-6.956,9.881-14.711,24.053-14.711
    c14.178,0,24.053,7.755,24.053,14.711h0.05c-0.009,0.548-0.083,1.081-0.083,1.633c0,52.972,43.126,96,96,96
    c52.972,0,96-43.028,96-96c0-3.675-0.253-7.286-0.657-10.853h20.949V205.762z"/>
                </clipPath>
            </defs>

        </svg>)


    return (

        <Wrapper>
            {svgImage}
            <Image src={TextImage}/>
            <GlassesBorder/>
            <GlassesOnTop src={TextImage}/>
        </Wrapper>);
}

const Wrapper = styled.div`
height: 100%;
align-items: center;
justify-content: center;
display: flex;
position: relative;
overflow: hidden;

svg { // TODO fix svg sizing
      width:  auto;
      height: auto;
}
    `;


const Image = styled.img`
display: block;
width: 100%;
height: 100%;
object-fit: cover;
filter: blur(4px);
`;

const GlassesOnTop = styled(Image)`
position: absolute;
top:0;
left: 0;
clip-path: url(#svgPath);
filter: brightness(100%);
border: 8px;
`;

const GlassesBorder = styled.div` // TODO fix 
position: absolute;
top:0;
left: 0;
clip-path: url(#svgPath);
transform: scale(1.01);
color: black;
background-color: black;
width: 5px;
border: 8px;
`;

