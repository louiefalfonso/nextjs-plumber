import React from 'react'

export default function FeatureArea() {
  return (
    <>
    <div className="overflow-hidden space">
        <div className="container">
            <div className="row align-items-center flex-row-reverse">
            <div className="col-xl-6 mb-40 mb-xl-0">
                <div className="img-box2">
                <div className="img1">
                    <img src="img/normal/why_1_1.jpg" alt="Why" />
                    <div className="shape1">
                    <img src="img/normal/why_1_3.png" alt="Why" />
                    </div>
                </div>
                <div className="img2 themeholy-video">
                    <img src="img/normal/why_1_2.jpg" alt="Why" />
                    <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="play-btn popup-video"
                    >
                    <i className="fas fa-play" />
                    </a>
                </div>
                <div className="choose-box">
                    <div className="choose-box_number">24</div>
                    <span className="choose-box_text">Hours Emergency Services</span>
                </div>
                </div>
            </div>
            <div className="col-xl-6 text-center text-xl-start">
                <div className="title-area mb-30">
                <span className="sub-title">
                    <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                    Why Choosing Our Services
                </span>
                <h2 className="sec-title">
                    The Perfect Solutions For All Plumbing Services
                </h2>
                </div>
                <p className="mt-n2 mb-30">
                Leaking or broken plumbing can cause a lot of stress and inconvenience
                for homeowners. That's why it's important to choose a plumbing service
                that you can trust to provide expert, reliable service.
                </p>
                <div className="choose-feature-wrap">
                <div className="choose-feature">
                    <div className="choose-feature_icon">
                    <img src="img/icon/choose_feature_1.svg" alt="Icon" />
                    </div>
                    <h3 className="box-title">Affordable Price</h3>
                    <p className="choose-feature_text">
                    We provide pricing &amp; detailed estimates, so know what expect
                    work begins.
                    </p>
                </div>
                <div className="choose-feature">
                    <div className="choose-feature_icon">
                    <img src="img/icon/choose_feature_2.svg" alt="Icon" />
                    </div>
                    <h3 className="box-title">Expert Plumber</h3>
                    <p className="choose-feature_text">
                    Our plumbers are licensed, and have years of experience all types
                    plumbing.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
