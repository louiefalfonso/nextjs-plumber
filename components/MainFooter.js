import React from 'react'
import Link from 'next/link'

export default function MainFooter() {
  return (
    <>
    <footer className="footer-wrapper footer-layout2">
        <div className="container">
            <div className="footer-inner">
            <div className="footer-left">
                <div className="widget footer-widget">
                <div className="about-logo">
                    <Link href="/" passHref>
                        <img src="../img/logo-white-1.svg" alt="Plumer" />
                    </Link>
                </div>
                <div className="themeholy-widget-schedule">
                    <p className="text">
                    A plumber is a tradesperson who specializes in installing,
                    repairing.
                    </p>
                    <h4 className="title">Working Hours:</h4>
                    <p className="schedule-info">
                    <span>Mon - Fri</span>
                    <span>8:00 AM - 6:00 PM</span>
                    </p>
                    <p className="schedule-info">
                    <span>Saturday</span>
                    <span>9:00 AM - 5:00 PM</span>
                    </p>
                    <p className="schedule-info">
                    <span>Sunday</span>
                    <span>Closed</span>
                    </p>
                </div>
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-top">
                <div className="newsletter-wrap">
                    <div className="newsletter-content">
                    <h4 className="newsletter-title">
                        Sign Up to get updates &amp; news about us.
                    </h4>
                    </div>
                    <form className="newsletter-form">
                    <div className="form-group">
                        <input
                        className="form-control"
                        type="email"
                        placeholder="Email Address"
                        required=""
                        />
                        <i className="fal fa-envelope" />
                    </div>
                    <button type="submit" className="themeholy-btn style3">
                        Subscribe
                    </button>
                    </form>
                </div>
                </div>
                <div className="widget-area2">
                <div className="row justify-content-between">
                    <div className="col-sm-6 col-md-auto">
                    <div className="widget widget_nav_menu footer-widget">
                        <h3 className="widget_title">Quick Links</h3>
                        <div className="menu-all-pages-container">
                        <ul className="menu">
                            <li><Link href="/aboutus" passHref>About Us</Link></li>
                            <li><Link href="/services" passHref className="menu-item-has-children" >Services</Link></li>
                            <li><Link href="/projects" passHref>Projects</Link></li>
                            <li><Link href="/teams" passHref>Teams</Link></li>
                            <li><Link href="/faq" passHref>FAQ</Link></li>
                            <li><Link href="/contactus" passHref>Contact Us</Link></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-auto">
                    <div className="widget widget_nav_menu footer-widget">
                        <h3 className="widget_title">Popular Services</h3>
                        <div className="menu-all-pages-container">
                        <ul className="menu">
                            <li><Link href="/services/bathroom-plumbing" passHref>Bathroom Plumbing</Link></li>
                            <li><Link href="/services/drain-plumbing" passHref>Drain Plumbing</Link></li>
                            <li><Link href="/services/waterline-repair" passHref>Water Line Repair</Link></li>
                            <li><Link href="/services/kitchen-plumbing" passHref>Kitchen Plumbing</Link></li>
                            <li><Link href="/services/gasline-services" passHref>Gas Line Services</Link></li>
                            <li><Link href="/services/pipe-cleaning" passHref>Pipe Cleaning</Link></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-auto">
                    <div className="widget footer-widget">
                        <h3 className="widget_title">Contact Us</h3>
                        <div className="themeholy-widget-contact">
                        <div className="info-box">
                            <div className="info-box_icon">
                            <i className="fas fa-location-dot" />
                            </div>
                            <p className="info-box_text">
                            Englewood, CO, US, 80110
                            </p>
                        </div>
                        <div className="info-box">
                            <div className="info-box_icon">
                            <i className="fas fa-phone" />
                            </div>
                            <p className="info-box_text">
                            <a href="tel:(720) 414-5942" className="info-box_link">
                                (720) 414-5942
                            </a>
                            </p>
                        </div>
                        <div className="info-box">
                            <div className="info-box_icon">
                            <i className="fas fa-envelope" />
                            </div>
                            <p className="info-box_text">
                            <a
                                href="mailto:service@pristineplumb.com"
                                className="info-box_link"
                            >
                                service@pristineplumb.com
                            </a>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="copyright-wrap">
            <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-6">
                <p className="copyright-text">
                    Copyright <i className="fal fa-copyright" /> 2023{" "}
                    Pristine Plumbing & Repairing Service. All Rights
                    Reserved.
                </p>
                </div>
                <div className="col-lg-auto text-end d-none d-lg-block">
                <div className="social-links">
                    <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://www.twitter.com/">
                    <i className="fab fa-twitter" />
                    </a>
                    <a href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram" />
                    </a>
                    <a href="https://www.youtube.com/">
                    <i className="fab fa-youtube" />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="shape-mockup footer-shape1" data-bottom="73px" data-left="3%">
            <img src="../img/shape/man_shape_1.png" alt="shape" />
        </div>
        <div className="shape-mockup" data-bottom="0%" data-right="0%">
            <img src="../img/shape/footer_shape_2.png" alt="shape" />
        </div>
    </footer>
    </>
  )
}
