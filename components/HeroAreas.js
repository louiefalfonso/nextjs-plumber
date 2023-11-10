import React from 'react'
import Link from 'next/link'

export default function HeroAreas() {
  return (
    <>
    <div className="themeholy-hero-wrapper hero-1" id="hero">
        <div
            className="hero-slider-1 themeholy-carousel"
            data-fade="true"
            data-slide-show={1}
            data-md-slide-show={1}
        >
            <div className="themeholy-hero-slide">
            <div
                className="themeholy-hero-bg"
                data-bg-src="img/hero/hero_bg_1_1.jpg"
            >
                <img src="img/hero/hero_overlay_1.png" alt="Overlay" />
            </div>
            <div className="container">
                <div className="hero-style1">
                <span
                    className="sub-title"
                    data-ani="slideinleft"
                    data-ani-delay="0.1s"
                >
                    <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                    We are master of plumbing services
                </span>
                <h1
                    className="hero-title"
                    data-ani="slideinleft"
                    data-ani-delay="0.3s"
                >
                    We Provide Effective
                </h1>
                <h1
                    className="hero-title"
                    data-ani="slideinleft"
                    data-ani-delay="0.5s"
                >
                    Plumbing Solution
                </h1>
                <p className="hero-text" data-ani="slideinleft" data-ani-delay="0.7s">
                    Looking for reliable plumbing services? Look no further than our
                    team of expert plumbers! We offer a wide range of plumbing solutions
                    to meet all your needs.
                </p>
                <div
                    className="btn-group"
                    data-ani="slideinleft"
                    data-ani-delay="0.9s"
                >
                    <Link href="/aboutus" passHref className="themeholy-btn style3">DISCOVER MORE <i className="fa-regular fa-arrow-right ms-2" /></Link>
                    <Link href="/contactus" passHref className="themeholy-btn style2">CONTACT US <i className="fa-regular fa-arrow-right ms-2" /></Link>
                </div>
                </div>
            </div>
            </div>
            <div className="themeholy-hero-slide">
            <div
                className="themeholy-hero-bg"
                data-bg-src="img/hero/hero_bg_1_2.jpg"
            >
                <img src="img/hero/hero_overlay_1.png" alt="Overlay" />
            </div>
            <div className="container">
                <div className="hero-style1">
                <span
                    className="sub-title"
                    data-ani="slideinleft"
                    data-ani-delay="0.1s"
                >
                    <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                    Plumbing services is our passion
                </span>
                <h1
                    className="hero-title"
                    data-ani="slideinleft"
                    data-ani-delay="0.3s"
                >
                    Our Popular Services
                </h1>
                <h1
                    className="hero-title"
                    data-ani="slideinleft"
                    data-ani-delay="0.5s"
                >
                    About Plumbing
                </h1>
                <p className="hero-text" data-ani="slideinleft" data-ani-delay="0.7s">
                    Looking for reliable plumbing services? Look no further than our
                    team of expert plumbers! We offer a wide range of plumbing solutions
                    to meet all your needs.
                </p>
                <div
                    className="btn-group"
                    data-ani="slideinleft"
                    data-ani-delay="0.9s"
                >
                    <Link href="/aboutus" passHref className="themeholy-btn style3">DISCOVER MORE <i className="fa-regular fa-arrow-right ms-2" /></Link>
                    <Link href="/contactus" passHref className="themeholy-btn style2">CONTACT US <i className="fa-regular fa-arrow-right ms-2" /></Link>
                </div>
                </div>
            </div>
            </div>
            <div className="themeholy-hero-slide">
            <div
                className="themeholy-hero-bg"
                data-bg-src="img/hero/hero_bg_1_3.jpg"
            >
                <img src="img/hero/hero_overlay_1.png" alt="Overlay" />
            </div>
            <div className="container">
                <div className="hero-style1">
                <span
                    className="sub-title"
                    data-ani="slideinleft"
                    data-ani-delay="0.1s"
                >
                    <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                    We provide best plumbing services
                </span>
                <h1
                    className="hero-title"
                    data-ani="slideinleft"
                    data-ani-delay="0.3s"
                >
                    Plumbing Service is
                </h1>
                <h1
                    className="hero-title"
                    data-ani="slideinleft"
                    data-ani-delay="0.5s"
                >
                    Our Main Motto
                </h1>
                <p className="hero-text" data-ani="slideinleft" data-ani-delay="0.7s">
                    Looking for reliable plumbing services? Look no further than our
                    team of expert plumbers! We offer a wide range of plumbing solutions
                    to meet all your needs.
                </p>
                <div
                    className="btn-group"
                    data-ani="slideinleft"
                    data-ani-delay="0.9s"
                >
                    <Link href="/aboutus" passHref className="themeholy-btn style3">DISCOVER MORE <i className="fa-regular fa-arrow-right ms-2" /></Link>
                    <Link href="/contactus" passHref className="themeholy-btn style2">CONTACT US <i className="fa-regular fa-arrow-right ms-2" /></Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="icon-box">
            <button data-slick-prev=".hero-slider-1" className="slick-arrow default">
            <i className="far fa-arrow-left" />
            </button>
            <button data-slick-next=".hero-slider-1" className="slick-arrow default">
            <i className="far fa-arrow-right" />
            </button>
        </div>
    </div>
    </>
  )
}
