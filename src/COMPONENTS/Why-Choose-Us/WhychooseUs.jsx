import React from "react";
import "./WhychooseUs.css"
import { whyChooseUsData } from "../../assets/AssetsData";
import whyImage from "../../assets/pexels-a-darmel-7642004.webp"

const WhychooseUs = () => {
  return (
      <div className="whyChooseUs" >
        <div className="whyInfo" data-aos="fade-right">
          <ul>
            {whyChooseUsData.map((item) => (
              <li>
                <div style={{display:"flex"}}><span>{item.icon} </span> <h4>{item.title}</h4></div>
                <div>{item.description}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="whyImg" data-aos="fade-left">
            <img src={whyImage} alt="" />
        </div>
      </div>
  );
};

export default WhychooseUs;
