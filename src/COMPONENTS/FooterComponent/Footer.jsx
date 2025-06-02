import React from 'react'
import "./Footer.css"
import { navLinks } from '../../assets/AssetsData'
import {useNavigate } from 'react-router-dom'

const Footer = () => {
    const footerNavigate=useNavigate()
  return (
   <footer>
     <div className="footer-container">
        <div className="footer-logo">
          <h2>HouseMe</h2>
          <p>Connecting tenants and landlords directly — no agents, no hassle.</p>
          <div className="socials">
            <a href="/">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
           {
            navLinks.slice(0,4).map((links,index)=>(
                <li key={index} onClick={()=>footerNavigate(links.path)}>
                    <p>{links.name}</p>
                </li>
            ))
           }
           </ul>
           
        </div>

        <div className="footer-column">
          <h3>For Users</h3>
          <ul>
            <li>Sign Up as Tenant</li>
            <li>Sign Up as Landlord</li>
            <li>Login</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: support@HouseMe.com</p>
          <p>Phone: 08137577286</p>
          <p>23A Admiralty Way, Lekki Phase 1, Lagos</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HouseMe. All rights reserved.</p>
      </div>
   </footer>
  )
}

export default Footer
