import React from 'react'
import Link from 'next/link'
import HeaderTop from './HeaderTop'
import Navigation from './Navigation'

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
                        <Link href="/" passHref>
                            <img src="../img/logo.webp" alt="Plumer" />
                        </Link>
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
                            <Link href="/contactus" passHref className="themeholy-btn style4">
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                    </div>
                    <div className="menu-wrap">
                    <div className="row">
                        <div className="col text-end text-xl-start">
                        <Navigation/>
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
