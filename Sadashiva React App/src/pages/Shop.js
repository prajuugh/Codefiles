import React from 'react'
import {  } from "../utilites.css";
import { Link } from "react-router-dom";
import {  } from "./css pages/shop.css";

export function Shop() {
    return (
        <>
            {/* this is shop page, Shop page will be edited soon */}
            <div className="container">
        <Link to="/buyitem">
      <div className="card">
      <img className="cardimgtop" src="/images/ryobi machine3.jpg" alt="Loading Image....Please Wait"/>
      <p className="descofcard font2">
          Item Name-<strong> Ryobi 3200cd</strong> 
          <div className="hr-card">
          <hr/></div>
          Price-<strong>5100</strong>
          <div className="hr2-card">
          <hr/></div>
          Visit Our shop- <a className="adressincard" href="/location">&nbsp;Adress</a>
          </p>
    </div></Link>
        <Link to="/buyitem">
      <div className="card">
      <img className="cardimgtop" src="/images/ryobi machine3.jpg" alt="Loading Image....Please Wait"/>
      <p className="descofcard font2">
          Item Name-<strong> Ryobi 3200cd</strong> 
          <div className="hr-card">
          <hr/></div>
          Price-<strong>5100</strong>
          <div className="hr2-card">
          <hr/></div>
          Visit Our shop- <a className="adressincard" href="/location">&nbsp;Adress</a>
          </p>
    </div></Link>
        <Link to="/buyitem">
      <div className="card">
      <img className="cardimgtop" src="/images/ryobi machine3.jpg" alt="Loading Image....Please Wait"/>
      <p className="descofcard font2">
          Item Name-<strong> Ryobi 3200cd</strong> 
          <div className="hr-card">
          <hr/></div>
          Price-<strong>5100</strong>
          <div className="hr2-card">
          <hr/></div>
          Visit Our shop- <a className="adressincard" href="/location">&nbsp;Adress</a>
          </p>
    </div></Link>
        <Link to="/buyitem">
      <div className="card">
      <img className="cardimgtop" src="/images/ryobi machine3.jpg" alt="Loading Image....Please Wait"/>
      <p className="descofcard font2">
          Item Name-<strong> Ryobi 3200cd</strong> 
          <div className="hr-card">
          <hr/></div>
          Price-<strong>5100</strong>
          <div className="hr2-card">
          <hr/></div>
          Visit Our shop- <a className="adressincard" href="/location">&nbsp;Adress</a>
          </p>
    </div></Link>
    </div>
            <h2 className="exploretxt font2"><Link to="/location" className="exploretxt-Link">Go To Next Page to Explore More about sadashiva printing press</Link></h2>
        </>
    )
}

export default Shop