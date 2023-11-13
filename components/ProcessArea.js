import React from 'react'

export default function ProcessArea() {
  return (
    <>
    <section className="process-sec1 bg-smoke overflow-hidden" id="process-sec" data-bg-src="img/bg/process_bg_1.jpg">
        <div className="container space">
            <div className="title-area text-center">
            <span className="sub-title">
                <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                How It’s Work
            </span>
            <h2 className="sec-title">Our Standard Working Process</h2>
            </div>
            <div className="process-card-area">
            <div className="row gx-0 gy-40 justify-content-center">
                <div className="col-md-6 col-xl-4 process-card-wrap">
                <div className="process-card">
                    <div className="process-card_img">
                    <img src="img/normal/process_card_1.webp" alt="Image" />
                    <div className="process-card_icon">
                        <img src="img/icon/process_card_1.svg" alt="icon" />
                    </div>
                    </div>
                    <h2 className="box-title">Online Booking</h2>
                    <p className="process-card_text">
                    Online booking typically involves selecting a date and time,
                    choosing from available options, providing personal.
                    </p>
                </div>
                </div>
                <div className="col-md-6 col-xl-4 process-card-wrap">
                <div className="process-card">
                    <div className="process-card_img">
                    <img src="img/normal/process_card_2.webp" alt="Image" />
                    <div className="process-card_icon">
                        <img src="img/icon/process_card_2.svg" alt="icon" />
                    </div>
                    </div>
                    <h2 className="box-title">Inspect &amp; Analyze</h2>
                    <p className="process-card_text">
                    Inspect and analyze refers to the process of examining something
                    closely in order to gain a better understanding.
                    </p>
                </div>
                </div>
                <div className="col-md-6 col-xl-4 process-card-wrap">
                <div className="process-card">
                    <div className="process-card_img">
                    <img src="img/normal/process_card_3.webp" alt="Image" />
                    <div className="process-card_icon">
                        <img src="img/icon/process_card_3.svg" alt="icon" />
                    </div>
                    </div>
                    <h2 className="box-title">Solving Problem</h2>
                    <p className="process-card_text">
                    Solving a problem refers to the process of finding a solution to a
                    particular issue or challenge that is preventing outcome.
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
