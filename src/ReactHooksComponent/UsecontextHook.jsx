import React, { createContext, useEffect, useState } from "react";
import { data } from "react-router-dom";

export const productContext = createContext(null);

const UsecontextHook = (props) => {
  const [properties, setproperties] = useState([]);
  const [FeaturedProperties, setFeaturedProps] = useState([]);
  const [recommendedProperties, setRecommendedProperties] = useState([]);
  const [category, setCategory] = useState([]);
  const [city, setcity] = useState([]);
  const [error, setError] = useState(null);
  const [userdata, setUserdata] = useState();
  const [listedproperty, setListedProperty] = useState([]);
  const [activeuser, setactiveuser] = useState([]);
  const [tenantsavedProperty, setTenantsavedProperty] = useState({});
  const [tenantsApplication, setTenantsApplication] = useState({});
  const[applicationtabinfo,setapplicationtabinfo]=useState({})

  async function fetchProperties() {
    try {
      const response = await fetch("/deepseek_json_20250509_29ab39 (1).json");
      const data = await response.json();
      setcity(data.metadata.cities);
      setCategory(data.metadata.categories);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    async function mergedproperties() {
      try {
        const response = await fetch("/deepseek_json_20250509_29ab39 (1).json");
        const data = await response.json();
        const mergedListings = [...data.listings, ...listedproperty];
        setproperties(mergedListings);
      } catch (error) {
        setError(error);
      }
    }
    mergedproperties();
  }, [listedproperty]);

  useEffect(() => {
    console.log("properties fetched", properties);
  }, [properties]);

  //signupfor authentification---------//
  function UserAuthenticationLogin(newUser) {
    setUserdata(newUser);
    localStorage.setItem("Loginuserdata",JSON.stringify(newUser))
     const allusers=JSON.parse(localStorage.getItem("alluser")|| "[]")

     let finalUserlist;
     const thisUserexiist=allusers.some(user=>user.Email===newUser.Email)
     if(thisUserexiist){
       finalUserlist=allusers.map(user=>
      user.Email === newUser.Email?newUser : user
     ); 
     }else{
      finalUserlist=[...allusers,newUser]
     }
     localStorage.setItem("alluser",JSON.stringify(finalUserlist))
     console.log(finalUserlist)
  }

  function UserAuthenticationLogOut(userdata) {
    setUserdata(null);
    // localStorage.removeItem("Loginuserdata");
  }
  //--------------------//
  //protected rooute this make sure only users with status landlord can access this page

  function protectedPage(user) {
    setactiveuser(user);
  }

 useEffect(()=>{
   const savedactiveuser= JSON.parse(localStorage.getItem("activeUser")) 
   if(savedactiveuser){
    setactiveuser(savedactiveuser)
   }
 },[])

console.log("this is the updated: ",activeuser)
  //featured property for the featured component------
  useEffect(() => {
    const FeaturedProps = properties.slice(10, 16);
    setFeaturedProps(FeaturedProps);
  }, [properties]);

  //i was trying to generate random properties that can be reccommended fot the client//
  useEffect(() => {
    if (properties.length >= 4) {
      const randomproperties = properties.sort(() => 0.5 - Math.random());
      const recommended = randomproperties.slice(0, 3);
      setRecommendedProperties(recommended);
    }
  }, [properties]);

  //i am tring to store the new property the client just listed//
  function NewListedproperty(newproperty) {
    setListedProperty((prev) => [...prev, newproperty]);
  }
  //function to save selected property id
  function tenantSavedprops(PropId) {
    if (!tenantsavedProperty[PropId]) {
      setTenantsavedProperty((prev) => ({ ...prev, [PropId]: 1 }));
    } else {
      setTenantsavedProperty((prev) => ({
        ...prev,
        [PropId]: prev[PropId] - 1,
      }));
    }
  }
  function Applicationtabfunction(propID) {
    if (!tenantsApplication[propID]) {
      setTenantsApplication((prev) => ({ ...prev, [propID]: 1 }));
    }
  }

  useEffect(()=>{
    const applicationstab=properties.filter((property)=> tenantsApplication.hasOwnProperty(property.id)).map((property)=>({
        id: property.id,
        title: property.title,
        status: "pending",
        Date: new Date().toLocaleDateString(),
    }))
    setapplicationtabinfo(applicationstab)
  },[tenantsApplication,properties])
  const ContextValue = {
    properties,
    FeaturedProperties,
    category,
    city,
    recommendedProperties,
    userdata,
    setUserdata,
    UserAuthenticationLogin,
    UserAuthenticationLogOut,
    NewListedproperty,
    setListedProperty,
    listedproperty,
    protectedPage,
    activeuser,
    setactiveuser,
    tenantSavedprops,
    tenantsavedProperty,
    tenantsApplication,
    Applicationtabfunction,
    applicationtabinfo,
  };

  return (
    <productContext.Provider value={ContextValue}>
      {props.children}
    </productContext.Provider>
  );
};

export default UsecontextHook;
