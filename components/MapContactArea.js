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
                        <option value="" disabled="" selected="" hidden="">
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
    <div className="map-sec">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
        allowFullScreen=""
        loading="lazy"
        />
    </div>
    </>
  )
}
