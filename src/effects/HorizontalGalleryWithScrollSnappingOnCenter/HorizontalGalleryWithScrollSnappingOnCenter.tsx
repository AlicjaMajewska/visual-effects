import React, {useRef, useState} from 'react';
import styled from "styled-components";
import AperolSpritzImage from "../../images/drinks/aperol-spritz.png";
import MojitoImage from "../../images/drinks/mojito.png";
import DrinkImage from "../../images/drinks/drink.png";
import PinacoladaImage from "../../images/drinks/pinacolada.png";
import {useThrottleCallback} from "@react-hook/throttle";

export type HorizontalGalleryWithScrollSnappingOnCenterProps = {}

export default function HorizontalGalleryWithScrollSnappingOnCenter({}: HorizontalGalleryWithScrollSnappingOnCenterProps) {


    const [, setState] = useState(false);

    const onWrapperScroll = useThrottleCallback((e) => {
        setState(it => !it);
    });

    return (
        <Wrapper onScroll={onWrapperScroll}>
            <Drink firstOfType title={'Aperol Spritz'} imgSrc={AperolSpritzImage} price={6} currency={'€'}/>
            <Drink title={'Mojito'} imgSrc={MojitoImage} price={5} currency={'€'}/>
            <Drink title={'Sex on the beach'} imgSrc={DrinkImage} price={7} currency={'€'}/>
            <Drink title={'Pinacolada'} imgSrc={PinacoladaImage} price={7} currency={'€'}/>
        </Wrapper>);
}

type DrinkProps = {
    title: string;
    price: number;
    currency: string;
    imgSrc: string;
    firstOfType?: boolean;
}

const WRAPPER_PADDING_IN_PX = 75;

const Drink = ({title, price, currency, imgSrc, firstOfType}: DrinkProps) => {

    const ref = useRef<HTMLElement>(null);
    let isCentered = !!firstOfType;

    if (ref.current) {
        const elementWidth = ref.current.getBoundingClientRect().width || 0;

        const centerOfSnappedElement = WRAPPER_PADDING_IN_PX + (ref.current.parentElement?.scrollLeft || 0) + (elementWidth / 2);

        const leftEdgePosition = ref.current.offsetLeft;
        const rightEdgePosition = ref.current.offsetLeft + elementWidth;

        isCentered = leftEdgePosition < centerOfSnappedElement && (rightEdgePosition) > centerOfSnappedElement;
    }


    return (
        <DrinkWrapper ref={ref} isCentered={isCentered}>
            <Figure>
                <Image src={imgSrc}/>
                <Figcaption>{`${title} - ${price} ${currency}`}</Figcaption>
            </Figure>
        </DrinkWrapper>
    );
}

const Wrapper = styled.div`
display: flex;
overflow: auto;
scroll-snap-type: x mandatory;
padding-left: ${WRAPPER_PADDING_IN_PX}px;
padding-right: ${WRAPPER_PADDING_IN_PX}px;
height: 100%;
align-items: center;
`;

type DrinkWrapperProps = {
    isCentered: boolean,
}

const DrinkWrapper = styled.article<DrinkWrapperProps>`
min-width: 200px;
padding-left: 16px;
padding-right: 16px;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
filter: brightness(${props => props.isCentered ? '100%' : '50%'});
`;

const Figure = styled.figure`
flex: 1;
display: flex;
flex-direction: column;
`;

const Figcaption = styled.figcaption`
font-size: 1.5rem;
text-align: center;
padding: 16px;
display: block;
`;

const Image = styled.img`
width: 100%;
height: 300px;
object-fit: cover;
display: block;
`;