import React, { useContext } from 'react'
import "./HouseCategories.css"
import { productContext } from '../../ReactHooksComponent/UsecontextHook'
import { useLocation, useNavigate } from 'react-router-dom'

const HouseCategories = () => {
    const{category,properties}=useContext(productContext)
    const categorynavigate=useNavigate()

    function Propertytype(itemid){
      const propertytypes=properties.filter(proptypeid=>proptypeid.category.toLowerCase().includes(itemid.toLowerCase()))
      if(propertytypes.length===0){
        
      }
       categorynavigate("/browse",{state:{filteredProperties:propertytypes}})
    }

  return (
   <div className="HousecategoryContainer">
    <h2>Property Type</h2> <hr/>
     <div className='Housecategories'>
        {
            category.map((item)=>(
                <p onClick={()=>Propertytype(item)}>{item}</p>
            ))
        }
    </div>
   </div>
  )
}

export default HouseCategories
