import React from 'react'
import ProjectDetails from '@/components/sections/ProjectDetails'
import MainLayout from '@/components/layouts/MainLayout'
import Breadcrumbs from '@/components/layouts/Breadcrumbs'

export default function page() {
  return (
    <>
      <MainLayout>
        <Breadcrumbs breadcrumbTitle="Kitchen Plumbing" />
        <ProjectDetails />
      </MainLayout>
    </>
  );
}
