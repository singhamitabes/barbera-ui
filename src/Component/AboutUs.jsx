import React from 'react'

export default function AboutUs() {
  return (
    <>
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
      <div className="col-md-12 text-white px-5 black text-center">
        <div className="row">
          <div className="col-md-3 py-4">
            <h1>6+</h1>
            <h5 className='heading'>Years of Experience</h5>
          </div>
          <div className="col-md-3 py-4">
            <h1 >15+</h1>
            <h5 className='heading'>Professionals</h5>
          </div>
          <div className="col-md-3 py-4">
            <h1>100+</h1>
            <h5 className='heading'>Happy Clients</h5>
          </div>
          <div className="col-md-3 py-4">
            <h1>40+</h1>
            <h5 className='heading'>Lorem ipsum</h5>
          </div>
        </div>
      </div>
      <div className='lightblack'>
          <div class="text-center  text-white fs-1 pt-5">Meet Our <span className='text-warning'>Professionals </span></div>
          <div class="text-center  discription mb-4">Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry.</div>
          <div className="col-md-12 text-white px-5 black text-center">
        <div className="row">
          <div className="col-md-3 py-4">
          <img className='mlx-5 imgFull' src="/Assets/images/beardman.png" alt="image" />
            <h1>6+</h1>
            <h5 className='heading'>Years of Experience</h5>
          </div>
          <div className="col-md-3 py-4">
            <h1 >15+</h1>
            <h5 className='heading'>Professionals</h5>
          </div>
          <div className="col-md-3 py-4">
            <h1>100+</h1>
            <h5 className='heading'>Happy Clients</h5>
          </div>
          <div className="col-md-3 py-4">
            <h1>40+</h1>
            <h5 className='heading'>Lorem ipsum</h5>
          </div>
        </div>
      </div>
        </div>
    </>
  )
}
