import React from "react";
import AboutArea from "@/components/sections/AboutArea";
import CounterArea from "@/components/sections/CounterArea";
import CtaArea from "@/components/sections/CtaArea";
import FeaturesArea from "@/components/sections/FeaturesArea";
import Teams from "@/components/sections/Teams";
import TestimonialArea from "@/components/sections/TestimonialArea";
import WorkingProcess from "@/components/sections/WorkingProcess";
import MainLayout from "@/components/layouts/MainLayout";
import Breadcrumbs from "@/components/layouts/Breadcrumbs";

const page = () => {
  return (
    <>
      <MainLayout>
        <Breadcrumbs breadcrumbTitle="About Us" />
        <FeaturesArea />
        <AboutArea />
        <CounterArea />
        <WorkingProcess />
        <Teams />
        <CtaArea />
        <TestimonialArea />
      </MainLayout>
    </>
  );
};

export default page;
