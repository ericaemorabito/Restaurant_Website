import React from "react";
import Blurb from "../components/Blurb";
import InfoCard from "../components/InfoCard";
import InfoCardLeft from "../components/InfoCardLeft";
import ImageCarousel from "../components/ImageCarousel";
import Team from "../components/Team";
import foccacia from "../images/foccaccia.jpeg";
import chef from "../images/chef.jpeg";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";

const AboutScreen = () => {
  const text =
    "Our mission is to give every customer a wonderful dining experience. Come enjoy the wonderful world of Italian cuisine. Eat comfort food with exquisite ingredients prepared fresh daily by our talented team of chefs.";
  const title1 = "QUALITY";
  const card1 =
    "Seasonal changes, outstanding ingredients and a made-from-scratch philosophy guide our menu of house-made focaccia and pasta, antipastis, made-to-order wood-fired pizzas, and piatti.";
  const title2 = "COMFORT";
  const card2 =
    "Located at Avalon in Alpharetta, GA, Colleta Atlantas restaurants open-concept dining room is anchored around the kitchens wood-burning oven, reminiscent of the hearth in a family home. .";

  return (
    <Container fluid>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.2 } }}
      >
        <ImageCarousel home={false} />
        <Blurb about={true} text={text} />
        <InfoCard home={false} title={title1} card={card1} image={foccacia} />
        <InfoCardLeft home={false} title={title2} card={card2} image={chef} />
        <Team />
      </motion.div>
    </Container>
  );
};

export default AboutScreen;
