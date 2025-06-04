import React, { useContext, useEffect, useState } from "react";
import "./LoginPage.css";
import heroImg from "../../assets/HomeHerosection.webp";
import formImg from "../../assets/hands-agent-client-shaking-hands-after-signed-contract-buy-new-apartment.jpg";
import Herosection from "../../COMPONENTS/HerosectionComponent/Herosection";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../COMPONENTS/BreadcrumbsComponents/BreadCrumb";
import { productContext } from "../../ReactHooksComponent/UsecontextHook";

const LoginPage = () => {
  const { userdata, protectedPage,updatedInfo } = useContext(productContext);
  const navigatetoDashboard = useNavigate();
  const [FormDetails, setFormDetails] = useState({
    Email: "",
    password: "",
  });
  const [errorInput, setErrorinput] = useState({});

  function handleFormchange(e) {
    const { name, value } = e.target;
    setFormDetails({ ...FormDetails, [name]: value });
  }

  function validation() {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    const formError = {};

    if (!FormDetails.Email) {
      formError.Email = "input your Email";
    } else if (!emailRegex.test(FormDetails.Email)) {
      formError.Email = "please input a valid Email address";
    }
    if (!FormDetails.password) {
      formError.password = "input your password";
    } else if (!paswd.test(FormDetails.password)) {
      formError.password = "please input a valid password";
    }

    return formError;
  }


  function submitLoginForm(e) {
    e.preventDefault();
    const loginuserdata = JSON.parse(localStorage.getItem("Loginuserdata")|| "[]"); //this is incase i want to store userInformation into local storage
    // let allusers = JSON.parse(localStorage.getItem("alluser"))
    console.log(loginuserdata)
    const formerror = validation();
    if (Object.keys(formerror).length === 0) {
      // let matcheduser=allusers.find(user=> user.Email === FormDetails.Email && user.password === FormDetails.password)
      let matcheduser=userdata|| loginuserdata
       if(matcheduser && matcheduser.Email===FormDetails.Email && matcheduser.password === FormDetails.password){
        protectedPage(matcheduser)
        localStorage.setItem("activeUser",JSON.stringify(matcheduser))
        // localStorage.setItem("alluser",JSON.stringify(matcheduser))
        if(matcheduser.profilestatus === "Landlord"){
           navigatetoDashboard("/LandlordDash");
           console.log("landlord logged in")
        }else{
           navigatetoDashboard("/TenantsDashboard");
            console.log("Tenants logged in")
        }
       }
    }
    else {
      setErrorinput(formerror);
    }
  } 

;

return (
  <>
    <Herosection
      heroContainer="OtherheroContainer"
      BigHeaderline="otherBigHeaderline"
      heroImg={heroImg}
      headline="Login"
      searcharea="removeSearchbar"
    />
    <BreadCrumb />
    <div className="signupcontainer">
      <h1 className="sectitle">Log into your Account</h1>
      <p>
        No Account? <a href="">Register</a>{" "}
      </p>
      <div className="emailOrfacebookAlt">
        <a href="">
          {" "}
          <i class="fa-brands fa-google"></i> Google
        </a>
        <a href="">
          {" "}
          <i class="fa-brands fa-facebook"></i> Facebook
        </a>
      </div>
      <p className="horitext">
        <hr />
        or continue with your email
        <hr />
      </p>
      <form action="" className="signupForm" onSubmit={submitLoginForm}>
        <input
          type="email"
          name="Email"
          id=""
          placeholder="Email address"
          value={FormDetails.Email}
          onChange={handleFormchange}
        />{" "}
        <br />
        {errorInput.Email && (
          <span className="errortext">{errorInput.Email}</span>
        )}
        <br />
        <label htmlFor="">
          <br />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
            value={FormDetails.Password}
            onChange={handleFormchange}
          />{" "}
          <br />
          {errorInput.Password && (
            <span className="errortext">{errorInput.Password}</span>
          )}
        </label>
        <div className="registerButton">
          <p>
            <a href="">Forgot password</a>
          </p>
          <input type="submit" name="" id="" />
        </div>
      </form>
    </div>
  </>
);
}
export default LoginPage;
