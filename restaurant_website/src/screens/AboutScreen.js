import React from 'react'
import Blurb from '../components/Blurb'
import InfoCard from '../components/InfoCard'
import InfoCardLeft from '../components/InfoCardLeft'
import ImageCarousel from '../components/ImageCarousel'
import Team from '../components/Team'

const AboutScreen = () => {

  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  const title1 = 'QUALITY'
  const card1 = 'Seasonal changes, outstanding ingredients and a made-from-scratch philosophy guide our menu of house-made focaccia and pasta, antipastis, made-to-order wood-fired pizzas, and piatti.'
  const title2 = 'COMFORT'
  const card2 = 'Located at Avalon in Alpharetta, GA, Colleta Atlantas restaurants open-concept dining room is anchored around the kitchens wood-burning oven, reminiscent of the hearth in a family home. .'
  
  return (
    <div>
      <ImageCarousel home={false}/>
      <Blurb about={true} text={text} />
      <InfoCard home={false} title={title1} card={card1}/>
      <InfoCardLeft home={false} title={title2} card={card2}/>
      <Team />
    </div>
  )
}

export default AboutScreen