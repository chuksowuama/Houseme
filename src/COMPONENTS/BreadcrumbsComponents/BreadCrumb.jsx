import React, { useContext, useEffect } from "react";
import "./BreadCrumb.css";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import { productContext } from "../../ReactHooksComponent/UsecontextHook";

const BreadCrumb = () => {
  const { properties } = useContext(productContext);
  const Location = useLocation();
  const { id } = useParams(); //this block of code is used to gget the  id of the property from the url


  const pathname = Location.pathname.split("/").filter((x) => x);//this block of code is used to slit the current url location into an array,and uses filter(x=>x) to remove empty string from the array, the array look like this ["details", "ng-prop-001"].console.log(pathname) and check
  return (
    <div className="BreadcrumbConatiner">
      <Link to="/" className="breadcrumblink">Home</Link> 
      {pathname.map((item, index) => {
        const to = `/${pathname.slice(0, index + 1).join("/")}`; //this creates the path for the breadcrumb,0 is the first index of the array,index+1 increases the index of the array by one,and join them using /,console.log(to), and check what is going on
         // this block of the code creates the path for the breadcrumb,this pat
        const isLast = index === pathname.length - 1;// this block check if the current index if the last index of the array, so it wont create a link for the last index of the array
       
          
        const displayItemname=item===id && properties?properties.find(pitem=>pitem.id===id)?.title:item.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());// this block of code is used to get the name of the property from the id

        return(
           <span>
            <span> &#62; </span> 
            {
              isLast?<span>{displayItemname}</span>:// this checks if the current index is the last index of  the array, if it is it will not create a link for the last index of the array
              to==="/Details"? <Link to={"/browse"} className="breadcrumblink">browse</Link>:// this code check if to===details,if it is, it will replace it to===="browse"
                 <Link to={to} className="breadcrumblink">{displayItemname}</Link>// this block create a link for the breadcrumb except the current index of the array
               }
           </span>
        )
      })}
    </div>
  );
};

export default BreadCrumb;
