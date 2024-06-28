"use client";
import React from "react";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import MobileMenu from "./MobileMenu";
import ScrollToTop from "../sections/ScrollToTop";
import Breadcrumbs from "./Breadcrumbs";

const MainLayout = ({children}) => {
  return (
    <>
      <MainHeader />
      <MobileMenu />
      {children}
      <ScrollToTop />
      <MainFooter />
    </>
  );
};

export default MainLayout;
