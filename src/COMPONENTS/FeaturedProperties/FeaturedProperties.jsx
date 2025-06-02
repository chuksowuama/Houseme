import React, { useContext } from "react";
import "./FeaturedProperties.css";
import { productContext } from "../../ReactHooksComponent/UsecontextHook";
import PropertyCards from "../PropertyCards/PropertyCards";
import { useNavigate } from "react-router-dom";

const FeaturedProperties = () => {
  const { FeaturedProperties } = useContext(productContext);
  const seemore = useNavigate();
  return (
    <>
      <div className="FeaturedProps">
        {FeaturedProperties.length > 0
          ? FeaturedProperties.map((item) => (
              <PropertyCards 
              propertyCard={item} 
              />
            ))
          : null}
      </div>
      <p className="seemore" onClick={() => seemore("/browse")}>
        seemore
      </p>
    </>
  );
};

export default FeaturedProperties;
