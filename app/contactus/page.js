import React from 'react'
import ContactInfoArea from '@/components/sections/ContactInfoArea'
import MapContactArea from '@/components/sections/MapContactArea'
import CounterArea from '@/components/sections/CounterArea'
import MainLayout from '@/components/layouts/MainLayout'
import Breadcrumbs from '@/components/layouts/Breadcrumbs'

export default function page() {
  return (
    <>
      <MainLayout>
        <Breadcrumbs breadcrumbTitle="Contact Us" />
        <ContactInfoArea />
        <MapContactArea />
        <CounterArea />
      </MainLayout>
    </>
  );
}
