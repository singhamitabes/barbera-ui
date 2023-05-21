import React from 'react'

export default function SuccessScreen() {
    return (
        <>
            <div class="container text-center">
                <div class="row mb-4">
                    <div >
                        <img src="/Assets/images/Success_icon.png" alt="Your Image" class="img-fluid p-4" />
                    </div>
                    <div class="col-md-12 fw-bold text-white ">
                        <p className='p-4 fs-5 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="col-md-12 row w-50 m-auto">
                        <div class="col-md-6">
                            <button class="btn btn-warning fw-bold p-3 m-2 float-none ">Back To Home</button>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-dark fw-bold p-3 m-2" style={{border:"2px solid #FBB034"}}>Book an Appoitnment</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
