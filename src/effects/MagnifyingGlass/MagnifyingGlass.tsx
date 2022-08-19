import React, {useCallback, useEffect, useState, MouseEvent, MouseEventHandler, useRef} from 'react';
import styled from "styled-components";
import FujiImage from '../../images/image.jpeg';
import {useThrottleCallback} from '@react-hook/throttle';

export type MagnifyingGlassProps = {}

export default function MagnifyingGlass({}: MagnifyingGlassProps) {
    const [coords, setCoords] = useState({x: 50, y: 50});
    const [isMagnifyingGlassVisible, setMagnifyingGlassVisible] = useState(true);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleMouseMove: MouseEventHandler<HTMLDivElement> = useThrottleCallback((event: MouseEvent<HTMLDivElement>) => {
        const boundingClientRect = wrapperRef.current?.getBoundingClientRect();

        const elementWidth = boundingClientRect?.width
        const elementHeight = boundingClientRect?.height;
        const xInPercentage = elementWidth ? Math.round(100 * (event.clientX - (boundingClientRect?.left ?? 0)) / elementWidth) : 50;
        const yInPercentage = elementHeight ? Math.round(100 * (event.clientY - (boundingClientRect?.top ?? 0)) / elementHeight) : 50;

        setCoords({
            x: xInPercentage,
            y: yInPercentage
        });
    });

    return (
        <Wrapper ref={wrapperRef} onMouseMove={handleMouseMove}
                 onMouseOverCapture={() => setMagnifyingGlassVisible(true)}
                 onMouseLeave={() => setMagnifyingGlassVisible(false)}>
            <Image src={FujiImage}/>
            {isMagnifyingGlassVisible && <ZoomedInCircle
                style={{
                    top: `calc(${coords.y}% - var(--radius) / 16)`,
                    left: `calc(${coords.x}%  - var(--radius) / 16)`,
                }}
            >
                <ImageZoomed style={{
                    backgroundImage: `url(${FujiImage})`,
                    backgroundPositionY: `${coords.y}%`,
                    backgroundPositionX: `${coords.x}%`,
                    transform: `scale(var(--scale)) translateY(${(50 - coords.y) }%)`,
                }}
                />
            </ZoomedInCircle>}
        </Wrapper>);
}


const Wrapper = styled.div`
height: 100%;
position: relative;
`;

const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`;

const ImageZoomed = styled.div`
  z-index: 10;
  --scale: 2;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ZoomedInCircle = styled.div`
--radius: 200px;
position: absolute;
width: var(--radius);
height:var(--radius);
border-radius: 100%;
overflow: hidden;
border: lightgray 3px solid;
background-color: var(--background);
`;
