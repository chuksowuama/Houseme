import React from 'react'
import "./Howitworks.css"
import { howItWorksData } from '../../assets/AssetsData'
import Infocards from '../InfoCards/Infocards'

const Howitworks = () => {
  return (
    <div>
      <div className="howItworks">
     {
      howItWorksData.map((item)=>(
        <Infocards item={item}/>
      ))
     }
   </div>
    </div>
  )
}

export default Howitworks
