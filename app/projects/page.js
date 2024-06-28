import React from 'react'
import Link from 'next/link'
import ProjectList from '@/components/sections/ProjectList'
import CtaArea from '@/components/sections/CtaArea'
import MainLayout from '@/components/layouts/MainLayout'
import Breadcrumbs from '@/components/layouts/Breadcrumbs'

export default function page() {
  return (
    <>
      <MainLayout>
        <Breadcrumbs breadcrumbTitle="Projects"/>
        <ProjectList />
        <CtaArea />
      </MainLayout>
    </>
  );
}
