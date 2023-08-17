import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="d-flex header">
        <div className="col-sm header float-right">
          <label className="">Opening Hour :  Sunday - Friday , 08:00 am - 10:00 pm</label>
        </div>
        <div className="col-sm d-flex justify-content-center">
          <label className="px-1"><FaFacebook /></label>
          <label className="px-1"><FaInstagram /></label>
          <label className="px-1"><FaTwitter /></label>
          <label className="px-1"><FaLinkedin /></label>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
        <div className="container">
          <div className="navbar-brand">
            <img src="/Assets/images/barbera_logo.png" alt="image" />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/aboutus">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/services">Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contactus">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/getanapp">Get The App</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
