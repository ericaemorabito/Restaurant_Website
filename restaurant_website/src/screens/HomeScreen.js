import React from 'react'
import Blurb from '../components/Blurb'
import InfoCard from '../components/InfoCard'
import InfoCardLeft from '../components/InfoCardLeft'
import Press from '../components/Press'

const HomeScreen = () => {
  return (
    <div>
      <h1>Colletta</h1>
      <Blurb></Blurb>
      <InfoCard/>
      <InfoCardLeft />
      <Press />
    </div>
  )
}

export default HomeScreen