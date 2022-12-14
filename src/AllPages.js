import React, {useRef} from 'react'
import AboutUsScreen from './components/aboutUsScreen/AboutUsScreen'
import HomeScreen from './components/HomeScreen/HomeScreen'
import OfferScreen from './components/OfferScreen/OfferScreen'

function AllPages() {

  const home = useRef(null)
  const aboutUs = useRef(null)
  const cennik = useRef(null)

  const scrollToSection = section => {
    window.scrollTo({
      top: section.current.offsetTop,
      bahavior: "smooth"
    })
  }

  return (
    <div>
        <HomeScreen
          home={home}
          aboutUs={aboutUs}
          cennik={cennik}
          scrollToSection={scrollToSection}
        />
        <AboutUsScreen
          aboutUs={aboutUs}
        />
        <OfferScreen
          cennik={cennik}
        />
    </div>
  )
}

export default AllPages