import React from 'react'
import ServiceLists from '@/components/sections/ServiceLists'
import CtaArea from '@/components/sections/CtaArea'
import MainLayout from '@/components/layouts/MainLayout'
import Breadcrumbs from '@/components/layouts/Breadcrumbs'

export default function page() {
  return (
    <>
      <MainLayout>
        <Breadcrumbs breadcrumbTitle="Services" />
        <ServiceLists />
        <CtaArea />
      </MainLayout>
    </>
  );
}
