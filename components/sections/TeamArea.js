import React from 'react'
import Link from 'next/link'

export default function TeamArea() {
  return (
    <>
    <section className="space" data-bg-src="/img/bg/team_bg_1.jpg" data-overlay="title" data-opacity={9}>
    <div className="shape-mockup z-index-3" data-bottom={0} data-right={0}>
      <img src="img/shape/line_shape_1.png" alt="shape" />
    </div>
    <div className="shape-mockup z-index-3" data-top={0} data-left={0}>
      <img src="img/shape/line_shape_2.png" alt="shape" />
    </div>
    <div className="container z-index-common">
      <div className="title-area text-center">
        <span className="sub-title">
          <img src="img/theme-img/title_shape_1.svg" alt="shape" />
          Expert Team
        </span>
        <h2 className="sec-title text-white">Meet The Expert Plumber</h2>
      </div>
      <div
        className="row slider-shadow themeholy-carousel"
        data-slide-show={4}
        data-lg-slide-show={3}
        data-md-slide-show={2}
        data-sm-slide-show={2}
        data-xs-slide-show={1}
        data-arrows="true"
      >
        {/* Single Item */}
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="themeholy-team team-card">
            <div className="team-img">
              <img src="img/team/team_1_1.jpg" alt="Team" />
              <div className="themeholy-social">
                <Link href="https://facebook.com/" passHref><i className="fab fa-facebook-f" /></Link>
                <Link href="https://twitter.com/" passHref><i className="fab fa-twitter" /></Link>
                <Link href="https://instagram.com/" passHref><i className="fab fa-instagram" /></Link>
                <Link href="https://linkedin.com/" passHref><i className="fab fa-linkedin-in" /></Link>
              </div>
            </div>
            <div className="team-content">
              <div className="share-btn">
                <i className="fa-light fa-share-nodes" />
              </div>
              <div className="media-body">
                <h3 className="box-title">
                  <a href="team-details.html">Rokie Royals</a>
                </h3>
                <span className="team-desig">Plumber</span>
              </div>
            </div>
          </div>
        </div>
        {/* Single Item */}
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="themeholy-team team-card">
            <div className="team-img">
              <img src="img/team/team_1_2.jpg" alt="Team" />
              <div className="themeholy-social">
                <Link href="https://facebook.com/" passHref><i className="fab fa-facebook-f" /></Link>
                <Link href="https://twitter.com/" passHref><i className="fab fa-twitter" /></Link>
                <Link href="https://instagram.com/" passHref><i className="fab fa-instagram" /></Link>
                <Link href="https://linkedin.com/" passHref><i className="fab fa-linkedin-in" /></Link>
              </div>
            </div>
            <div className="team-content">
              <div className="share-btn">
                <i className="fa-light fa-share-nodes" />
              </div>
              <div className="media-body">
                <h3 className="box-title">
                  <a href="team-details.html">Jesica Sinthiya</a>
                </h3>
                <span className="team-desig">Electrician</span>
              </div>
            </div>
          </div>
        </div>
        {/* Single Item */}
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="themeholy-team team-card">
            <div className="team-img">
              <img src="img/team/team_1_3.jpg" alt="Team" />
              <div className="themeholy-social">
                <Link href="https://facebook.com/" passHref><i className="fab fa-facebook-f" /></Link>
                <Link href="https://twitter.com/" passHref><i className="fab fa-twitter" /></Link>
                <Link href="https://instagram.com/" passHref><i className="fab fa-instagram" /></Link>
                <Link href="https://linkedin.com/" passHref><i className="fab fa-linkedin-in" /></Link>
              </div>
            </div>
            <div className="team-content">
              <div className="share-btn">
                <i className="fa-light fa-share-nodes" />
              </div>
              <div className="media-body">
                <h3 className="box-title">
                  <a href="team-details.html">Alex Michel</a>
                </h3>
                <span className="team-desig">Carpenter</span>
              </div>
            </div>
          </div>
        </div>
        {/* Single Item */}
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="themeholy-team team-card">
            <div className="team-img">
              <img src="img/team/team_1_4.jpg" alt="Team" />
              <div className="themeholy-social">
                <Link href="https://facebook.com/" passHref><i className="fab fa-facebook-f" /></Link>
                <Link href="https://twitter.com/" passHref><i className="fab fa-twitter" /></Link>
                <Link href="https://instagram.com/" passHref><i className="fab fa-instagram" /></Link>
                <Link href="https://linkedin.com/" passHref><i className="fab fa-linkedin-in" /></Link>
              </div>
            </div>
            <div className="team-content">
              <div className="share-btn">
                <i className="fa-light fa-share-nodes" />
              </div>
              <div className="media-body">
                <h3 className="box-title">
                  <a href="team-details.html">Henry Joseph</a>
                </h3>
                <span className="team-desig">Plumber</span>
              </div>
            </div>
          </div>
        </div>
        {/* Single Item */}
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="themeholy-team team-card">
            <div className="team-img">
              <img src="img/team/team_1_5.jpg" alt="Team" />
              <div className="themeholy-social">
                <Link href="https://facebook.com/" passHref><i className="fab fa-facebook-f" /></Link>
                <Link href="https://twitter.com/" passHref><i className="fab fa-twitter" /></Link>
                <Link href="https://instagram.com/" passHref><i className="fab fa-instagram" /></Link>
                <Link href="https://linkedin.com/" passHref><i className="fab fa-linkedin-in" /></Link>
              </div>
            </div>
            <div className="team-content">
              <div className="share-btn">
                <i className="fa-light fa-share-nodes" />
              </div>
              <div className="media-body">
                <h3 className="box-title">
                  <a href="team-details.html">Sanjida Carlose</a>
                </h3>
                <span className="team-desig">Plumber</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
  )
}
