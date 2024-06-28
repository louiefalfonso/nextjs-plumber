import React from 'react'
import FullTeamList from '@/components/sections/FullTeamList'
import CtaArea from '@/components/sections/CtaArea'
import MainLayout from '@/components/layouts/MainLayout'
import Breadcrumbs from '@/components/layouts/Breadcrumbs'

export default function page() {
  return (
    <>
      <MainLayout>
        <Breadcrumbs breadcrumbTitle="Teams" />
        <FullTeamList />
        <CtaArea />
      </MainLayout>
    </>
  );
}
