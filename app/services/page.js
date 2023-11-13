import React from 'react'
import Link from 'next/link'
import ServiceLists from '@/components/ServiceLists'
import CtaArea from '@/components/CtaArea'

export default function page() {
  return (
    <>
    <div className="breadcumb-wrapper " data-bg-src="img/bg/breadcumb-bg.webp">
        <div className="container">
            <div className="breadcumb-content">
                <h1 className="breadcumb-title">Services</h1>
                <ul className="breadcumb-menu">
                    <li><Link href="/" passHref>Home</Link></li>
                    <li>Services</li>
                </ul>
            </div>
        </div>
    </div>
    <ServiceLists/>
    <CtaArea/>
    </>
  )
}
