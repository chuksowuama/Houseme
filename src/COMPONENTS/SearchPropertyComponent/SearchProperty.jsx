import React, { useContext, useEffect, useRef, useState } from "react";
import "./SearchProperty.css";
import { productContext } from "../../ReactHooksComponent/UsecontextHook";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const SearchProperty = (props) => {
  const { properties } = useContext(productContext);
  const [filters, setFilters] = useState({
    location: "",
    price: "",
    bedroom: "",
  });
  const { bedroomIndex, bedroom } = props;
  const [filteredProperties, setfilteredProperties] = useState([]);
  const navigate = useNavigate();
  const mobileView = useMediaQuery({ query: "(max-width: 600px)" });
  const searchref = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const filteredprops = properties.filter((property) => {
      const matchedLocation = filters.location
        ? property.location
            .toLowerCase()
            .includes(filters.location.toLowerCase())
        : true;
      const matchedPriceRange = filters.price
        ? property.price >= parseInt(filters.price.split("-")[0]) &&
          property.price <= parseInt(filters.price.split("-")[1])
        : true;
      const matchedbedRooms = filters.bedroom
        ? property.bedroom === parseInt(filters.bedroom)
        : true;
      if (filters.bedroom === "1") {
        bedroomIndex(1);
        console.log("yes it number 1");
      }
      if (filters.bedroom === "2") {
        bedroomIndex(2);
        console.log("yes it number 2");
      }
      if (filters.bedroom === "3") {
        bedroomIndex(3);
        console.log("yes it number 3");
      }
      return matchedLocation && matchedPriceRange && matchedbedRooms;
    });
    // setfilteredProperties(filteredprops)
    navigate("/browse", { state: { filteredProperties: filteredprops } });
  }

  return (
    <>
      <div className={props.searchPropertyContainer} ref={searchref}>
        <form action="" className={props.searchBar} onSubmit={handleSubmit}>
          <div className={props.searchArea}>
            <input
              type="text"
              name="location"
              id=""
              placeholder="location"
              value={filters.location}
              onChange={handleChange}
            />
          </div>
          <div className={props.filterArea}>
            <select
              name="price"
              value={filters.price}
              onChange={handleChange}
              className="pricedrop"
            >
              <option value="">Price Range</option>
              <option value="100000-500000">$100000 - $500000</option>
              <option value="600000-1200000">$600000 - $1200000</option>
            </select>
            <select
              name="bedroom"
              value={filters.bedroom}
              onChange={handleChange}
            >
              <option value="">Bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4 Bedrooms</option>
            </select>
            <input type="submit" name="" id="searchButton" />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchProperty;
