import React from 'react'

export default function ContactInfoArea() {
  return (
    <>
    <div className="space-top pb-5 mb-4">
        <div className="container">
            <div className="row gx-0">
            <div className="col-lg-4">
                <div className="contact-feature">
                <div className="contact-feature_icon">
                    <img src="img/icon/contact_2_1.svg" alt="icon" />
                </div>
                <span className="contact-feature_subtitle">OUR OFFICE LOCATION</span>
                <h3 className="box-title">Englewood, CO, US, 80110</h3>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="contact-feature bg-theme">
                <div className="contact-feature_icon">
                    <img src="img/icon/contact_2_2.svg" alt="icon" />
                </div>
                <span className="contact-feature_subtitle">Have A Question?</span>
                <h3 className="box-title">
                    <a href="tel:+254621421536">+2546 214 21536</a>
                </h3>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="contact-feature">
                <div className="contact-feature_icon">
                    <img src="img/icon/contact_2_3.svg" alt="icon" />
                </div>
                <div className="contact-feature_content">
                    <span className="contact-feature_subtitle">Email Us On</span>
                    <h3 className="box-title">
                    <a href="mailto:service@pristineplumb.com">service@pristineplumb.com</a>
                    </h3>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
