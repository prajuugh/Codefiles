import React from 'react'
import {  } from "../utilites.css";
import { Link } from "react-router-dom";
import {  } from "./css pages/Contus.css";
// ddasdugsfuvfo/
export function Contactus() {
    return (
        <div>
    <marquee behavior="" direction="">
    Your Details Will be<code> not Shared with anyone or published to public</code> so feel free to fill below details. 
    If you are not Confident to fill this form <code>Contact to-9740382551</code></marquee>
  <br/>
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLScuYUxz3AZ2dlPj_PU1zt_hfLvwN7LcSj279_lW9QF6G0iAbg/viewform?embedded=true" width="100%" height="2468" frameborder="0" marginheight="0" marginwidth="0">Loading… Contact From Please Wait for few minutes or check your internet</iframe>
        <h2 className="exploretxt font2"><Link to="/shop" className="exploretxt-Link">Go To Next Page to Explore More about sadashiva printing press</Link></h2>
        </div>
    )
}

export default Contactus