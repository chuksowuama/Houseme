import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { productContext } from "../../ReactHooksComponent/UsecontextHook";
import PropertyCards from "../PropertyCards/PropertyCards";
import "./Propertylist.css";
import SearchProperty from "../SearchPropertyComponent/SearchProperty";
import BrowseCards from "../BrowseCardsComponent/BrowseCards";
import Filteredcity from "../FilteredCities/Filteredcity";
import HouseCategories from "../HousecategoriesComponent/HouseCategories";
import Pagination from "../PaginationComponent/Pagination";
import bannerimg from "../../assets/7209248.jpg";

const Propertylist = () => {
  const { properties } = useContext(productContext);
  const location = useLocation();
  const filteredProperties = location.state?.filteredProperties;
  const [currentpage, setcurrentpage] = useState(1);
  const itemsperpage = 10;
  const[currentindexofbedroom,setcurrentindexofbedroom]=useState(1)

  // const{filteredProperties}=location.state|| {}

  const displayProperties =properties?? filteredProperties;

  const totalPages = Math.ceil(displayProperties.length / itemsperpage);
  const indexofLastitem = currentpage * itemsperpage;
  const indexofFirstItem = indexofLastitem - itemsperpage;
  const currentItems = displayProperties.slice(indexofFirstItem,indexofLastitem);
  useEffect(()=>{
    console.log(currentindexofbedroom)
  },[currentindexofbedroom])
  return (
    <>
      <h4>{displayProperties.length} properties found</h4>
      <div className="ProperlistSearchArea">
        <SearchProperty
          searchPropertyContainer="BrowseSearchContainer"
          searchBar="BrowseSearchbar"
          searchArea="BrowseSearchArea"
          filterArea="BrowseFilterArea"
          searchButton="BrowseSearchButton"
          bedroomIndex={setcurrentindexofbedroom}
          bedroom={currentindexofbedroom}
        />
      </div>
      <div>{currentindexofbedroom===2&& <p>hello this is the header</p> }</div>
      <div className="PropertyArea">
        <div className="propertyList">
          {currentItems.length > 0
            ? currentItems.map((item) => <BrowseCards propertyCard={item}/>)
            : <h1>no Poperty found</h1>}
          <Pagination
            currentpage={currentpage}
            totalPages={totalPages}
            onpagechange={(page) => setcurrentpage(page)}
          />
        </div>
        <div className="FilteredCategories">
          <Filteredcity />
          <HouseCategories />
          <div className="bannerimg">
            <img src={bannerimg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Propertylist;
