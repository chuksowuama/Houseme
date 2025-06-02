import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { productContext } from './ReactHooksComponent/UsecontextHook'


const ProtectedRoute = ({children,allowedStatus}) => {
    // const activeUser=JSON.parse(localStorage.getItem("activeUser"))

    const{activeuser}=useContext(productContext)
    console.log(activeuser)
     
    if(!activeuser){
     alert("you are not allowed to access this page")
     return <Navigate to={"/login"}/>
    }
    if(allowedStatus && !allowedStatus.includes(activeuser.profilestatus)){
        alert("this page is reserved for just landlord")
        return <Navigate to={"/"}/>
    }
    // if(activeuser.profilestatus ==="Tenants"){
    //     alert("this page is reserved for just landlord")
    // }
    return children
}

export default ProtectedRoute
