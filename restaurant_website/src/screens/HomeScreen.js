import React from "react";
import Blurb from "../components/Blurb";
import InfoCard from "../components/InfoCard";
import InfoCardLeft from "../components/InfoCardLeft";
import Press from "../components/Press";
import Join from "../components/Join";
import ImageCarousel from "../components/ImageCarousel";

const HomeScreen = () => {
  const text =
    "Colletta, which means collection in Italian, is just that  a compilation of lively dining experiences. Colletta celebrates the best of Italian American dishes with welcoming hospitality and service. Seasonal changes guide the menu of scratch-made pasta made in-house daily, cheeses, antipastis, pizzas and more. Staying true to Italian dining traditions, Colletta also offers a “For the Table” dining option curated for a family-style experience, offered nightly alongside the full à la carte menu. ";

    const title1 = "Host a Party"
    const card1 = "We recommend celebrating all moments, big or small, or turning a business dinner into a festive feast. At Colletta, you don't need an excuse to gather."
    const title2 = "Menus"
    const card2 = "Come see the items featured from our scratch made kitchen."

    return (
    <div>
      <ImageCarousel home={true} />
      <Blurb text={text} />
      <InfoCard home={true} title={title1} card={card1}/>
      <InfoCardLeft home={true} title={title2} card={card2}/>
      <Press />
      <Join />
    </div>
  );
};

export default HomeScreen;
