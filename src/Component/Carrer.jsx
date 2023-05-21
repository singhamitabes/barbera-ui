import React from 'react'

export default function Carrer() {
    return (
        <>
            <div className="site-section">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-12 mt-5">
                            <div className="h3 mx-4 heading fs-5 text-black">Join Our Team</div>
                        </div>
                        <div className="col-md-12 mt-3">
                            <div className="h3 mb-3 text-white fw-bold  heading mx-4 heading fs-4">Join Us</div>
                        </div>
                        <div className="col-md-12 mb-3 ">
                            <form action="#" method="post">
                                <div className="row">
                                    <div className="col-md-6 p-5 p-lg-4 ">
                                        <div className="form-group row mb-4">
                                            <div className="col-md-12">
                                                <input type="text" className="input-field" id="name" placeholder='First Name' name="name" required />
                                            </div>
                                        </div>
                                        <div className="form-group row mb-4">
                                            <div className="col-md-12">
                                                <input type="text" className="input-field" id="phone" placeholder='Email-id' name="phone" pattern="[0-9]{10}" required />
                                            </div>
                                        </div>
                                        <div className="form-group row mb-4">
                                            <div className="col-md-12">
                                                <input type="text" className="input-field" id="email" placeholder='Role' name="email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 p-5 p-lg-4 ">
                                        <div className="form-group row mb-4">
                                            <div className="col-md-12">
                                                <input type="text" className="input-field" id="name" placeholder='Mobile Number' name="Last Name" required />
                                            </div>
                                        </div>
                                        <div className="form-group row mb-4">
                                            <div className="col-md-12">
                                                <input type="tel" className="input-field" id="phone" placeholder='Start DAte.' name="Date." required />
                                            </div>
                                        </div>
                                        <div className="form-group row mb-4">
                                            <div className="col-md-12">
                                                <input type="date" className="input-field" id="email" placeholder='Email' name="Start Date" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 p-lg-4 ">
                                        <div className="form-group row mb-2">
                                            <div className="col-lg-12 my-0">
                                                <input type="submit" className="btn btn-warning px-5 fs-6" value="Submit" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
