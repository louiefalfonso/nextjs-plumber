import React from 'react'

export default function MainFooter() {
  return (
    <>
    <footer className="footer-wrapper footer-layout2">
        <div className="container">
            <div className="footer-inner">
            <div className="footer-left">
                <div className="widget footer-widget">
                <div className="about-logo">
                    <a href="home-plumbing-service.html">
                    <img src="../img/logo-white-1.svg" alt="Plumer" />
                    </a>
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
                            <li>
                            <a href="about.html">About Us</a>
                            </li>
                            <li>
                            <a href="project.html">Portfolio</a>
                            </li>
                            <li>
                            <a href="faq.html">Help &amp; FAQs</a>
                            </li>
                            <li>
                            <a href="blog.html">Blog</a>
                            </li>
                            <li>
                            <a href="contact.html">Contact Us</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-auto">
                    <div className="widget widget_nav_menu footer-widget">
                        <h3 className="widget_title">Popular Services</h3>
                        <div className="menu-all-pages-container">
                        <ul className="menu">
                            <li>
                            <a href="service-details.html">Home Maintenance</a>
                            </li>
                            <li>
                            <a href="service-details.html">General Plumbing</a>
                            </li>
                            <li>
                            <a href="service-details.html">Carpentry</a>
                            </li>
                            <li>
                            <a href="service-details.html">Drainage Services</a>
                            </li>
                            <li>
                            <a href="service-details.html">Plumbing Design</a>
                            </li>
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
                            445 S E St unit 12, Santa Rosa CA 95404, United States
                            </p>
                        </div>
                        <div className="info-box">
                            <div className="info-box_icon">
                            <i className="fas fa-phone" />
                            </div>
                            <p className="info-box_text">
                            <a href="tel:+16326543564" className="info-box_link">
                                +(163)-2654-3564
                            </a>
                            <a href="tel:+16326545432" className="info-box_link">
                                +(163)-2654-5432
                            </a>
                            </p>
                        </div>
                        <div className="info-box">
                            <div className="info-box_icon">
                            <i className="fas fa-envelope" />
                            </div>
                            <p className="info-box_text">
                            <a
                                href="mailto:help24/7@plumer.com"
                                className="info-box_link"
                            >
                                help24/7@plumer.com
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
