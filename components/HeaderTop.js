import React from 'react'

export default function HeaderTop() {
  return (
    <>
    <div className="header-top">
      <div className="container themeholy-container">
        <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
                <div className="col-auto d-none d-lg-block">
                <p className="header-notice">
                    Welcome to Pristine Plumbing &amp; Repairing Service.
                </p>
                </div>
                <div className="col-auto">
                <div className="header-links">
                    <ul>
                    <li>
                        <i className="fal fa-clock" />
                        Work Time: Mon - Fri 09AM - 6PM
                    </li>
                    <li>
                        <div className="social-links">
                        <a href="https://www.facebook.com/" alt="Facebook">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="https://www.twitter.com/" alt="Twitter">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="https://www.linkedin.com/" alt="Linkedin">
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a href="https://www.instagram.com/" alt="Instagram">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href="https://www.youtube.com/" alt="Youtube">
                            <i className="fab fa-youtube" />
                        </a>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
        </div>
      </div>
    </div>
    </>
  )
}
