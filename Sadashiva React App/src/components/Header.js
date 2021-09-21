import { Link } from "react-router-dom";
import {  } from "./Header.css";
import {  } from "../utilites.css";


export function Header({ header }) {
  return (
    <>
    <nav className="navigation aninav">
  <div className="nav">
    <div className="conoflogo">
    <Link to="/"><span><img className="logoinhead" src="/images/logo.png" width="50px" alt="" /></span></Link>
    <Link to="/"><span><img className="logoinhead" src="/images/logo2.png" width="50px" alt="" /></span></Link>
    <Link to="/"><span><img className="logoinhead" src="/images/logo3.png" width="50px" alt="" /></span></Link>
    </div>
    <h3 className="heading1 textcol">Sadashiva Printing Press</h3>
    <h3 className="heading2 textcol">ಸದಾಶಿವ ಪ್ರಿಂಟಿಂಗ್ ಪ್ರೆಸ್</h3>
    <ul>
      <Link to="/" button className="menubtn  inactive">
        <li><img src="/svg/house.svg" alt="Loading Svg" />&nbsp;Home</li>
      </Link>
      <Link button to="/posts" className="menubtn inactive">
        <li><img src="svg/posts.svg" alt="Loading Svg" />&nbsp;Posts</li>
      </Link>
      <Link button to="/contactus" className="menubtn-conus inactive">
        <li><img src="svg/contactus.svg" className="" alt="Loading Svg" />&nbsp;Contact US</li>
      </Link>
      <Link button to="/shop" className="menubtn inactive">
        <li><img src="svg/shop.svg" alt="Loading Svg" />&nbsp;Shop</li>
      </Link>
      <div className="dropdown">
        <button className="dropbtn">More&nbsp;<img  src="svg/more.svg" alt="Loading Svg" />
        </button>
        <div className="dropdown-content">
          <Link to="/location"><img src="svg/location.svg" alt="Loading Svg" />&nbsp;Location</Link>
          <Link to="/masp"><img src="svg/info.svg" alt="Loading Svg" />&nbsp;More About Us</Link>
          <hr />
          <Link to="/usermanu"><img src="svg/usermanual.svg" alt="Loading Svg" />&nbsp;User Manual</Link>
          <Link to="/hq"><img src="svg/havingquestion.svg" alt="Loading Svg" />&nbsp;Having a Question??</Link>
          <Link to="/Buyitem"><img src="svg/buyitem.svg" alt="Loading Svg" />&nbsp;Buy Items</Link>
        </div>
      </div>
      </ul>
  </div>
  </ nav>
  </>
            );
            }

export default Header