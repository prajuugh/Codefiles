import React from 'react'
import {  } from "../utilites.css";
import {  } from "./css pages/home.css";
import { Link } from "react-router-dom";

export function Home() {
    return (
      <>
  {/* // <video autoplay width="100%" controls poster="/images/home page image.jpg">
  // <source src="Sadashiva Home page video.mp4" type="video/mp4"/>
  // </video> */}
  <div>
  <img src="/images/home page image.jpg" className="home-img" alt="loading Image" /> 
  <h1 className="sicon-con-heading font2">We in Social Platfrom</h1>
  <div className="sicon-con">
    <div className="sicon-card">
      <h3 className="sicon-card-heading font1">Call Us</h3>
      <a href="tel:919740382551" target="_blank"><img className="sicon-card-img" src="/images/callicon.png" alt=""/></a>
      <h3 className="sicon-card-desc font2">Click on Above icon</h3>
    </div>
    <div className="sicon-card">
      <h3 className="sicon-card-heading font1">Whatsapp</h3>
      <a href="https://wa.me/919740382551" target="_blank"><img className="sicon-card-img" src="/images/whatsappicon.png"
          alt=""/></a>
      <h3 className="sicon-card-desc font2">Click on Above icon</h3>
    </div>
    <div className="sicon-card">
      <h3 className="sicon-card-heading font1">Phone-Pe</h3>
      <a href="https://phon.pe/1989590326" target="_blank"><img className="sicon-card-img" src="/images/phonepeicon.png"
          alt=""/></a>
      <h3 className="sicon-card-desc font2">Click on Above icon</h3>
    </div>
    <div className="sicon-card">
      <h3 className="sicon-card-heading font1">Mail Us</h3>
      <a href="mailto:sadashivapressblh@gmail.com" target="_blank"><img className="sicon-card-img"
          src="/images/gmailicon.png" alt=""/></a>
      <h3 className="sicon-card-desc font2">Click on Above icon</h3>
    </div>
    <div href="https://en-gb.facebook.com/" className="sicon-card">
      <h3 className="sicon-card-heading font1">Facebook</h3>
     <a href="https://en-gb.facebook.com/" target="_blank"><img className="sicon-card-img" src="/images/facebookicon.png" alt=""/></a>
      <h3 className="sicon-card-desc font2">Click on Above icon</h3>
    </div>
  </div>
  </div>
  <hr/>
  <h4 className="yads"><span className="aninav">75y</span>&nbsp;&nbsp;&nbsp;Celebrating 75th Year of<br/>Sadashiva Printing
    Press&nbsp;&nbsp;&nbsp;<span className="aninav">75y</span></h4>
    <hr/>
  <img className="yads-img" src="/images/award.JPG" alt="Loading Image"/>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d959.6939661705178!2d74.85873892917934!3d15.815768089649664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf5142ae01dced%3A0xed20382358554f0e!2sSadashiva%20Printing%20Press!5e0!3m2!1sen!2sin!4v1629018683855!5m2!1sen!2sin"
    width="100%" height="700" allowfullscreen="" loading="lazy"></iframe>
    <h2 className="exploretxt font2"><Link to="/posts" className="exploretxt-Link">Go To Next Page to Explore More about sadashiva printing press</Link></h2>
  </>
    )
}

export default Home
