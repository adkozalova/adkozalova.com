import React from 'react';
import Project from "../Block/Project";
import HeroPage from "../Block/HeroPage";
import {useTranslation} from "react-i18next";
import {ProjectFillingAndLivingItems} from "../../Config";

export default function PageProjectFillingAndLiving() {
  const [t] = useTranslation();
  return (
      <>
        <HeroPage
            title="Feeling & Living"
            description1={t("Symbolism style. Author's technique. Oil, acrylic, enamel on canvas.")}
            description2={t("The main line in the author’s works is the image of a life full of feels. "
                + "The paintings are done in black & white colors similar to old photos, like a memory or an accidentally remembered fragment. "
                + "This art is about that nothing happens by chance in the world.  Everything that has happened and will happen can extremely change our life, our plans, and ourselves.  You need to be more attentive to life.  Be thankful for everything that happens. "
                + "The main task facing the author is to carefully preserve the sensations, subtle feelings, and life itself in its unsurpassed moments.")}
            img="/images/project/feeling-and-living/feeling-and-living-bg.jpg"
        />
        <Project items={ProjectFillingAndLivingItems()}/>
      </>
  )
}