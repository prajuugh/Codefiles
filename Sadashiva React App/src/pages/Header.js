import react from 'react'
import { Link } from 'react-router-dom';
import {  } from "./css pages/Header.css";
import {  } from "./css pages/utilites.css";


export function Header({ header }) {
  return (
    <>
    <nav className="navigation aninav">
  <div className="nav">
    <Link to="/"><span><img src="/images/logo.png" width="50px" alt="" /></span></Link>
    <h3 className="heading1 textcol">Sadashiva Printing Press</h3>
    <h3 className="heading2 textcol">ಸದಾಶಿವ ಪ್ರಿಂಟಿಂಗ್ ಪ್ರೆಸ್</h3>
    <ul>
      <Link to="/" button style={{backgroundImage: "linear-gradient(#ff050e,#01fbff)"}} className="menubtn menubtn-home">
        <li><img src="/images/house.svg" className="svg" alt="Loading Svg" />&nbsp;Home</li>
      </Link>
      <Link button style={{backgroundImage: "linear-gradient(#780206,#061161)"}} to="/about" className="menubtn">
        <li><img src="images/posts.svg" className="svg" alt="Loading Svg" />&nbsp;Posts</li>
      </Link>
      <Link button style={{backgroundImage: "linear-gradient(#780206,#061161)"}} to="/contactus" className="menubtn-conus">
        <li><img src="images/person-circle.svg" className="svg" alt="Loading Svg" />&nbsp;Contact US</li>
      </Link>
      <Link button style={{backgroundImage: "linear-gradient(#780206,#061161)"}} to="/shop" className="menubtn">
        <li><img src="images/shop.svg" className="svg" alt="Loading Svg" />&nbsp;Shop</li>
      </Link>
      <div className="dropdown">
        <button className="dropbtn">More&nbsp;<img className="svg" src="images/arrow-down-circle-fill.svg" alt="Loading Svg" />
        </button>
        <div className="dropdown-content">
          <Link to="/location">Location</Link>
          <Link to="/masp">More About Us</Link>
          <hr />
          <Link to="/user manual">User Manual</Link>
          <Link to="/hq">Having a Question??</Link>
        </div>
      </div>
      </ul>
  </div>
  </ nav>
  </>
            );
            }
export default Header