import React from 'react'
import Link from 'next/link'
import ProjectDetails from '@/components/ProjectDetails'

export default function page() {
  return (
    <>
    <div className="breadcumb-wrapper " data-bg-src="../img/bg/breadcumb-bg.jpg">
        <div className="container">
            <div className="breadcumb-content">
                <h1 className="breadcumb-title">Kitchen Plumbing</h1>
                <ul className="breadcumb-menu">
                    <li><Link href="/" passHref>Home</Link></li>
                    <li><Link href="/services" passHref>Services</Link></li>
                    <li>Kitchen Plumbing</li>
                </ul>
            </div>
        </div>
    </div>
    <ProjectDetails/>
    </>
  )
}
