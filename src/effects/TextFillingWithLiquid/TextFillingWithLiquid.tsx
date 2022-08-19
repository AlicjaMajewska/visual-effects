import React from 'react';
import styled from "styled-components";

export type TextFillingWithLiquidProps = {
    text: string
}

export default function TextFillingWithLiquid({text}: TextFillingWithLiquidProps) {
    return (<Wrapper>
        {text}
        <Revealed aria-hidden="true">{text}</Revealed>
    </Wrapper>);
}


const Wrapper = styled.div`
position: relative;
display: block;
font-weight: 500;
font-size: 3rem;
will-change: transform;
`;

const Revealed = styled.div`
position: absolute;
top: 0;
left: 0;
color: var(--primary);
transition: clip-path 800ms;
clip-path: polygon(
0% 100%,
100% 100%,
100% 100%,
0% 100%
);
filter: drop-shadow(0 0 4px var(--background)); // due to anialiasing the text underneath might spill out

${Wrapper}:hover & {
transition: clip-path 500ms;
clip-path: polygon(
0% 0%,
100% 0%,
100% 100%,
0% 100%
);
}
`;