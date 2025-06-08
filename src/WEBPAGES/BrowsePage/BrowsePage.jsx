import React from "react";
import Propertylist from "../../COMPONENTS/PropertyListComponent/Propertylist";
import Herosection from "../../COMPONENTS/HerosectionComponent/Herosection";
import heroImg from "../../assets/HomeHerosection.webp";
import Ctabutton from "../../COMPONENTS/CTA-button/Ctabutton";
import SearchProperty from "../../COMPONENTS/SearchPropertyComponent/SearchProperty";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../../COMPONENTS/BreadcrumbsComponents/BreadCrumb";

const BrowsePage = () => {
  const headerLocation=useLocation()
 
  return (
    <>
      <Herosection
        heroContainer="OtherheroContainer"
        BigHeaderline="otherBigHeaderline"
        heroImg={heroImg}
        headline="Properties for Sale/Rent"
        searcharea="removeSearchbar"
      />
      <BreadCrumb/>
      <section>
        <Propertylist />
      </section>
      <Ctabutton />
    </>
  );
};

export default BrowsePage;
