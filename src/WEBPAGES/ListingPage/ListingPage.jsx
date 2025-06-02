import React, { useContext, useEffect, useState } from "react";
import heroImg from "../../assets/HomeHerosection.webp";
import Herosection from "../../COMPONENTS/HerosectionComponent/Herosection";
import BreadCrumb from "../../COMPONENTS/BreadcrumbsComponents/BreadCrumb";
import "./ListingPage.css";
import { productContext } from "../../ReactHooksComponent/UsecontextHook";

const ListingPage = () => {
  const { properties, category, city,NewListedproperty,listedproperty,setListedProperty,activeuser} = useContext(productContext);
  const [formData, setFormData] = useState({
    id:generateUniqueId(),
    title: "",
    location: "",
    bedrooms: "",
    details: "",
    price: "",
    currency:"NGN",
    description: "",
    address: "",
    image: "",
    // area:""
  });
   useEffect(()=>{
    console.log("userid is :",generateUniqueId())
   })
   

   //here in this function we update the images in the formdata array
  function handlelistingInput(e) {
    const { name, value } = e.target;
    const file =e.target.files;
    if(name === "image"){
      const imageArray = Array.from(file).map((file)=> URL.createObjectURL(file))
      setFormData((prev)=>({...prev,[name]:imageArray}))
    }else {
       setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }
    // here we remove the image in the formdata array based on when the index is clicked
   function removeImg(removeindex){
    const newimg= formData.image.filter((_,index)=> index !== removeindex)
    setFormData((prev)=>({...prev,image:newimg}))
   }

 //function to generate a unique ID
     function generateUniqueId(){
   const met= Math.ceil(Math.random()*10)
    return `ng-prop-${met}`+ Math.floor(Math.random()*100)
  }
    
  function submitListingdetails(e) {
    e.preventDefault()
    if(formData.title || formData.location || formData.price || formData.image.length !== 0){
      const landlord={
      name: activeuser.FName+" "+activeuser.LName,
      image: activeuser.image,
      email:activeuser.Email,
      phone:activeuser.phoneNumber,

    }
    const merge={...formData,landlord:landlord,id:generateUniqueId() } // here we are merging the listing form with the activeuser details 
      NewListedproperty(merge)
      generateUniqueId()
      alert("your property has been submitted")
    }else{
      alert("you cant submit an empty property form")
    }
  }

  return (
    <>
      <div className="list-property-container">
        {/* Header Section */}
        <header className="list-property-header">
          <div className="container">
            <h1>List Your Property With Us</h1>
            <p className="subtitle">
              Reach thousands of potential renters or buyers
            </p>
          </div>
        </header>

        {/* Progress Indicator */}
        <div className="progress-indicator">
          <div className="container">
            <ul className="progress-steps">
              <li className="active">Property Details</li>
              <li>Photos</li>
              <li>Pricing</li>
              <li>Review</li>
            </ul>
          </div>
        </div>

        {/* Main Form Section */}
        <main className="property-form-container">
          <div className="container">
            <form className="property-form">
              {/* Basic Information Section */}
              <section className="form-section">
                <h2>Basic Information</h2>
                 <div className="form-section">
                  <div className="form-group">
                    <label htmlFor="propertyTitle">property Title </label>
                    <input type="text" name="title" id="propertyTitle" value={formData.title} onChange={handlelistingInput}/>
                  </div>
                    <div className="form-group">
                    <label htmlFor="">Details</label>
                    <input
                      type="text"
                      id="details"
                      name="details"
                      placeholder="property details"
                      value={formData.area}
                      onChange={handlelistingInput}
                    />
                  </div>
                  </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="propertyType">Property Type</label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handlelistingInput}
                    >
                      <option value="">Select property type</option>
                      {category.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handlelistingInput}
                    >
                      <option value="">Select Location</option>
                      {city.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="area">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="property address"
                      value={formData.address}
                      onChange={handlelistingInput}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="bedrooms">Bedrooms</label>
                    <input
                      type="number"
                      id="bedrooms"
                      name="bedrooms"
                      min="1"
                      placeholder="0"
                      value={formData.bedrooms}
                      onChange={handlelistingInput}
                    />
                  </div>
                </div>
              </section>

              {/* Description Section */}
              <section className="form-section">
                <h2>Description</h2>
                <div className="form-group">
                  <label htmlFor="description">Property Description</label>
                  <textarea
                    id="description"
                    name="description"
                    rows="5"
                    placeholder="Describe your property in detail..."
                    value={formData.description}
                    onChange={handlelistingInput}
                  ></textarea>
                  <p className="hint">
                    Minimum 50 characters. Highlight unique features.
                  </p>
                </div>
              </section>

              {/* Photos Section */}
              <section className="form-section">
                <h2>Photos</h2>
                <div className="photo-upload-container">
                  <div className="upload-area">
                    <input
                      type="file"
                      id="propertyImages"
                      name="image"
                      accept="image/*"
                      style={{display:"none"}}
                      onChange={handlelistingInput}
                    />
                    <label htmlFor="propertyImages">
                      <div className="upload-content">
                        <i className="fa-solid fa-upload"></i>
                        <p>Drag & drop photos here or click to browse</p>
                        <p className="hint">
                          Upload at least 5 photos (max 20)
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="photo-preview">
                     {/* Preview of uploaded images would go here */}
                     <h1>{formData.image.length>0?"Image preview":""}</h1>
                     <div className="photoPriviewContainer">
                       {
                      formData.image.length >0 && formData.image.map((image,index)=>
                      <div key={index} className="previewImg">
                        <img src={image} alt="" />
                        <button onClick={()=>removeImg(index)}><i className="fa fa-xmark" id="cancelImg"></i></button>
                      </div>
                    )
                    }
                     </div>
                  </div>
                </div>
              </section>

              {/* Pricing Section */}
              <section className="form-section">
                <h2>Pricing</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <div className="price-input">
                      <input
                        type="text"
                        id="price"
                        name="price"
                        placeholder="0.00"
                        value={formData.price}
                        onChange={handlelistingInput}
                      />
                      <select className="price-period"
                       onChange={handlelistingInput}
                       value={formData.currency}
                       name="currency"
                       id="currency"
                      >
                        <option value="NGN">NGN</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                      </select>
                    </div>
                  </div>
                </div>
              </section>

              {/* Form Actions */}
              <div className="form-actions">
                <button type="button" className="btn-secondary">
                  Save Draft
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  onClick={submitListingdetails}
                >
                  Submit Property
                </button>
              </div>
            </form>

            {/* Sidebar with Tips */}
            <aside className="form-sidebar">
              <div className="sidebar-card">
                <h3>Listing Tips</h3>
                <ul className="tips-list">
                  <li>Use high-quality, well-lit photos</li>
                  <li>Be accurate with your property details</li>
                  <li>Highlight unique features</li>
                  <li>Set a competitive price based on market research</li>
                  <li>Respond quickly to inquiries</li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3>Why List With Us?</h3>
                <ul className="benefits-list">
                  <li>Reach thousands of potential tenants/buyers</li>
                  <li>Professional listing presentation</li>
                  <li>Dedicated support team</li>
                  <li>Marketing across multiple platforms</li>
                  <li>Secure payment processing</li>
                </ul>
              </div>
            </aside>
          </div>
        </main>

        {/* Footer CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>Need Help Listing Your Property?</h2>
            <p>
              Our professional team can assist you with photography, pricing,
              and marketing.
            </p>
            <button className="btn-outline">Contact Our Support Team</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ListingPage;
