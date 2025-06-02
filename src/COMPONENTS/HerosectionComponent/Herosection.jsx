import React from "react";
import "./Herosection.css";
import SearchProperty from "../SearchPropertyComponent/SearchProperty";

const Herosection = (props) => {
  return (
    <>
      <div className={props.heroContainer}>
        <img src={props.heroImg} alt="" />
        <div className={props.BigHeaderline}>
          <h1>{props.headline}</h1>
          <h3>{props.subHeadline}</h3>
          <div className={props.searcharea}>
            <SearchProperty
              searchPropertyContainer="searchPropertyContainer"
              searchBar="searchBar"
              searchArea="searchArea"
              filterArea="filterArea"
              searchButton="searchButton "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
