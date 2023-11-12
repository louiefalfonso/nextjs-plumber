import React from 'react'

export default function MapContactArea() {
  return (
    <>   
    <div className="space-bottom">
        <div className="container">
        <div
            className="bg-smoke bg-bottom-right"
            data-bg-src="img/bg/contact_bg_2.png"
        >
            <div className="row">
            <div className="col-xl-8 offset-xl-4">
                <div className="quote-form-box bg-transparent">
                <h4 className="form-title text-center">
                    Get A <span className="text-theme">Free</span> Quote
                </h4>
                <form
                    action="mail.php"
                    method="POST"
                    className="contact-form ajax-contact"
                >
                    <div className="row">
                    <div className="form-group col-md-6">
                        <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <input
                        type="tel"
                        className="form-control"
                        name="number"
                        id="number"
                        placeholder="Phone Number"
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <select name="subject" id="subject" className="form-select">
                        <option value="" disabled="" hidden="">
                            Select Subject
                        </option>
                        <option value="AC Installation">AC Installation</option>
                        <option value="Plumbing Service">Plumbing Service</option>
                        <option value="AC Repairing">AC Repairing</option>
                        <option value="Dust Cleaning">Dust Cleaning</option>
                        </select>
                    </div>
                    <div className="form-group col-12">
                        <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={3}
                        className="form-control"
                        placeholder="Your Message"
                        defaultValue={""}
                        />
                    </div>
                    <div className="form-btn col-12">
                        <button className="themeholy-btn btn-fw">Submit Now</button>
                    </div>
                    </div>
                    <p className="form-messages mb-0 mt-3" />
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
