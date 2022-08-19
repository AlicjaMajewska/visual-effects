import React from 'react';
import VisualEffectsGrid from './VisualEffectsGrid/VisualEffectsGrid';
import styled, {createGlobalStyle} from "styled-components";

function App() {
    return (
        <Wrapper>
            <GlobalStyles/>
            <VisualEffectsGrid/>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
min-height: 100%;
margin: 64px;
`;

const GlobalStyles = createGlobalStyle`
html, body {

width: 100%;

--background: #0f0e17;
--primary: #ff8906;
--text: #fffffe;
--gray: #a7a9be;
--secondary:#e53170;

background: var(--background);
color: var(--text);

}
`;