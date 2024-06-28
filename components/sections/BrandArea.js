import React from 'react'

export default function BrandArea() {
  return (
    <>
    <section className="brand-sec1">
        <div className="brand-title-area">
            <div className="title-area2">
            <span className="subtitle">Our Trusted Partner</span>
            <h3 className="title">The Brands we work with and believe in...</h3>
            </div>
        </div>
        <div className="container">
            <div
            className="row themeholy-carousel"
            id="brandSlide1"
            data-slide-show={5}
            data-lg-slide-show={4}
            data-md-slide-show={3}
            data-sm-slide-show={3}
            data-xs-slide-show={2}
            >
            <div className="col-auto">
                <div className="brand-box">
                <img src="img/brand/brand_1_1.svg" alt="Brand Logo" />
                </div>
            </div>
            <div className="col-auto">
                <div className="brand-box">
                <img src="img/brand/brand_1_2.svg" alt="Brand Logo" />
                </div>
            </div>
            <div className="col-auto">
                <div className="brand-box">
                <img src="img/brand/brand_1_3.svg" alt="Brand Logo" />
                </div>
            </div>
            <div className="col-auto">
                <div className="brand-box">
                <img src="img/brand/brand_1_4.svg" alt="Brand Logo" />
                </div>
            </div>
            <div className="col-auto">
                <div className="brand-box">
                <img src="img/brand/brand_1_5.svg" alt="Brand Logo" />
                </div>
            </div>
            <div className="col-auto">
                <div className="brand-box">
                <img src="img/brand/brand_1_6.svg" alt="Brand Logo" />
                </div>
            </div>
            </div>
        </div>
    </section>

    </>
  )
}
