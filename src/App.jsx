import { Route, Routes } from "react-router-dom"
import Navmenu from "./COMPONENTS/NavigationComponent/Navmenu"
import HomePage from "./WEBPAGES/HomePage/HomePage"
import LandlordDash from "./WEBPAGES/LandLordDashboard/LandlordDash"
import TenantsDashboard from "./WEBPAGES/TenantsDashBoard/TenantsDashboard"
import ListingPage from "./WEBPAGES/ListingPage/ListingPage"
import SignUpPage from "./WEBPAGES/SignUpPage/SignUpPage"
import LoginPage from "./WEBPAGES/LoginPage/LoginPage"
import BrowsePage from "./WEBPAGES/BrowsePage/BrowsePage"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import Footer from "./COMPONENTS/FooterComponent/Footer"
import Details from "./WEBPAGES/DetailPage/Details"
import ProtectedRoute from "./ProtectedRoute"

function App() {
  
  useEffect(()=>{
   Aos.init({duration:2000})
  },[])

  return (
    <>
     <div className="App">
     <Navmenu/>
     <Routes>
      {/* ----------------Navlist---------------------- */}
      <Route path="/" element={<HomePage/>}/>
      <Route path= "/browse" element={<BrowsePage/>}/>
      <Route path="/list-property" element={<ProtectedRoute allowedStatus={['Landlord']}><ListingPage/></ProtectedRoute>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path= "/login" element={<LoginPage/>}/>
      <Route path= "/Details/:id" element={<Details/>}/>
      {/* ----------------Tenanst menu------------- */}
      <Route path="/TenantsDashboard" element={<TenantsDashboard/>}/>
      {/*---------------- Landlord Menu------------- */}
      <Route path="/LandlordDash" element={<LandlordDash/>}/>
     </Routes>
     <Footer/>
     </div>
    </>
  )
}

export default App
