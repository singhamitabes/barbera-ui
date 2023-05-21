import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <>

      <footer class=" text-lg-start lightblack text-muted">
        <section class="">
          <div class="container text-md-start">
            <div class="row mx-[-5] d-flex justify-content-around">

              <div class="col-md-3 col-sm-2 col-lg-4 col-xl-3 mx-auto mt-4 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <img src="/Assets/images/barbera_logo.png" alt="Your Image" class="img-fluid" />
                </h6>
                <p>
                  B 35, Some street <br /> adderess, Mumbai
                </p>
              </div>

              <div class="col-md-2 col-sm-2 col-lg-2 col-xl-3 mx-auto mt-4 mb-4 ">

                <p>
                  Working days / 08:00 - 20:00
                </p>
                <p>
                  Saturday / 08:00 - 20:00
                </p>
                <p>
                  Sunday / CLOSED
                </p>
              </div>

              <div class="col-md-3 col-sm-2 col-lg-2 mt-4 col-xl-2 mx-auto mb-4">

                <p>
                  <Link to="/termcondition" className='footertext'>Terms & Conditions</Link>
                </p>
                <p>
                  <Link to="/privacypolicies" className='footertext'>Privacy Policy</Link>
                </p>
                <p>
                  <Link to="/cookiespolicies" className='footertext'>Cookie Policy</Link>
                </p>
              </div>


              <div class="col-md-3 col-sm-2 mt-4 col-lg-3 mx-auto mb-4">
                Download App From

                <div className="col-md-12 d-flex justify-content-start footertext my-4">
                  <div className="col-md-6"><img src="/Assets/images/button.png" alt="Your Image" class="img-fluid" /></div>
                  <div className="col-md-6"><img src="/Assets/images/button2.png" alt="Your Image" class="img-fluid" /></div>
                </div>

              </div>
            </div>
          </div>
        </section>
        <div class="text-center w-100 " >
          <footer class="black text-white d-flex flex-row">
            <div class="text-center align-middle my-auto w-100" >
              © 2023 Barbera. All rights reserved. Developed by Jethi Tech Solutions
            </div>

            <div class="container p-2">
              <section class="mb-0 ">
                <Link className="px-3 text-white" ><FaInstagram size={28} /></Link>
                <Link className="px-3 text-white"><FaFacebook size={28} /></Link>
                <Link className="px-3 text-white"><FaTwitter size={28} /></Link>
                <Link className="px-3 text-white"><FaLinkedin size={28} /></Link>
              </section>
            </div>
          </footer>
        </div>
      </footer>
    </>
  )
}
