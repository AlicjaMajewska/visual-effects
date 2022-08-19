import React, {ReactElement} from 'react';
import styled from "styled-components";

export type GridProps = { children: React.ReactElement[]; }

export default function Grid({children}: GridProps) {
    return (
        <GridLayout>
            {children.map((item, index) => (<GridCell key={index}>{item}</GridCell>))}
        </GridLayout>);
}


const GridLayout = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(min(400px, 100%), 1fr));
grid-template-rows: 300px;
grid-gap: 16px;

`;

const GridCell = styled.article`
border: var(--gray) 1px solid;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
transition: brightness 500ms;
background-color: var(--background);
filter: brightness(80%);

&:hover {
transition: brightness 300ms;
filter: brightness(100%);
}

`;
