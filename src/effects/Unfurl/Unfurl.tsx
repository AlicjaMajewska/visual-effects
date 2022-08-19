import React from 'react';
import styled from "styled-components";

export type UnfurlProps = {}

export default function Unfurl({}: UnfurlProps) {
    return (<Wrapper>
      Unfurl
        <Unfurlable>Unfurled 🎈</Unfurlable>
    </Wrapper>);
}
const Wrapper = styled.div`
font-size: 3rem;
font-weight: 500;
padding: 16px;
;


`;

const Unfurlable = styled.div`
background-color: var(--primary);
padding: 16px;
border-radius: 1px;
transition: clip-path 600ms;
clip-path: polygon(
0% 0%,
100% 0%,
100% 0%,
0% 0%
);
will-change: transform;

${Wrapper}:hover & {
transition: clip-path 300ms;
clip-path: polygon(
0% 0%,
100% 0%,
100% 100%,
0% 100%
);
}



`;