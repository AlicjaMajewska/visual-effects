import React from 'react';
import Grid from "../Grid/Grid";
import TextFillingWithLiquid from "../effects/TextFillingWithLiquid/TextFillingWithLiquid";
import NeonText from "../effects/NeonText/NeonText";
import Unfurl from "../effects/Unfurl/Unfurl";
import ImageZoomingIn from "../effects/ImageZoomingIn/ImageZoomingIn";
import MagnifyingGlass from "../effects/MagnifyingGlass/MagnifyingGlass";
import TextOnImage from "../effects/TextOnImage/TextOnImage";
import BlurredGlowWithImage from "../effects/BlurredGlowWithImage/BlurredGlowWithImage";
import ButtonWith3DimensionalEffect from "../effects/ButtonWith3DimensionalEffect/ButtonWith3DimensionalEffect";
import DarkGlassesOverView from "../effects/DarkGlassesOverView/DarkGlassesOverView";
import CorrectionGlassesOverText from "../effects/CorrectionGlassesOverText/CorrectionGlassesOverText";
import HorizontalGalleryWithScrollSnapping from '../effects/HorizontalGalleryWithScrollSnapping/HorizontalGalleryWithScrollSnapping';
import HorizontalGalleryWithScrollSnappingOnCenter
    from "../effects/HorizontalGalleryWithScrollSnappingOnCenter/HorizontalGalleryWithScrollSnappingOnCenter";

export type VisualEffectsGridProps = {}

export default function VisualEffectsGrid({}: VisualEffectsGridProps) {
    return (
        <Grid>
                <MagnifyingGlass />
                <TextFillingWithLiquid text={"Liquid text"}/>
                <Unfurl/>
                <NeonText/>

                <ImageZoomingIn/>
            <TextOnImage/>
            <BlurredGlowWithImage/>

            <ButtonWith3DimensionalEffect/>
            <DarkGlassesOverView/>
            <CorrectionGlassesOverText/>
            <HorizontalGalleryWithScrollSnapping/>
            <HorizontalGalleryWithScrollSnappingOnCenter/>
        </Grid>);
}
