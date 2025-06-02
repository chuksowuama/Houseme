import React from "react";
import "./Ctabutton.css"
import { useNavigate } from "react-router-dom";

const Ctabutton = (props) => {
    const navigateCta=useNavigate()
  return (
      <div className="CallToAction">
        <h3 className="ctaHeader">
          Ready to find your new home or rent your property?
        </h3>
        <p className={props.CtaSubtext}>
          Explore the best listings or share your space with someone in need.
        </p>
      <div className="Ctabuttons">
        <button onClick={()=>navigateCta("/browse")} className={props.ctaBrowse}>Browse Properties</button>
        <button onClick={()=>navigateCta("/list-property")} className={props.ctaList}>List Your Properties </button>
      </div>
    </div>
  );
};

export default Ctabutton;
