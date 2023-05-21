import React from 'react'
import Services from "./Services";
import GetAnApp from './GetAnApp';

export default function LandingPage() {
  return (
    <div >
      <div >
        <div class="col-md-12 row black">
          <div class="col-md-6 align-items-right">
            <div className="center">
              <h1 className='heading '>Welcome To Barbera</h1>
              <h1 className='heading2'>We Will Give You An Impeccable Look</h1>
              <h1 className='discription'>You will leave lookin sharp, relaxed<br />and ready to take on the world, with<br /> that swagger in your stride.</h1>
              <button type="button" className="btn btn-warning my-3">Book An Appontment</button>
            </div>
          </div>
          <div class="col-md-6 align-items-right">
            <div class="d-flex justify-content-end">
              <img src="/Assets/images/image2.png" alt="Your Image" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 p-4">
        <div className="row">
          <div className="col-md-6  text-center">
            <img className='mlx-5 imgFull' style={{ width: "500px" }} src="/Assets/images/Rectangle.png" alt="image" />
          </div>
          <div className="col-md-6 px-4 py-4">
            <h1 className='heading'>About US</h1>
            <h1 className='discription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </h1>
            <button type="button" className="btn btn-warning w-25 my-3">Learn More</button>
          </div>
        </div>
      </div>
      <Services />
      <div class="text-center text-white fs-1 pt-5">Our <span className='text-warning'>Client</span></div>
      <div class="text-center discription mb-4">Lorem Ipsum is simply dummy text of <br />the printing and typesetting industry.</div>
      <div class="container text-center">
        <div class="container text-center">
          <div class="row w-100 d-flex justify-content-center">
            <div class="col-lg-3 black text-center text-white m-2">
              <h1><img className='text-center mt-4 mt-4' src="/Assets/images/Ellipse.png" alt="image" /></h1>
              <h1><img className='text-center mt-4 mt-4' src="/Assets/images/5star.png" alt="image" /></h1>
              <p >Hair Styling</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
              <p >Scott Headerson</p>
              <p className='text-warning' >Customer</p>
            </div>
            <div class="col-lg-3 black text-center text-white  m-2 ">
              <h1><img className='text-center mt-4 mt-4' src="/Assets/images/Ellipse.png" alt="image" /></h1>
              <h1><img className='text-center mt-4 mt-4' src="/Assets/images/5star.png" alt="image" /></h1>
              <p>Beard Trim</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
              <p >Scott Headerson</p>
              <p className='text-warning' >Customer</p>
            </div>
            <div class="col-lg-3 black  text-white text-center  m-2 ">
              <h1><img className='text-center mt-4 mt-4' src="/Assets/images/Ellipse.png" alt="image" /></h1>
              <h1><img className='text-center mt-4 mt-4' src="/Assets/images/5star.png" alt="image" /></h1>
              <p>Hair Color</p>
              <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
              <p >Scott Headerson</p>
              <p className='text-warning' >Customer</p>

            </div>
          </div>
        </div>
      </div>
      <div class="text-center text-white fs-1 pt-5">Install our <span className='text-warning'>App</span></div>
      <div class="text-center discription mb-4">Lorem Ipsum is simply dummy text of <br />the printing and typesetting industry.</div>
          <GetAnApp/>
    </div>
  )
}
