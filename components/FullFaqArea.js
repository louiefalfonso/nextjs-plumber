import React from 'react'

export default function FullFaqArea() {
  return (
    <>
    <div className="space">
        <div className="container">
            <div className="title-area text-center">
            <span className="sub-title">
                <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                Faq’s
            </span>
            <h2 className="sec-title">Frequently Asked Question?</h2>
            </div>
            <div className="row">
            <div className="col-xl-7 mb-5 mb-xl-0">
                <div className="accordion-1 accordion" id="faqAccordion">
                <div className="accordion-card active">
                    <div className="accordion-header" id="collapse-item-1">
                    <button
                        className="accordion-button "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-1"
                        aria-expanded="true"
                        aria-controls="collapse-1"
                    >
                        1. What Kind Of Work Can A Handyman Do?
                    </button>
                    </div>
                    <div
                    id="collapse-1"
                    className="accordion-collapse collapse show"
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
                <div className="accordion-card ">
                    <div className="accordion-header" id="collapse-item-2">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-2"
                        aria-expanded="false"
                        aria-controls="collapse-2"
                    >
                        2. Can A Handyman Do Plumbing Work?
                    </button>
                    </div>
                    <div
                    id="collapse-2"
                    className="accordion-collapse collapse "
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
                <div className="accordion-card ">
                    <div className="accordion-header" id="collapse-item-5">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-5"
                        aria-expanded="false"
                        aria-controls="collapse-5"
                    >
                        5. What is the correct height of a gas water heater?
                    </button>
                    </div>
                    <div
                    id="collapse-5"
                    className="accordion-collapse collapse "
                    aria-labelledby="collapse-item-5"
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
            <div className="col-xl-5">
                <div className="quote-form-card">
                <h4 className="form-title text-center">
                    Have Any <span className="text-theme">Other</span> Question?
                </h4>
                <form
                    action="mail.php"
                    method="POST"
                    className="contact-form ajax-contact"
                >
                    <div className="row">
                    <div className="form-group col-12">
                        <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        />
                    </div>
                    <div className="form-group col-12">
                        <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        />
                    </div>
                    <div className="form-group col-12">
                        <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={3}
                        className="form-control"
                        placeholder="Your Message"
                        defaultValue={""}
                        />
                    </div>
                    <div className="form-btn col-12">
                        <button className="themeholy-btn btn-fw">Submit Now</button>
                    </div>
                    </div>
                    <p className="form-messages mb-0 mt-3" />
                </form>
                </div>
            </div>
            </div>
        </div>
    </div>

    </>
  )
}
