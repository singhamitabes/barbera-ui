import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="d-flex header">
        <div className="col-sm header float-right ">
          <label className="">Opening Hour :  Sunday - Friday , 08:00 am - 10:00 pm</label>
        </div>
        <div className="col-sm d-flex justify-content-center">
          <label className="px-1"><FaFacebook /></label>
          <label className="px-1"><FaInstagram /></label>
          <label className="px-1"><FaTwitter /></label>
          <label className="px-1"><FaLinkedin /></label>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark text-light d-flex justify-content-start ">
        <div className="div bg-dark mx-5 halfWidth">
          <img src="/Assets/images/barbera_logo.png" alt="image" />
        </div>
        <div className="div halfWidth">
          <ul className="navbar-nav mx-5 d-flex justify-content-between ">
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/">Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/aboutus">AboutUs</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/services">Service </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="contactus">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="getanapp">Get The App</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
