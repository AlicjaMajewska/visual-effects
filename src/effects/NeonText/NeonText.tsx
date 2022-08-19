import React from 'react';
import styled from "styled-components";

export type NeonTextProps = {}

export default function NeonText({}: NeonTextProps) {
    const text = 'Neon glow'
    return (<Wrapper>
        <NeonGlow>{text}
            <TextOnNeonGlow>{text}</TextOnNeonGlow>
        </NeonGlow>
    </Wrapper>);
}


const Wrapper = styled.div`
height: 100%;

display: flex;
font-weight: 600;
font-size: 5rem;
font-family:  Snell Roundhand, cursive;

justify-items: center;
align-items: center;
`;

const NeonGlow = styled.div`
 position: relative;
 text-shadow: 0 0 32px #f8cc2b;
`;

const TextOnNeonGlow = styled.div`
color: #fffaed;
position: absolute;
top: 0;
right: 0;


`