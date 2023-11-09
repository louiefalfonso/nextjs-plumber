import AboutArea from '@/components/AboutArea'
import ContactArea from '@/components/ContactArea'
import CounterArea from '@/components/CounterArea'
import FeaturesArea from '@/components/FeaturesArea'
import ProcessArea from '@/components/ProcessArea'
import TeamArea from '@/components/TeamArea'
import React from 'react'

export default function page() {
  return (
    <>
    <div class="breadcumb-wrapper " data-bg-src="img/bg/breadcumb-bg.jpg">
        <div class="container">
            <div class="breadcumb-content">
                <h1 class="breadcumb-title">About Us</h1>
                <ul class="breadcumb-menu">
                    <li><a href="home-plumbing-service.html">Home</a></li>
                    <li>About Us</li>
                </ul>
            </div>
        </div>
    </div>
    <FeaturesArea/>
    <AboutArea/>
    <CounterArea/>
    <ProcessArea/>
    <ContactArea/>
    <TeamArea/>
    </>
  )
}
