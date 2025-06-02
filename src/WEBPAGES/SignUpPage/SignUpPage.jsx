import React, { useContext, useEffect, useRef, useState } from "react";
import "./SignUpPage.css";
import Herosection from "../../COMPONENTS/HerosectionComponent/Herosection";
import heroImg from "../../assets/HomeHerosection.webp";
import { Form, useNavigate } from "react-router-dom";
import { productContext } from "../../ReactHooksComponent/UsecontextHook";

const SignUpPage = () => {
  const { userdata, UserAuthenticationLogin } = useContext(productContext);
  const [status, setStatus] = useState("Tenants");
  const showpass = useRef(null);
  const navigatetologin=useNavigate(null)
  const [FormDetails, setFormDetails] = useState({
    FName: "",
    LName: "",
    phoneNumber: "",
    Email: "",
    password: "",
    profilestatus: status,
  });
  const [errorInput, setErrorinput] = useState({});
  const [showpasswrd, setShowpasswrd] = useState(false);

  function signupValidation() {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    const signupError = {};

    if (!FormDetails.FName.trim()) {
      signupError.FName = "please input your name";
    }
    if (!FormDetails.LName.trim()) {
      signupError.LName = "please input your last name";
    }
    if (!FormDetails.phoneNumber.trim()) {
      signupError.phoneNumber = "please input your phone number";
    } else if (FormDetails.phoneNumber.length !== 11) {
      signupError.phoneNumber = "phone number should be 11 digits";
    }
    if (!FormDetails.Email.trim()) {
      signupError.Email = "please input your email";
    } else if (!emailRegex.test(FormDetails.Email)) {
      signupError.Email = "please input a valid email address";
    }
    if (!FormDetails.password.trim()) {
      signupError.password = "please input your password";
    } else if (!paswd.test(FormDetails.password)) {
      signupError.password = "please input a valid password";
    }
    return signupError;
  }

  function handleFormInputchange(e) {
    let targ = e.target;
    const { name, value } = targ;
    setFormDetails((prev) => ({ ...prev, [name]: value }));
  }

  function hanleSIgnupsubmit(e) {
    e.preventDefault();
    const formerror = signupValidation();
    if (Object.keys(formerror).length === 0) {
      UserAuthenticationLogin(FormDetails);
      console.log(FormDetails)
      navigatetologin("/login")
    } else {
      setErrorinput(formerror);
    }
  }

  function handleshowpasswrd() {
    setShowpasswrd((prev) => !prev);
  }

  useEffect(() => {
    setFormDetails((prev) => ({ ...prev, profilestatus: status }));
  }, [status]);
  return (
    <>
      <Herosection
        heroContainer="OtherheroContainer"
        BigHeaderline="otherBigHeaderline"
        heroImg={heroImg}
        headline="Sign up"
        searcharea="removeSearchbar"
      />
      <div className="signupcontainer">
        <h1 className="sectitle">
          Register on HouseMe Nigeria for Exclusive Benefits
        </h1>
        <p>
          already have account? <a href="">Log in</a>{" "}
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
        <form
          action=""
          className="signupForm"
          onChange={handleFormInputchange}
          onSubmit={hanleSIgnupsubmit}
        >
          <div className="userfullname">
            <div className="firstname">
              <input
                type="text"
                name="FName"
                id=""
                placeholder="First Name"
                value={FormDetails.FName}
              />{" "}
              <br />
              {errorInput.FName && (
                <span className="errortext">{errorInput.FName}</span>
              )}
            </div>
            <label htmlFor="">
              <input
                type="text"
                name="LName"
                id=""
                placeholder="Last Name"
                value={FormDetails.LName}
              />
              <br />
              {errorInput.LName && (
                <span className="errortext">{errorInput.LName}</span>
              )}
            </label>
          </div>
          <label htmlFor="">
            <input
              type="email"
              name="Email"
              id=""
              placeholder="Email address"
              value={FormDetails.Email}
            />{" "}
            <br />
            {errorInput.Email && (
              <span className="errortext">{errorInput.Email}</span>
            )}
          </label>
          <br />
          <label htmlFor="">
            <input
              type="tel"
              name="phoneNumber"
              id=""
              placeholder="Phone Number"
              value={FormDetails.phoneNumber}
            />{" "}
            <br />
            {errorInput.phoneNumber && (
              <span className="errortext">{errorInput.phoneNumber}</span>
            )}
          </label>
          <div className="landorOrtenent">
            <button
              type="button"
              onClick={() => setStatus("Landlord")}
              className={status === "Landlord" ? "activestatus" : ""}
            >
              Landlord
            </button>
            <button
              type="button"
              onClick={() => setStatus("Tenants")}
              className={status === "Tenants" ? "activestatus" : ""}
            >
              Tenant
            </button>
          </div>
          <label htmlFor="">
            {" "}
            Create Password <br />
            <input
              type={showpasswrd ? "password" : "text"}
              name="password"
              id=""
              placeholder="Password"
              value={FormDetails.password}
              ref={showpass}
            />
            <i
              className={
                showpasswrd ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
              }
              onClick={handleshowpasswrd}
              id="showpassword"
            ></i>
            <br />
            {errorInput.password && (
              <span className="errortext">{errorInput.password}</span>
            )}
          </label>
          <div className="registerButton">
            <input type="submit" name="" id="" />
            <p>
              by registering you accept our <a href="">Terms of use</a>and{" "}
              <a href="">Privacy Policy</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
