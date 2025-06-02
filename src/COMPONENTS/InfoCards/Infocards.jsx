import React from 'react'
import "./Infocards.css"
import { howItWorksData } from '../../assets/AssetsData'

const Infocards = ({item}) => {
  return (
   <>
    <div className="infocard" >
      <span className='icon'><i className={item.icon}></i></span>
      <h3 className='infoTitle'>{item.title}</h3>
      <p className='infoDesc'>{item.description}</p>
    </div>
   </>
  )
}

export default Infocards
