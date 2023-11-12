import React from 'react'
import Link from 'next/link'

export default function ProjectDetails() {
  return (
    <>
    <section className="space-top space-extra-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-lg-8">
            <div className="page-single">
              <div className="page-img">
                <img
                  src="../img/service/service_details.jpg"
                  alt="Service Image"
                />
              </div>
              <div className="page-content">
                <h2 className="h3 page-title">Bathroom Plumbing</h2>
                <p>
                  Bathroom Plumbing refers to the plumbing system installed in a
                  basement, which includes the pipes, valves, and fixtures that
                  supply water and remove waste. Basements are typically located
                  below ground level, which can pose unique challenges for plumbing
                  installation and maintenance.
                </p>
                <p className="mb-30">
                  Bathroom Plumbing may include the installation of a sump pump to
                  prevent flooding, as well as a sewage ejector pump to remove waste
                  from bathroom plumbing fixtures such as toilets, sinks, and
                  showers. Additionally, a basement may have a water heater, washing
                  machine, or other water-using appliances that require plumbing
                  connections.
                </p>
                <div className="row">
                  <div className="col-md-6 mb-30">
                    <img
                      className="w-100"
                      src="../img/service/service_inner_1.jpg"
                      alt="service"
                    />
                  </div>
                  <div className="col-md-6 mb-30">
                    <img
                      className="w-100"
                      src="../img/service/service_inner_2.jpg"
                      alt="service"
                    />
                  </div>
                </div>
                <p className="mb-4">
                  Common issues with basement plumbing can include leaks, clogs, and
                  backups, which can cause water damage and health hazards if not
                  addressed promptly. To prevent these issues, it's important to
                  properly maintain your basement plumbing system by cleaning your
                  drains regularly, checking for leaks, and repairing any damage or
                  malfunctions as soon as they are detected.
                </p>
                <h3 className="h4 mb-20">
                  Our Commercial Plumbing is always guaranteed.
                </h3>
                <p className="mb-4">
                  If you're experiencing plumbing issues in your basement, it's best
                  to call a licensed plumber to assess the situation and make any
                  necessary repairs. A professional plumber can help you identify
                  the cause of the problem and ensure that your basement plumbing
                  system is functioning properly and safely.
                </p>
                <div className="row mb-20">
                  <div className="col-md-6 mb-10">
                    <div className="checklist">
                      <ul>
                        <li>
                          <i className="fas fa-badge-check" /> We provide the most
                          reasonable cost.
                        </li>
                        <li>
                          <i className="fas fa-badge-check" /> Finish work before
                          Deadline.
                        </li>
                        <li>
                          <i className="fas fa-badge-check" /> The certified
                          materials in a timely.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 mb-10">
                    <div className="checklist">
                      <ul>
                        <li>
                          <i className="fas fa-badge-check" /> Dedicated and skilled
                          professionals
                        </li>
                        <li>
                          <i className="fas fa-badge-check" /> Offering all jobs
                          guaranteed &amp; neatly done
                        </li>
                        <li>
                          <i className="fas fa-badge-check" /> We provide 24/7 on
                          time services
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="service-feature-wrap">
                  <div className="service-feature">
                    <div className="service-feature_icon">
                      <img src="../img/icon/service_feature_1.svg" alt="icon" />
                    </div>
                    <div className="media-body">
                      <h4 className="service-feature_title">Installation</h4>
                      <p className="service-feature_text">
                        Interactively predominate out-of the box best practices.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature_icon">
                      <img src="../img/icon/service_feature_2.svg" alt="icon" />
                    </div>
                    <div className="media-body">
                      <h4 className="service-feature_title">Cleaning</h4>
                      <p className="service-feature_text">
                        Interactively predominate out-of the box best practices.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature_icon">
                      <img src="../img/icon/service_feature_3.svg" alt="icon" />
                    </div>
                    <div className="media-body">
                      <h4 className="service-feature_title">Replacing</h4>
                      <p className="service-feature_text">
                        Interactively predominate out-of the box best practices.
                      </p>
                    </div>
                  </div>
                  <div className="service-feature">
                    <div className="service-feature_icon">
                      <img src="../img/icon/service_feature_4.svg" alt="icon" />
                    </div>
                    <div className="media-body">
                      <h4 className="service-feature_title">Repairing</h4>
                      <p className="service-feature_text">
                        Interactively predominate out-of the box best practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-4">
            <aside className="sidebar-area">
              
              <div
                className="widget widget_call  "
                data-bg-src="../img/bg/widget_bg_1.jpg"
              >
                <div className="widget-call">
                  <h4 className="box-title">Emergency Plumbing?</h4>
                  <div className="play-btn">
                    <i className="fa-solid fa-phone" />
                  </div>
                  <a href={+16326543654} className="call">
                    +163-2654-3654
                  </a>
                  <p className="text">
                    Contact the plumber or plumbing company to schedule a service
                    call. Be prepared to provide help about the problem.
                  </p>
                  <Link href="/" passHref className="themeholy-btn style3">Get a Quote</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
