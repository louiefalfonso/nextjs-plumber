import React from 'react'
import Link from 'next/link'
import FullTeamList from '@/components/FullTeamList'
import CtaArea from '@/components/CtaArea'

export default function page() {
  return (
    <>
    <div className="breadcumb-wrapper " data-bg-src="img/bg/breadcumb-bg.webp">
        <div className="container">
            <div className="breadcumb-content">
                <h1 className="breadcumb-title">Teams</h1>
                <ul className="breadcumb-menu">
                    <li><Link href="/" passHref>Home</Link></li>
                    <li>Teams</li>
                </ul>
            </div>
        </div>
    </div>
    <FullTeamList/>
    <CtaArea/>
    </>
  )
}
