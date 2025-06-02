import React, { useContext, useEffect, useRef, useState } from "react";
import "./Navmenu.css";
import { navLinks } from "../../assets/AssetsData";
import { Link } from "react-router-dom";
import Logo from "../../assets/House_Me-removebg-preview.png";
import { useMediaQuery } from "react-responsive";
import { productContext } from "../../ReactHooksComponent/UsecontextHook";
import Userprofile from "../UserProfilebread/Userprofile";

const Navmenu = () => {
  const [navslide, setNavslide] = useState(true);
  const{activeuser}=useContext(productContext)
  const navmobile = useRef(null);
  const mobileView = useMediaQuery({ query: "(max-width: 600px)" });
  const tabletView = useMediaQuery({ query: "(min-width: 601px)" });

  useEffect(() => {
    function navInmobileview() {
      if (mobileView && window.scrollY > 0) {
        navmobile.current.classList.add("navmobile");
      } else if (tabletView && window.scrollY === 0) {
        navmobile.current.classList.remove("navmobile");
        navmobile.current.classList.remove("navTablet")
      } else if (tabletView && window.scrollY>0) {
         navmobile.current.classList.add("navTablet")
      }
      else {
        navmobile.current.classList.remove("navmobile");
      }
    }
    window.addEventListener("scroll", navInmobileview);
    return () => {
      window.removeEventListener("scroll", navInmobileview);
    };
  }, [mobileView,tabletView]);

  return (
    <nav ref={navmobile}>
      <div className="logondHeader">
        <Link to={"/"}>
          <img src={Logo} alt="" />
        </Link>
      </div>

      <i
        class="fa-solid fa-bars"
        id="NaviconOpen"
        onClick={() => setNavslide(!navslide)}
      ></i>

      <ul className={`navMenu ${navslide ? "" : "navactive"}`}>
        <div className="navslideHeader">
          <h1>House Me</h1>
          <i
            class="fa-solid fa-xmark"
            id="NaviconClose"
            onClick={() => setNavslide(true)}
          ></i>
        </div>
        {navLinks.map((item, index) => (
          <li onClick={() => setNavslide(true)}>
            <Link to={item.path} className="NavLinks">
              {item.name}
            </Link>
          </li>
        ))}
         <div className="loginstatus">
          {
           Object.keys(activeuser).length>0 ?
               <Userprofile disable/>:
             <div className="signInlogin">
          <Link to={"/login"} onClick={() => setNavslide(true)}>
            <button>login</button>
          </Link>
          <Link to={"/signup"} onClick={() => setNavslide(true)}>
            <button className="SignUpLink">Sign Up</button>
          </Link>
        </div>
          }
        </div>
      </ul>
    </nav>
  );
};

export default Navmenu;
