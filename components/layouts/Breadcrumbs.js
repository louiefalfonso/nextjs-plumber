import React from 'react'
import Link from "next/link";
import Image from "next/image";



const Breadcrumbs = ({ breadcrumbTitle }) => {
  return (
    <>
      <div
        className="breadcumb-wrapper "
        data-bg-src="/img/bg/breadcumb-bg.webp"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">{breadcrumbTitle}</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>{breadcrumbTitle}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Breadcrumbs