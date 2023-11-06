import AboutArea from '@/components/AboutArea'
import HeroAreas from '../components/HeroAreas'
import MainFooter from '../components/MainFooter'
import MainHeader from '../components/MainHeader'
import ScrollToTop from '../components/ScrollToTop'
import ServiceArea from '@/components/ServiceArea'
import ContactArea from '@/components/ContactArea'
import FeatureArea from '@/components/FeatureArea'
import CounterArea from '@/components/CounterArea'


export default function Home() {
  return (
    <>
    <MainHeader/>
    <HeroAreas/>
    <AboutArea/>
    <ServiceArea/>
    <ContactArea/>
    <FeatureArea/>
    <CounterArea/>
    <ScrollToTop/>
    <MainFooter/>
    </>
  )
}
