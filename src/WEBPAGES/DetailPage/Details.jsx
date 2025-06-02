import React, { useContext, useEffect, useState } from "react";
import "./Details.css";
import { Link, useParams } from "react-router-dom";
import { productContext } from "../../ReactHooksComponent/UsecontextHook";
import BreadCrumb from "../../COMPONENTS/BreadcrumbsComponents/BreadCrumb";
import Herosection from "../../COMPONENTS/HerosectionComponent/Herosection";
import heroImg from "../../assets/HomeHerosection.webp";

const Details = () => {
  const { properties, recommendedProperties } = useContext(productContext);
  const [propertyDetails, setPropertyDetails] = useState([]);
  const[textareavalue,settextareaValue]=useState("")
  const { id } = useParams();

  useEffect(() => {
    const detail = properties.find((propsId) => propsId.id === id);
    console.log(detail);
    if (detail) {
      setPropertyDetails([detail]);
    } else {
      setPropertyDetails([]);
    }
  }, [id, properties]);

  useEffect(()=>{
     propertyDetails.map((item)=>{
       const message=`Hello ${item.landlord.name}  INTERNATIONAL I would like to check the availability for ${item.title},₦ ${item.price}/year Thank you`
       console.log(message)
       settextareaValue(message)
  })
  },[propertyDetails])
  return (
    <div>
      <Herosection
        heroContainer="OtherheroContainer"
        BigHeaderline="otherBigHeaderline"
        heroImg={heroImg}
        headline="Properties for Sale/Rent"
        searcharea="removeSearchbar"
      />
      <BreadCrumb />
      <div className="detailsgrid">
        <div className="detailsContainer">
          {propertyDetails.length > 0
            ? propertyDetails.map((item, index) => (
                <div className="leftdetailcont">
                  <h3>{item.title}</h3>
                  <div className="detailsImg">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="priceandinfo">
                    <h3>
                      {item.currency}
                      {item.price}
                    </h3>
                    <p>{item.details}</p>
                  </div>{" "}
                  <hr />
                  <div className="propertyAdress">
                    <h4>property Address</h4>
                    <p>
                      <i class="fa-solid fa-location-dot"></i> {item.address}
                    </p>
                  </div>{" "}
                  <hr />
                  <ul className="safetyTips">
                    <h3>Safety Tips</h3>
                    <li>
                      Do not make any inspection fee without seeing the agent
                      and property.
                    </li>
                    <li>
                      Only pay Rental fee, Sales fee or any upfront payment
                      after you verify the Landlord.
                    </li>
                    <li>Ensure you meet the Agent in an open location.</li>
                    <li>
                      The Agent does not represent PropertyPro and PropertyPro
                      is not liable for any monetary transaction between you and
                      the Agent.
                    </li>
                  </ul>
                  <div className="description">
                    <h3>Description</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))
            : console.log("no property")}
        </div>
        <div className="contactArea">
          {propertyDetails.length > 0
            ? propertyDetails.map((item) => (
                <div className="sidebar">
                  <div className="landlordContainer">
                    <div className="profileArea">
                      <div className="landlorimg">
                        <img src={item.landlord.image} alt="" />
                        <p>landlord</p>
                      </div>
                      <div className="lanlordpersonalinfo">
                        <p>{item.landlord.name}</p>
                        <p>{item.landlord.email}</p>
                      </div>
                    </div>
                    <button>
                      <a href={item.landlord.phone}>{item.landlord.phone}</a>
                    </button>
                    <button>
                      <a href="">whatsapp</a>
                    </button>
                  </div>

                  <div className="sideformContainer">
                    <form action="" className="form">
                      <input type="text" name="" id="" placeholder="Name" />
                      <br />
                      <input type="email" name="" id="" placeholder="Email" />
                      <br />
                      <input type="tel" name="" id="" placeholder="phone" />
                      <br />
                      <textarea name="" id="" className="textarea" onChange={(e)=>settextareaValue(e.target.value)} value={textareavalue}></textarea>
                      <div className="formButton">
                        <button>
                          {" "}
                          <a href="">Enquiry</a>
                        </button>
                        <button>
                          {" "}
                          <a href="">whatsapp</a>
                        </button>
                      </div>
                      <p className="termsnadcondition">
                        By continuing, you agree to propertypro.ng's{" "}
                        <a href=""> Terms and Conditions </a>&{" "}
                        <a href="">Privacy Policy</a>.
                      </p>
                    </form>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
      <div className="recommendedContainer">
        <h1>Recommended properties</h1>
        <div className="recommendedProps">
          {recommendedProperties.map((item) => (
            <Link to={`/Details/${item.id}`} className="CardLink">
              <div className="recommendedCard">
                <div className="imgContainer">
                  <img src={item.image} alt="" />
                </div>
                <div className="titleandprice">
                  <h4>{item.title}</h4>
                  <h3>
                    {item.price}{" "}
                    <span className="currency">{item.currency}</span>
                  </h3>
                  <p>{item.address}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
