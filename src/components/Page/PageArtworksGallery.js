import React from 'react';
import HeroPage from "../Common/HeroPage";
import {useTranslation} from "react-i18next";
import ArtworksData from "../Data/ArtworksData";
import GalleryItems from "../Common/GalleryItems";

export default function PageArtworksGallery() {
    const [t] = useTranslation();
    return (
        <>
            <HeroPage
                title={t('Artworks Gallery')}
                description1={t("Author's technique.")}
                description2={t("Viktoria Adkozalova creates paintings and graphic works, VR-art, and video-art. Doing experiments with new materials such as LED, thermo mosaic, gold foil, and others.")}
                img={require("../../assets/images/artwork/hero.jpg")}
            />
            <GalleryItems title={t('Artworks')} items={ArtworksData()}/>
        </>
    )
}