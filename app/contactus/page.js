import React from 'react'
import Link from 'next/link'
import ContactInfoArea from '@/components/ContactInfoArea'
import MapContactArea from '@/components/MapContactArea'
import CounterArea from '@/components/CounterArea'

export default function page() {
  return (
    <>
    <div className="breadcumb-wrapper " data-bg-src="img/bg/breadcumb-bg.webp">
        <div className="container">
            <div className="breadcumb-content">
                <h1 className="breadcumb-title">Contact Us</h1>
                <ul className="breadcumb-menu">
                    <li><Link href="/" passHref>Home</Link></li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    </div>
    <ContactInfoArea/>
    <MapContactArea/>
    <CounterArea/>
    </>
  )
}
