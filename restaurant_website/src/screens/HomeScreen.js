import React from 'react'
import Blurb from '../components/Blurb'
import InfoCard from '../components/InfoCard'
import InfoCardLeft from '../components/InfoCardLeft'
import Press from '../components/Press'
import Join from '../components/Join'
import ImageCarousel from '../components/ImageCarousel'

const HomeScreen = () => {
  return (
    <div>
      <ImageCarousel/>
      <Blurb />
      <InfoCard/>
      <InfoCardLeft />
      <Press />
      <Join />
    </div>
  )
}

export default HomeScreen