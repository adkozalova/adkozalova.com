import React from 'react';
import Project from "../Block/Project";
import * as Config from "../../Config";
import HeroPage from "../Block/HeroPage";

export default function PageProjectJazzman() {
  return (
      <>
        <HeroPage
            title="Jazzman"
            description1="Modern art. Author's technique. Oil, acrylic on canvas."
            description2="Jazz is freedom, in music and life. It consists of weightlessness and continuous forward movement sensations.
On these artworks, the main one is a musician who connects with his instrument like is one whole.
The colored ragged background emphasizes freedom."
            img="/images/project/jazzman/jazzman-bg.jpg"
        />
        <Project items={Config.ProjectJazzmanItems}/>
      </>
  )
}