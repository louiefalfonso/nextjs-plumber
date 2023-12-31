import React from 'react'
import Link from 'next/link'
import ProjectList from '@/components/ProjectList'
import CtaArea from '@/components/CtaArea'

export default function page() {
  return (
    <>
    <div className="breadcumb-wrapper " data-bg-src="img/bg/breadcumb-bg.webp">
        <div className="container">
            <div className="breadcumb-content">
                <h1 className="breadcumb-title">Projects</h1>
                <ul className="breadcumb-menu">
                    <li><Link href="/" passHref>Home</Link></li>
                    <li>Projects</li>
                </ul>
            </div>
        </div>
    </div>
    <ProjectList/>
    <CtaArea/>
    </>
  )
}
