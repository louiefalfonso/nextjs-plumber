import React from 'react'
import Link from 'next/link'
import FullFaqArea from '@/components/FullFaqArea'
import CtaArea from '@/components/CtaArea'
export default function page() {
  return (
    <>
    <div className="breadcumb-wrapper " data-bg-src="img/bg/breadcumb-bg.jpg">
        <div className="container">
            <div className="breadcumb-content">
                <h1 className="breadcumb-title">Frequently Asked Questions</h1>
                <ul className="breadcumb-menu">
                    <li><Link href="/" passHref>Home</Link></li>
                    <li>FAQ (Frequently Asked Questions)</li>
                </ul>
            </div>
        </div>
    </div>
    <FullFaqArea/>
    <CtaArea/>
    </>
  )
}
