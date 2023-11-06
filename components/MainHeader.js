import React from 'react'
import HeaderTop from './HeaderTop'

export default function MainHeader() {
  return (
    <>
    <header className="themeholy-header header-layout1 header-layout2">
        <HeaderTop/>
        <div className="sticky-wrapper">
            {/* Main Menu Area */}
            <div className="menu-area">
            <div className="container themeholy-container">
                <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                    <div className="header-logo">
                    <a href="home-plumbing-service.html">
                        <img src="img/logo.webp" alt="Plumer" />
                    </a>
                    </div>
                </div>
                <div className="col">
                    <div className="menu-top d-none d-xl-block">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                        <div className="header-info">
                            <div className="icon-btn">
                            <i className="fas fa-phone" />
                            </div>
                            <div className="media-body">
                            <span className="header-info_label">
                                Call Us Any Time:
                            </span>
                            
                            <a href="tel:+16326543654" className="header-info_link">
                               (720) 414-5942
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-auto">
                        <div className="header-info">
                            <div className="icon-btn">
                            <i className="fas fa-messages" />
                            </div>
                            <div className="media-body">
                            <span className="header-info_label">Email Us: </span>
                            <a
                                href="mailto:info@plumer.com"
                                className="header-info_link"
                            >
                                service@pristineplumb.com
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-auto">
                        <div className="header-info">
                            <div className="icon-btn">
                            <i className="fas fa-location-dot" />
                            </div>
                            <div className="media-body">
                            <span className="header-info_label">
                                Our Office Location:{" "}
                            </span>
                            <a
                                href="https://www.google.com/maps"
                                className="header-info_link"
                            >
                                Englewood, CO, US, 80110
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-auto d-none d-xxl-block">
                        <a href="contact.html" className="themeholy-btn style4">
                            Get a Quote
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="menu-wrap">
                    <div className="row">
                        <div className="col text-end text-xl-start">
                        <nav className="main-menu d-none d-lg-inline-block">
                            <ul>
                            <li className="menu-item-has-children">
                                <a href="home-plumbing-service.html">Home</a>
                                <ul className="sub-menu">
                                <li>
                                    <a href="home-plumbing-service.html">
                                    Plumbing Service
                                    </a>
                                </li>
                                <li>
                                    <a href="home-air-conditioner.html">
                                    Air Conditioner
                                    </a>
                                </li>
                                <li>
                                    <a href="home-electrician.html">Home Electrician</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="about.html">About Us</a>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">Services</a>
                                <ul className="sub-menu">
                                <li>
                                    <a href="service.html">Services</a>
                                </li>
                                <li>
                                    <a href="service-details.html">Services Details</a>
                                </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">Pages</a>
                                <ul className="sub-menu">
                                <li className="menu-item-has-children">
                                    <a href="#">Shop</a>
                                    <ul className="sub-menu">
                                    <li>
                                        <a href="shop.html">Shop</a>
                                    </li>
                                    <li>
                                        <a href="shop-details.html">Shop Details</a>
                                    </li>
                                    <li>
                                        <a href="cart.html">Cart Page</a>
                                    </li>
                                    <li>
                                        <a href="checkout.html">Checkout</a>
                                    </li>
                                    <li>
                                        <a href="wishlist.html">Wishlist</a>
                                    </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="team.html">Team</a>
                                </li>
                                <li>
                                    <a href="team-details.html">Team Details</a>
                                </li>
                                <li>
                                    <a href="project.html">Project</a>
                                </li>
                                <li>
                                    <a href="project-details.html">Project Details</a>
                                </li>
                                <li>
                                    <a href="pricing.html">Pricing</a>
                                </li>
                                <li>
                                    <a href="faq.html">Faq Page</a>
                                </li>
                                <li>
                                    <a href="error.html">Error Page</a>
                                </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">Blog</a>
                                <ul className="sub-menu">
                                <li>
                                    <a href="blog.html">Blog</a>
                                </li>
                                <li>
                                    <a href="blog-details.html">Blog Details</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="contact.html">Contact</a>
                            </li>
                            </ul>
                        </nav>
                        <button
                            type="button"
                            className="themeholy-menu-toggle d-block d-lg-none"
                        >
                            <i className="far fa-bars" />
                        </button>
                        </div>
                        <div className="col-auto d-none d-xl-block">
                        
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="logo-bg" />
            </div>
        </div>
    </header>
    </>
  )
}
