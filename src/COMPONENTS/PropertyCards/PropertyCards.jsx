import React from "react";
import "./PropertyCards.css";
import { Link} from "react-router-dom";

const PropertyCards = ({propertyCard}) => {
  return (
    <>
     <Link to={`/Details/${propertyCard.id}`} className="CardLink">
     <div className="propsCards" data-aos="zoom-in">
        <div className="imgContainer">
          <img src={propertyCard.image} alt="" />
        </div>
        <div className="titleandprice">
          <h4>{propertyCard.title}</h4>
          <h3>{propertyCard.price} <span className="currency">{propertyCard.currency}</span></h3>
          <p>{propertyCard.address}</p>
        </div>
      </div>
     </Link>
    </>
  );
};

export default PropertyCards;
