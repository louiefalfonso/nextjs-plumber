import React from 'react'

export default function ServiceArea() {
  return (
    <>
    <section className="service-sec bg-smoke space" id="service-sec">
        <div className="shape-mockup" data-top={0} data-left={0}>
            <img src="img/shape/line_shape_3.png" alt="shape" />
        </div>
        <div
            className="shape-mockup d-none d-xxl-block"
            data-bottom={0}
            data-right="1%"
        >
            <img src="img/shape/man_shape_2.png" alt="shape" />
        </div>
        <div className="container">
            <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-7 mb-n2 mb-lg-0">
                <div className="title-area text-center text-lg-start">
                <span className="sub-title">
                    <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                    Our Services
                </span>
                <h2 className="sec-title">See Our Plumbing Services</h2>
                </div>
            </div>
            <div className="col-auto">
                <div className="sec-btn">
                <a href="service.html" className="themeholy-btn">
                    Explore All Services
                </a>
                </div>
            </div>
            </div>{" "}
            {/* / Title row */}
            <div
            className="row slider-shadow themeholy-carousel"
            data-slide-show={3}
            data-lg-slide-show={3}
            data-md-slide-show={2}
            data-sm-slide-show={1}
            data-xs-slide-show={1}
            >
            <div className="col-md-6 col-xl-4">
                <div className="service-card">
                <div className="service-card_icon">
                    <img src="img/icon/service_card_1.svg" alt="Icon" />
                </div>
                <div className="service-card_content">
                    <div className="shape1" />
                    <h3 className="box-title">
                    <a href="service-details.html">Basement Plumbing</a>
                    </h3>
                    <p className="service-card_text">
                    Basement plumbing is an essential part of any home. You are
                    looking to finish your basement or just need repairs to existing
                    plumbing service.
                    </p>
                    <a href="service-details.html" className="themeholy-btn">
                    Read More
                    </a>
                    <div className="ripple-shape">
                    <span className="ripple-1" />
                    <span className="ripple-2" />
                    <span className="ripple-3" />
                    <span className="ripple-4" />
                    <span className="ripple-5" />
                    <span className="ripple-6" />
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-6 col-xl-4">
                <div className="service-card">
                <div className="service-card_icon">
                    <img src="img/icon/service_card_2.svg" alt="Icon" />
                </div>
                <div className="service-card_content">
                    <div className="shape1" />
                    <h3 className="box-title">
                    <a href="service-details.html">Drain Plumbing</a>
                    </h3>
                    <p className="service-card_text">
                    Drain plumbing is a critical component of any homes plumbing
                    system. When drains become clogged or damaged, it can cause a host
                    of problems.
                    </p>
                    <a href="service-details.html" className="themeholy-btn">
                    Read More
                    </a>
                    <div className="ripple-shape">
                    <span className="ripple-1" />
                    <span className="ripple-2" />
                    <span className="ripple-3" />
                    <span className="ripple-4" />
                    <span className="ripple-5" />
                    <span className="ripple-6" />
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-6 col-xl-4">
                <div className="service-card">
                <div className="service-card_icon">
                    <img src="img/icon/service_card_3.svg" alt="Icon" />
                </div>
                <div className="service-card_content">
                    <div className="shape1" />
                    <h3 className="box-title">
                    <a href="service-details.html">Water Line Repair</a>
                    </h3>
                    <p className="service-card_text">
                    A broken or leaking water line can cause significant damage to
                    your home and property. If you suspect a problem with your water
                    line.
                    </p>
                    <a href="service-details.html" className="themeholy-btn">
                    Read More
                    </a>
                    <div className="ripple-shape">
                    <span className="ripple-1" />
                    <span className="ripple-2" />
                    <span className="ripple-3" />
                    <span className="ripple-4" />
                    <span className="ripple-5" />
                    <span className="ripple-6" />
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-6 col-xl-4">
                <div className="service-card">
                <div className="service-card_icon">
                    <img src="img/icon/service_card_4.svg" alt="Icon" />
                </div>
                <div className="service-card_content">
                    <div className="shape1" />
                    <h3 className="box-title">
                    <a href="service-details.html">Bathroom Plumbing</a>
                    </h3>
                    <p className="service-card_text">
                    Bathroom plumbing is a critical part of any homes plumbing system.
                    From sinks and toilets to showers and bathtubs, your bathroom
                    plumbing.
                    </p>
                    <a href="service-details.html" className="themeholy-btn">
                    Read More
                    </a>
                    <div className="ripple-shape">
                    <span className="ripple-1" />
                    <span className="ripple-2" />
                    <span className="ripple-3" />
                    <span className="ripple-4" />
                    <span className="ripple-5" />
                    <span className="ripple-6" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
