import React from 'react'
import Link from 'next/link'
import ProjectDetails from '@/components/sections/ProjectDetails'
import MainLayout from '@/components/layouts/MainLayout'
import Breadcrumbs from '@/components/layouts/Breadcrumbs'

export default function page() {
  return (
    <>
      <MainLayout>
        <Breadcrumbs breadcrumbTitle="Pipe Cleaning" />
        <ProjectDetails />
      </MainLayout>
    </>
  );
}
