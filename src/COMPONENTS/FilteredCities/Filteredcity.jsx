import React, { useContext, useEffect } from 'react'
import "./Filteredcity.css"
import { productContext } from '../../ReactHooksComponent/UsecontextHook'
import { useNavigate } from 'react-router-dom'

const Filteredcity = () => {
    const{city,properties}=useContext(productContext)
    const filteredcitynavigate=useNavigate()

    function handlecitychange(cityItem){
        const filteredprops=properties.filter((propeerty)=>
          propeerty.location.toLowerCase().includes(cityItem.toLowerCase())
    )
        if(filteredprops.length===0){
            alert("no properties found")
        }
        filteredcitynavigate("/browse",{state:{filteredProperties:filteredprops}})
    }

  return (
    <div className='filteredcityContainer'>
    <h2>Explored states</h2> <hr />
     <div className="filteredcity">
     {
        city.map((item)=>(
            <p onClick={()=>handlecitychange(item)}>{item}</p>
        ))
      }
     </div>
    </div>
  )
}

export default Filteredcity
