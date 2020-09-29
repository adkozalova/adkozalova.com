import React from 'react';
import HeroPage from "../Common/HeroPage";
import {useTranslation} from "react-i18next";
import ProjectExhibitionFragileContent from "../Projects/ProjectExhibitionFragile/ProjectExhibitionFragileContent";

export default function PageProjectExhibitionFragile() {
  const [t] = useTranslation();
  return (
      <>
        <HeroPage
            title={t("Personal art project - FRAGILE")}
            description1={t("08.10.2020 - 28.10.2020 Kyiv, Ukraine - Ornament Art Space")}
            description2=""
            img="/images/project/black-and-white/black-and-white-bg.jpg"
        />
        <ProjectExhibitionFragileContent/>
      </>
  )
}