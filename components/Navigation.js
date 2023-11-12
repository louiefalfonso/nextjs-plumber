import React from 'react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <>
    <nav className="main-menu d-none d-lg-inline-block">
        <ul>
            <li><Link href="/" passHref>Home</Link></li>
            <li><Link href="/aboutus" passHref>About Us</Link></li>
            <li><Link href="/services" passHref className="menu-item-has-children" >Services</Link>
                <ul className="sub-menu">
                    <li><Link href="/services/bathroom-plumbing" passHref>Bathroom Plumbing</Link></li>
                    <li><Link href="/services/drain-plumbing" passHref>Drain Plumbing</Link></li>
                    <li><Link href="/services/waterline-repair" passHref>Water Line Repair</Link></li>
                    <li><Link href="/services/kitchen-plumbing" passHref>Kitchen Plumbing</Link></li>
                    <li><Link href="/services/gasline-services" passHref>Gas Line Services</Link></li>
                    <li><Link href="/services/pipe-cleaning" passHref>Pipe Cleaning</Link></li>
                </ul>
            </li>
            <li><Link href="/projects" passHref>Projects</Link></li>
            <li><Link href="/teams" passHref>Teams</Link></li>
            <li><Link href="/faq" passHref>FAQ</Link></li>
            <li><Link href="/contactus" passHref>Contact Us</Link></li>
        </ul>
      </nav>
    </>
  )
}
