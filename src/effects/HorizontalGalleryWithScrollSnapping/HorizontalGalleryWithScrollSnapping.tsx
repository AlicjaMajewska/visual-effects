import React from 'react';
import styled from "styled-components";

import LadyWithWeaselImage from "../../images/dama-z-lasiczka.jpeg";
import JudithImage from "../../images/judith.jpeg"
import JudithSnakeImage from "../../images/judith-snake.jpeg"
import GirlWithPearlImage from "../../images/dziewczyna-z-perla.jpeg";
import MonaLisaImage from "../../images/mona_lista.jpeg";
import TheKissImage from "../../images/the-kiss.jpeg";

export type HorizontalGalleryWithScrollSnappingProps = {}

export default function HorizontalGalleryWithScrollSnapping({}: HorizontalGalleryWithScrollSnappingProps) {
    return (<Wrapper>
        <Paining>
            <Figure>
                <Image src={LadyWithWeaselImage}/>
                <Figcaption>Lady with an Ermine
                </Figcaption>
            </Figure>
        </Paining>

        <Paining>
            <Figure>
                <Image src={JudithImage}/>
                <Figcaption>Judith
                </Figcaption>
            </Figure>
        </Paining>

        <Paining>
            <Figure>
                <Image src={JudithSnakeImage}/>
                <Figcaption>Judith with snake
                </Figcaption>
            </Figure>
        </Paining>

        <Paining>
            <Figure>
                <Image src={GirlWithPearlImage}/>
                <Figcaption>Girl with a pearl earring
                </Figcaption>
            </Figure>
        </Paining>

        <Paining>
            <Figure>
                <Image src={MonaLisaImage}/>
                <Figcaption>Mona Lisa
                </Figcaption>
            </Figure>
        </Paining>

        <Paining>
            <Figure>
                <Image src={TheKissImage}/>
                <Figcaption>The kiss
                </Figcaption>
            </Figure>
        </Paining>

    </Wrapper>);
}
const Wrapper = styled.div`
display: flex;
overflow: auto;
scroll-snap-type: x mandatory;
    `;

const Paining = styled.article`
min-width: 100%;
padding-left: 16px;
padding-right: 16px;
 scroll-snap-align: center;
 display: flex;
 flex-direction: column;
 align-items: center;
`;

const Figure = styled.figure`
  flex: 1;
`;

const Figcaption = styled.figcaption`
  font-size: 1.5rem;
  text-align: center;
  padding: 16px;
  display: block;
`;

const Image = styled.img`
width: 100%;
height: calc(100% - 1.5rem - 32px);
object-fit: cover;
display: block;
`;