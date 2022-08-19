import React from 'react';
import VenusGlobeImage from "../../images/venus.png";
import styled from "styled-components";

export type ButtonWith3DimensionalEffectProps = {}

export default function ButtonWith3DimensionalEffect({}: ButtonWith3DimensionalEffectProps) {
    return (<Wrapper>
        <PushableLayer>
            <FrontLayer>Click me in 3D</FrontLayer>
        </PushableLayer>
    </Wrapper>);
}

const Wrapper = styled.div`
height: 100%;
align-items: center;
justify-content: center;
display: flex;
    `;


const PushableLayer = styled.button`
--spacing: 16px;
  border: none;
  border-radius: 8px;
  background-color: #cc6e05;
  font-size: 3rem;
  padding: 0;
  cursor: pointer;
`;

export const FrontLayer = styled.span`
display:block;
border-radius: 8px;
transform: translateY(-8px);
background-color: var(--primary);
padding: var(--spacing);

transition: transform 200ms;

${PushableLayer}:hover & {
transform: translateY(-8px);
transition: transform 300ms;
}

${PushableLayer}:active &{
    transform: translateY(-4px);
}
`;
