import React from 'react'

export default function TestimonialArea() {
  return (
    <>
    <section className="space">
        <div className="shape-mockup" data-bottom={0} data-left={0}>
            <img src="img/shape/tap_2.png" alt="shape" />
        </div>
        <div className="container">
            <div className="title-area text-center">
            <span className="sub-title">
                <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                Testimonials
            </span>
            <h2 className="sec-title">What Our Customer Says?</h2>
            </div>
            <div
            className="row themeholy-carousel"
            data-slide-show={2}
            data-lg-slide-show={1}
            data-md-slide-show={1}
            data-arrows="true"
            >
            <div className="col-lg-6">
                <div className="testi-card">
                <div className="testi-card_quote">
                    <img src="img/icon/quote_1.svg" alt="quote" />
                </div>
                <div className="testi-card_avater">
                    <img src="img/testimonial/testi_1_1.jpg" alt="testimonial" />
                    <div className="testi-card_review">
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    </div>
                </div>
                <div className="testi-card_content">
                    <h3 className="testi-card_name">Alex Farnandes</h3>
                    <span className="testi-card_desig">UI/UX Designer</span>
                    <p className="testi-card_text">
                    The plumber arrived on time and was very professional and
                    friendly. He quickly diagnosed the problem and provided me with a
                    clear explanation of what needed to be done. He was able to
                    complete the repairs.
                    </p>
                </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="testi-card">
                <div className="testi-card_quote">
                    <img src="img/icon/quote_1.svg" alt="quote" />
                </div>
                <div className="testi-card_avater">
                    <img src="img/testimonial/testi_1_2.jpg" alt="testimonial" />
                    <div className="testi-card_review">
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    </div>
                </div>
                <div className="testi-card_content">
                    <h3 className="testi-card_name">Abraham Khalil</h3>
                    <span className="testi-card_desig">CEO at Corola</span>
                    <p className="testi-card_text">
                    If you are looking for a reliable and efficient plumbing service,
                    look no further than XYZ Plumbing. I recently had an issue with my
                    kitchen sink that was causing water to leak onto my floor. I
                    called XYZ Plumbing.
                    </p>
                </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="testi-card">
                <div className="testi-card_quote">
                    <img src="img/icon/quote_1.svg" alt="quote" />
                </div>
                <div className="testi-card_avater">
                    <img src="img/testimonial/testi_1_3.jpg" alt="testimonial" />
                    <div className="testi-card_review">
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    </div>
                </div>
                <div className="testi-card_content">
                    <h3 className="testi-card_name">Mariana Sonia</h3>
                    <span className="testi-card_desig">UI/UX Designer</span>
                    <p className="testi-card_text">
                    Overall, I was very impressed with the service I received from XYZ
                    Plumbing. The staff was friendly and knowledgeable, and the work
                    was completed quickly and effectively. I would highly recommend
                    this plumbing.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
