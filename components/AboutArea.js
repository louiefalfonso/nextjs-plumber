import React from 'react'
import Link from 'next/link'

export default function AboutArea() {
  return (
    <>
    <div className="space" id="about-sec">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-xl-6 mb-30 mb-xl-0">
                <div className="img-box1">
                <div className="img1">
                    <img src="/img/normal/about_1_1.jpg" alt="About" />
                    <div className="ripple-shape">
                    <span className="ripple-1" />
                    <span className="ripple-2" />
                    <span className="ripple-3" />
                    <span className="ripple-4" />
                    <span className="ripple-5" />
                    <span className="ripple-6" />
                    </div>
                </div>
                <div className="img2">
                    <img src="img/normal/about_1_2.jpg" alt="Image" />
                </div>
                <div className="year-counter">
                    <div className="year-counter_number">50</div>
                    <div className="media-body">
                    <span className="year-counter_text">Plumbing Services</span>
                    <span className="year-counter_title">Years Experiences</span>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="title-area mb-30">
                <span className="sub-title">
                    <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                    About Our Company
                </span>
                <h2 className="sec-title">
                    Our Company Provide The Best Plumbing Service
                </h2>
                </div>
                <p className="mt-n2 mb-30">
                Our skilled technicians are equipped with the latest tools and
                technology to quickly diagnose and solve any plumbing issue. We're
                available 24/7 for repairs, so you can rest easy knowing we're always
                just a phone call away. At our plumbing service, we pride ourselves on
                providing prompt, and affordable service.
                </p>
                <div className="checklist style2 mb-40">
                <ul>
                    <li>
                    <i className="fa-solid fa-badge-check" /> Planning
                    </li>
                    <li>
                    <i className="fa-solid fa-badge-check" /> Replacing
                    </li>
                    <li>
                    <i className="fa-solid fa-badge-check" /> Installing
                    </li>
                </ul>
                </div>
                <Link href="/aboutus" passHref className="themeholy-btn">About More</Link>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
