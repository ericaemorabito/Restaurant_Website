import React from 'react'
import Blurb from '../components/Blurb'
import InfoCard from '../components/InfoCard'
import InfoCardLeft from '../components/InfoCardLeft'
import ImageCarousel from '../components/ImageCarousel'
import Team from '../components/Team'

const AboutScreen = () => {

  const text = "about text here"
  const title1 = 'COLLETTA CARY'
  const card1 = 'Seasonal changes, outstanding ingredients and a made-from-scratch philosophy guide our menu of house-made focaccia and pasta, antipastis, made-to-order wood-fired pizzas, and piatti. The chef curated dinner and dessert menus, pair with the well balanced wine and beverage program.'
  const title2 = 'COLLETTA ATLANTA'
  const card2 = 'Located at Avalon in Alpharetta, GA, Colleta Atlantas restaurants open-concept dining room is anchored around the kitchens wood-burning oven, reminiscent of the hearth in a family home. Accented by reclaimed barn wood and refined ceramic tile, the modern space envelops guests in a welcoming atmosphere whether theyre visiting the bar for a hand-crafted cocktail or a glass of wine, grabbing a pizza with the kids or sitting down for a family-style dinner with friends and colleagues.'
  
  return (
    <div>
      <ImageCarousel home={false}/>
      <Blurb text={text} />
      <InfoCard home={false} title={title1} card={card1}/>
      <InfoCardLeft home={false} title={title2} card={card2}/>
      <Team />
    </div>
  )
}

export default AboutScreen