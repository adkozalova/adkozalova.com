import React from 'react';
import HeroPage from "../Block/HeroPage";
import PageContactContent from "./PageContactContent";

export default function PageContacts() {
  return (
      <>
        <HeroPage
            title="Contacts"
            description1="A symbol always reflects the reality"
            img="/images/page-hero-bg.jpg"
        />
        <PageContactContent/>
      </>
  )
}