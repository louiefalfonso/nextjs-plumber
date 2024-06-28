import React from 'react'

export default function CounterArea() {
  return (
    <>
    <div className="bg-smoke">
        <div className="container">
            <div className="counter-card-wrap">
                <div className="counter-card">
                    <h2 className="counter-card_number">
                    <span className="counter-number">1.25</span>k
                    </h2>
                    <span className="counter-card_text">Successful Projects</span>
                </div>
                <div className="counter-card">
                    <h2 className="counter-card_number">
                    <span className="counter-number">1.24</span>k
                    </h2>
                    <span className="counter-card_text">Satisfied Customer</span>
                </div>
                <div className="counter-card">
                    <h2 className="counter-card_number">
                    <span className="counter-number">250</span>+
                    </h2>
                    <span className="counter-card_text">Expert Plumbers</span>
                </div>
                <div className="counter-card">
                    <h2 className="counter-card_number">
                    <span className="counter-number">100</span>%
                    </h2>
                    <span className="counter-card_text">Quality Products</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
