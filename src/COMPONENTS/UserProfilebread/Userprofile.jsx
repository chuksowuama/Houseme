import React, { useContext, useEffect, useRef, useState } from "react";
import "./Userprofile.css";
import { productContext } from "../../ReactHooksComponent/UsecontextHook";
import { Link } from "react-router-dom";

const Userprofile = ({disable=false}) => {
  const { setUserdata, setactiveuser, activeuser } = useContext(productContext);
  const profileinput =useRef(null)
  const [profileImage, setprofileImage]= useState("/landlordavatar.jpg");
  function handlechangeavatar(e) {
    const file = e.target.files[0];
  if (!file) return; // If no file selected, do nothing

  const reader = new FileReader(); // Helps read the file
  reader.onload = (event) => { // Runs when file is loaded
    const img = new Image(); // Creates an HTML image element
    img.onload = () => { // Runs when the image is fully loaded
      // Resize the image using a canvas
      const canvas = document.createElement('canvas');
      const maxWidth = 750; // Maximum width after resizing
      const maxHeight = 750; // Maximum height after resizing
      let width = img.width; // Original width
      let height = img.height; // Original height

      // Adjust width & height while keeping proportions
      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }

      // Set canvas size to the new dimensions
      canvas.width = width;
      canvas.height = height;
      
      // Draw the resized image on the canvas
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      // Convert canvas to a data URL (usable in <img>)
      const resizedImage = canvas.toDataURL('image/jpeg');
      setprofileImage(resizedImage); // Update profile image
       const updatedUser = {...activeuser, image:resizedImage}
       console.log(updatedUser)
      setactiveuser(updatedUser) //update active user with new image
       localStorage.setItem("Loginuserdata",JSON.stringify(updatedUser))// save the updated user to  local storage
       localStorage.setItem("activeUser",JSON.stringify(updatedUser))
    };
    img.src = event.target.result; // Load the image
  };
  reader.readAsDataURL(file); // Read the file as a data URL
  }


  return (
    <div className="userprofile">
        <div className="avartarContainer" onClick={()=>{if(!disable)profileinput.current.click()}}>
          <img src={activeuser.image||profileImage} alt="User profile" className="avatar" />
          <input
            type="file"
            name="Image"
            id=""
            style={{ display: "none" }}
            onChange={handlechangeavatar}
            accept="image/*"
             ref={profileinput}
          />
        </div>
       <Link
        to={
          activeuser.profilestatus === "Landlord"
            ? "/LandlordDash"
            : "/TenantsDashboard"
        }
        className="userprofilename"
      >
      <span>{activeuser.FName}</span>
        </Link>
    </div>
  );
};

export default Userprofile;
