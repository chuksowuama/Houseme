import React, { useContext, useEffect } from "react";
import heroImg from "../../assets/HomeHerosection.webp"
import Herosection from "../../COMPONENTS/HerosectionComponent/Herosection";
import { productContext } from "../../ReactHooksComponent/UsecontextHook";
import Howitworks from "../../COMPONENTS/HowitWorks/Howitworks";
import FeaturedProperties from "../../COMPONENTS/FeaturedProperties/FeaturedProperties";
import WhychooseUs from "../../COMPONENTS/Why-Choose-Us/WhychooseUs";
import Ctabutton from "../../COMPONENTS/CTA-button/Ctabutton";
import BreadCrumb from "../../COMPONENTS/BreadcrumbsComponents/BreadCrumb";

const HomePage = () => {
  const { properties } = useContext(productContext);

  return (
    <>
      <section className="heroSEC">
        <Herosection 
          heroContainer="heroContainer"
          BigHeaderline="BigHeaderline"
          heroImg={heroImg}
          headline=" Find Your Next Home. Directly From Landlords. No Agents. No Hassle."
          subHeadline="Browse hundreds of properties and connect directly with verified landlords."
        />
      </section>
      <BreadCrumb/>
      <section data-aos="fade-right">
        <h1 className="sectitle">How it Works</h1>
        <Howitworks />
      </section>
      <section>
        <h1 className="sectitle">Featuured Element</h1>
        <div className="FeaturedElement">
        <FeaturedProperties/>
        </div>
      </section>
      <section >
      <h1 className="sectitle">Why Choose Us</h1>
       <WhychooseUs/>
      </section>
      <Ctabutton/>
    </>
  );
};

export default HomePage;
