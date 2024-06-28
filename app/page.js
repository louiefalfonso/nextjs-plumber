import AboutArea from '@/components/sections/AboutArea'
import HeroAreas from '../components/sections/HeroAreas'
import ServiceArea from '@/components/sections/ServiceArea'
import ContactArea from '@/components/sections/ContactArea'
import FeatureArea from '@/components/sections/FeatureArea'
import CounterArea from '@/components/sections/CounterArea'
import TeamArea from '@/components/sections/TeamArea'
import FaqArea from '@/components/sections/FaqArea'
import ProcessArea from '@/components/sections/ProcessArea'
import ProjectArea from '@/components/sections/ProjectArea'
import TestimonialArea from '@/components/sections/TestimonialArea'
import CtaArea from '@/components/sections/CtaArea'
import MainLayout from '@/components/layouts/MainLayout'


export default function Home() {
  return (
    <>
      <MainLayout>
        <HeroAreas />
        <AboutArea />
        <ServiceArea />
        <ContactArea />
        <FeatureArea />
        <CounterArea />
        <TeamArea />
        <FaqArea />
        <ProcessArea />
        <ProjectArea />
        <TestimonialArea />
        <CtaArea />
      </MainLayout>
    </>
  );
}
