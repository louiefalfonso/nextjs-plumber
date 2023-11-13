import AboutArea from '@/components/AboutArea'
import CounterArea from '@/components/CounterArea'
import CtaArea from '@/components/CtaArea'
import FeaturesArea from '@/components/FeaturesArea'
import Teams from '@/components/Teams'
import TestimonialArea from '@/components/TestimonialArea'
import WorkingProcess from '@/components/WorkingProcess'
import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <>
    <div className="breadcumb-wrapper " data-bg-src="img/bg/breadcumb-bg.webp">
        <div className="container">
            <div className="breadcumb-content">
                <h1 className="breadcumb-title">About Us</h1>
                <ul className="breadcumb-menu">
                    <li><Link href="/" passHref>Home</Link></li>
                    <li>About Us</li>
                </ul>
            </div>
        </div>
    </div>
    <FeaturesArea/>
    <AboutArea/>
    <CounterArea/>
    <WorkingProcess/>
    <Teams/>
    <CtaArea/>
    <TestimonialArea/>
    </>
  )
}
