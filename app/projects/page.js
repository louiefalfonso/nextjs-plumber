import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <>
    <div className="breadcumb-wrapper " data-bg-src="img/bg/breadcumb-bg.jpg">
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
    </>
  )
}
