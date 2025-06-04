import React, { useContext, useState } from "react";
import "./BrowseCards.css";
import { Link } from "react-router-dom";
import whatsapLogo from "../../assets/whatsappLogo.png";
import callPhone from "../../assets/phonecallblue.png";
import { productContext } from "../../ReactHooksComponent/UsecontextHook";

const BrowseCards = ({ propertyCard }) => {
  const { tenantSavedprops } = useContext(productContext);
  const [like, setlike] = useState(false);
  return (
    <>
      <div className="browsecard">
        <div className="browsecardImg">
          <Link to={`/Details/${propertyCard.id}`}>
            <img src={propertyCard.image} alt="" />
          </Link>
        </div>
        <div className="browsecardInfo">
          <div className="browsecardInfoTop">
            <div className="browsecardinfotopleft">
              <h4>{propertyCard.title}</h4>
              <p>{propertyCard.address}</p>
              <p>
                {propertyCard.details}/{propertyCard.category}
              </p>
            </div>{" "}
            <hr />
            <div className="browsecardinfotopRight">
              <h4>
                {propertyCard.currency}/{propertyCard.price}
              </h4>
              <p>{propertyCard.bedroom} bedrooms</p>
            </div>
          </div>

          <div className="browsecardInfoBottom">
            <div className="browsecradinfoBottomleft">
              <div className="landlrdProfile">
                <img src={propertyCard.landlord.image} alt="" />
                <p>{propertyCard.landlord.name}</p>
              </div>
              <p>Updated 06 May 2025, Added 23 Mar 2025</p>
            </div>
             <span
            className="likedProps"
            onClick={() => tenantSavedprops(propertyCard.id)}
          >
            <i
              className="fa-solid fa-heart" onClick={()=>setlike(!like)}
              style={{ color: `${like ? "red" : "darkgrey"}` }}
            ></i>
          </span>
            <div className="browsecardsocials">
              <a href="">
                <img src={whatsapLogo} alt="" />
              </a>
              <a href="">
                <img src={callPhone} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseCards;
