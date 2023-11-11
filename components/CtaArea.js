import React from 'react'
import Link from 'next/link'

export default function CtaArea() {
  return (
    <>
    <section className="space" data-bg-src="img/bg/cta_bg_1.jpg">
        <div className="container z-index-common">
            <div className="row justify-content-center">
            <div className="col-md-9 text-center">
                <div className="title-area mb-35">
                <span className="sub-title call">
                    <i className="fa-solid fa-phone" />
                    +163-2654-3654
                </span>
                <h2 className="sec-title text-white">
                    Looking For A Local Plumber in Your Area Contact Us Now!
                </h2>
                </div>
                <div className="btn-group justify-content-center">
                    <Link href="/contactus" passHref className="themeholy-btn style3">Book A Online</Link>
                    <Link href="/contactus" passHref className="themeholy-btn style2">Contact Us</Link>
                </div>
            </div>
            </div>
        </div>
    </section>

    </>
  )
}
