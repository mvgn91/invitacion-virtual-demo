import React, { Suspense, lazy } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Lazy loading para componentes pesados
const Hero = lazy(() => import('./components/Hero'))
const Countdown = lazy(() => import('./components/Countdown'))
const EventLocations = lazy(() => import('./components/EventLocations'))
const DressCode = lazy(() => import('./components/DressCode'))
const GiftRegistry = lazy(() => import('./components/GiftRegistry'))
const RSVP = lazy(() => import('./components/RSVP'))
const DemoDisclaimer = lazy(() => import('./components/DemoDisclaimer'))
const SiteTour = lazy(() => import('./components/SiteTour'))

// Componente de carga optimizado
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-400"></div>
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-[#f5f0ec] dark:bg-[#1c1917] text-stone-800 dark:text-stone-200 font-poppins">
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div className="h-32"></div>}>
        <Countdown />
      </Suspense>
      <Suspense fallback={<div className="h-32"></div>}>
        <EventLocations />
      </Suspense>
      <Suspense fallback={<div className="h-32"></div>}>
        <DressCode />
      </Suspense>
      <Suspense fallback={<div className="h-32"></div>}>
        <GiftRegistry />
      </Suspense>
      <Suspense fallback={<div className="h-32"></div>}>
        <RSVP />
      </Suspense>
      <Suspense fallback={<div className="h-32"></div>}>
        <DemoDisclaimer />
      </Suspense>
      <Suspense fallback={null}>
        <SiteTour />
      </Suspense>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
