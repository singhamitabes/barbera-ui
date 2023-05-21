import React from 'react'

export default function ContactUs() {
    return (
        <>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5">
                            <div className="h3 mb-3 mx-4 heading fs-5 text-black">Contact Us</div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <form action="#" method="post">
                                <div className="p-5 p-lg-4 ">
                                    <div className="form-group row mb-2">
                                        <div className="col-md-12 heading mb-2">
                                            <div className="h3 mb-3 text-white heading text-black"> Get in touch</div>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <div className="col-md-12">
                                            <input type="text" className="input-field" id="name" placeholder='Name' name="name" required />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <div className="col-md-12">
                                            <input type="tel" className="input-field" id="phone" placeholder='Mobile No.' name="phone" pattern="[0-9]{10}" required />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <div className="col-md-12">
                                            <input type="email" className="input-field" id="email" placeholder='Email' name="email" />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <div className="col-md-12">
                                            <textarea name="message" id="message" placeholder='Message' cols="1" rows="3" className="input-field"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-2">
                                        <div className="col-lg-12">
                                            <input type="submit" className="btn btn-warning px-5 fs-6" value="Submit" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 ml-auto">
                            <div className=" text-center">
                                <div className="mapouter "><div className="gmap_canvas"><iframe width="100%" height="430px" id="gmap_canvas" src="https://maps.google.com/maps?q=a-43%20sector%2016%20Noida%20India&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
