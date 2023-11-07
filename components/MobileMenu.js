import React from 'react'

export default function MobileMenu() {
  return (
    <>
    <div className="themeholy-menu-wrapper">
        <div className="themeholy-menu-area text-center">
            <button className="themeholy-menu-toggle">
            <i className="fal fa-times" />
            </button>
            <div className="mobile-logo">
            <a href="home-plumbing-service.html">
                <img src="img/logo.webp" alt="Plumer" />
            </a>
            </div>
            <div className="themeholy-mobile-menu">
            <ul>
                <li className="menu-item-has-children">
                <a href="home-plumbing-service.html">Home</a>
                <ul className="sub-menu">
                    <li>
                    <a href="home-plumbing-service.html">Plumbing Service</a>
                    </li>
                    <li>
                    <a href="home-air-conditioner.html">Air Conditioner</a>
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
            </div>
        </div>
    </div>
    </>
  )
}
