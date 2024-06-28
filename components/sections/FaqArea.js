import React from 'react'
import Link from 'next/link'

export default function FaqArea() {
  return (
    <>
    <div className="space" id="faq-sec">
        <div className="container">
            <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-10 text-center text-xl-start ">
                <div className="title-area mb-30">
                <span className="sub-title">
                    <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                    Frequently Asked Have Any Question?
                </span>
                <h2 className="sec-title">
                    Professional Residential And Commercial Plumbing Repair
                </h2>
                </div>
                <p className="mt-n2 mb-40">
                We understand that plumbing issues can be stressful and disruptive to
                your daily routine, which is why we provide prompt and efficient
                service to minimize any inconvenience to you. We also believe in clear
                and honest communication throughout the process, ensuring that you
                understand what's happening and how we plan to fix the issue. You can
                trust that you're getting expert service
                </p>
                <Link href="/faq" passHref className="themeholy-btn">Ask Questions</Link>
            </div>
            <div className="col-xl-6 col-lg-10 mt-35 mt-xl-0">
                <div className="accordion-1 accordion" id="faqAccordion">
                <div className="accordion-card ">
                    <div className="accordion-header" id="collapse-item-1">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-1"
                        aria-expanded="false"
                        aria-controls="collapse-1"
                    >
                        1. What Kind Of Work Can A Handyman Do?
                    </button>
                    </div>
                    <div
                    id="collapse-1"
                    className="accordion-collapse collapse "
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion"
                    >
                    <div className="accordion-body">
                        <p className="faq-text">
                        A handyman is a skilled professional who can perform a wide
                        range of repair and maintenance tasks around your home or
                        business. From basic plumbing and electrical work to
                        carpentry, painting.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="accordion-card active">
                    <div className="accordion-header" id="collapse-item-2">
                    <button
                        className="accordion-button "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-2"
                        aria-expanded="true"
                        aria-controls="collapse-2"
                    >
                        2. Can A Handyman Do Plumbing Work?
                    </button>
                    </div>
                    <div
                    id="collapse-2"
                    className="accordion-collapse collapse show"
                    aria-labelledby="collapse-item-2"
                    data-bs-parent="#faqAccordion"
                    >
                    <div className="accordion-body">
                        <p className="faq-text">
                        A handyman is a skilled professional who can perform a wide
                        range of repair and maintenance tasks around your home or
                        business. From basic plumbing and electrical work to
                        carpentry, painting.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="accordion-card ">
                    <div className="accordion-header" id="collapse-item-3">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-3"
                        aria-expanded="false"
                        aria-controls="collapse-3"
                    >
                        3. Does A Handyman Need Insurance?
                    </button>
                    </div>
                    <div
                    id="collapse-3"
                    className="accordion-collapse collapse "
                    aria-labelledby="collapse-item-3"
                    data-bs-parent="#faqAccordion"
                    >
                    <div className="accordion-body">
                        <p className="faq-text">
                        A handyman is a skilled professional who can perform a wide
                        range of repair and maintenance tasks around your home or
                        business. From basic plumbing and electrical work to
                        carpentry, painting.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="accordion-card ">
                    <div className="accordion-header" id="collapse-item-4">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-4"
                        aria-expanded="false"
                        aria-controls="collapse-4"
                    >
                        4. How Should I Pay To A Pumbler?
                    </button>
                    </div>
                    <div
                    id="collapse-4"
                    className="accordion-collapse collapse "
                    aria-labelledby="collapse-item-4"
                    data-bs-parent="#faqAccordion"
                    >
                    <div className="accordion-body">
                        <p className="faq-text">
                        A handyman is a skilled professional who can perform a wide
                        range of repair and maintenance tasks around your home or
                        business. From basic plumbing and electrical work to
                        carpentry, painting.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div
            className="shape-mockup moving d-none d-xl-block"
            data-bottom="0%"
            data-right="0%"
        >
            <img src="img/shape/tap_1.png" alt="shape" />
        </div>
    </div>
    </>
  )
}
