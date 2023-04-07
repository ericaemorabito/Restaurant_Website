import React from "react";
import "../styles/menu.css";
import { Row, } from "react-bootstrap";
import { motion } from 'framer-motion';

const Menu = ({ menu }) => {
  return (
    <motion.div className="d-flex flex-column align-items-center my-5"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, transition: { delay: 0.1, duration: 1} }}
    >
      {/* Lunch Menu */}
      {menu === "lunch" && (
        <div className="menu">
          <Row>
            <h1 className="subtitle text-center mb-3">Lunch Menu</h1>
          </Row>
          <Row className="menu-row">
            <h2 className="subtitle">Antipasti</h2>
            <div className="menu-items-div">
              <p className="menu-item">
                <span className="menu-item-name">MEATBALLS </span>
                pork, and veal, tomato, polenta, parmesan, basil
                <span className="menu-item-price"> $9</span>
              </p>
              <p className="menu-item">
                <span className="menu-item-name">PEI MUSSELS </span>
                white wine, spicy tomato, saffron, preserved lemon, herbs
                <span className="menu-item-price"> $11</span>
              </p>
              <p className="menu-item">
                <span className="menu-item-name">BURRATA </span>
                oasted fall squash, arugula, parmesan, aleppo, pumpkin seed
                vinaigrette
                <span className="menu-item-price"> $11</span>
              </p>
              <p className="menu-item">
                <span className="menu-item-name">CRISPY POTATOES </span>
                cacio e pepe aioli, pecorino
                <span className="menu-item-price"> $7</span>
              </p>
            </div>
          </Row>
          <Row className="menu-row">
            <h2 className="subtitle">Pizza</h2>
            <div className="menu-items-div">
              <p className="menu-item">
                <span className="menu-item-name">MARGHERITA </span>
                san marzano tomato, mozzarella, basil
                <span className="menu-item-price"> $10</span>
              </p>
              <p className="menu-item">
                <span className="menu-item-name">CALABRESE </span>
                calabrese salami, calabrian chili, olive, mozzarella, honey
                <span className="menu-item-price"> $9</span>
              </p>
            </div>
          </Row>
        </div>
      )}

      {/* Display the Dinner Menu */}
      {menu === "dinner" && (
        <div className="menu">
          <Row>
            <h1 className="subtitle text-center mb-3">Dinner Menu</h1>
          </Row>
          <Row className="menu-row">
            <h2 className="subtitle">Antipasti</h2>
            <div className="menu-items-div">
              <p className="menu-item">
                <span className="menu-item-name">FOCACCIA </span>
                rosemary, oregano, olive oil, sea salt
                <span className="menu-item-price"> $6</span>
              </p>
              <p className="menu-item">
                <span className="menu-item-name">CAESAR </span>
                romaine, focaccia croutons, parmesan, lemon Caesar
                <span className="menu-item-price"> $14</span>
              </p>
              <p className="menu-item">
                <span className="menu-item-name">MARINATED OLIVES </span>
                castelvetarano, cerignola, arbequina, coquillo, citrus, bay
                leaf, thyme
                <span className="menu-item-price"> $8</span>
              </p>
              <p className="menu-item">
                <span className="menu-item-name">BURRATA </span>
                strawberries, radish, red pepper, arugula red wine vinaigrette,
                aged balsamic, grilled bread
                <span className="menu-item-price"> $17</span>
              </p>
            </div>
          </Row>
          <Row className="menu-row">
            <h2 className="subtitle">Pizza</h2>
            <div className="menu-items-div">
              <p className="menu-item">
                <span className="menu-item-name">MARGHERITA </span>
                san marzano tomato, mozzarella, basil
                <span className="menu-item-price"> $10</span>
              </p>
              <p className="menu-item">
                <span className="menu-item-name">CALABRESE </span>
                calabrese salami, calabrian chili, olive, mozzarella, honey
                <span className="menu-item-price"> $9</span>
              </p>
            </div>
          </Row>
          <Row className="menu-row">
            <h2 className="subtitle">Piatti</h2>
            <div className="menu-items-div">
              <p className="menu-item">
                <span className="menu-item-name">CHICKEN PARMESAN </span>
                crispy Joyce Farms breast, spaghetti, arabiatta tomato,
                mozzarella, parmesan, basil $
                <span className="menu-item-price"> $10</span>
              </p>
              <p className="menu-item">
                <span className="menu-item-name">MARKET FISH </span>
                ollards, spring vegetables, tomato brodo
                <span className="menu-item-price"> $9</span>
              </p>
              <p className="menu-item">
                <span className="menu-item-name">LASAGNA BOLOGNESE </span>
                besciamela, beef Bolognese, whipped ricotta, basil
                <span className="menu-item-price"> $34</span>
              </p>
            </div>
          </Row>
        </div>
      )}

      {/* Display the Dessert Menu */}
      {menu === "dessert" && (
        <div className="menu">
          <Row>
            <h1 className="subtitle text-center mb-3">Dessert Menu</h1>
          </Row>
          <Row className="menu-row">
            <h2 className="subtitle">Dessert</h2>
            <div className="menu-items-div">
              <p className="menu-item">
                <span className="menu-item-name">TIRAMISU </span>
                cocoa nib nougatine, coffee chocolate sauce
                <span className="menu-item-price"> $4</span>
              </p>
              <p className="menu-item">
                <span className="menu-item-name">LEMON RICOTTA CAKE </span>
                grapefruit curd, honey crema, citrus supremes
                <span className="menu-item-price"> $13</span>
              </p>
              <p className="menu-item">
                <span className="menu-item-name">CHOCOLATE BUDINO CAKE </span>
                hazelnut gelato, candied pine nuts, white chocolate pearls
                <span className="menu-item-price"> $14</span>
              </p>
              <p className="menu-item">
                <span className="menu-item-name">SWEET PANZANELLA </span>
                easonal fruit, amaretto zabaglione, almond cake,
                <span className="menu-item-price"> $10</span>
              </p>
            </div>
          </Row>
          <Row className="menu-row">
            <h2 className="subtitle">Gelato</h2>
            <div className="menu-items-div">
              <p className="menu-item">
                <span className="menu-item-name">VANILLA BEAN </span>
                olive oil, bee pollen, sea salt{" "}
                <span className="menu-item-price"> $10</span>
              </p>
              <p className="menu-item">
                <span className="menu-item-name">CHOCOLATE </span>
                coffee chocolate sauce, chocolate coated espresso bean{" "}
                <span className="menu-item-price"> $10</span>
              </p>
              <p className="menu-item">
                <span className="menu-item-name">VANILLA BEAN </span>
                caramel sauce, sea salt, pine nut praline{" "}
                <span className="menu-item-price"> $10</span>
              </p>
            </div>
          </Row>
        </div>
      )}

      {/* Display the Wine Menu */}
      {menu === "wine" && (
        <div className="menu">
          <Row>
            <h1 className="subtitle text-center mb-3">Drink Menu</h1>
          </Row>
          <Row className="menu-row">
            <h2 className="subtitle">Signature Cocktails</h2>
            <div className="menu-items-div">
              <p className="menu-item">
                <span className="menu-item-name">COSA NOSTRA </span>
                Old Forester Rye Whiskey, Campari, Montenegro, Lemon{" "}
                <span className="menu-item-price"> $9</span>
              </p>
              <p className="menu-item">
                <span className="menu-item-name">FUNNY HOW? </span>
                Svedka Vodka, Cocchi Americano, Blueberry-Thyme Syrup{" "}
                <span className="menu-item-price"> $11</span>
              </p>
              <p className="menu-item">
                <span className="menu-item-name">SWEET CAROLINE </span>
                oasted fall squash, arugula, parmesan, aleppo, pumpkin seed
                vinaigrette
                <span className="menu-item-price"> $16</span>
              </p>
              <p className="menu-item">
                <span className="menu-item-name">CRISPY POTATOES </span>
                cacio e pepe aioli, pecorino
                <span className="menu-item-price"> $7</span>
              </p>
            </div>
          </Row>
          <Row className="menu-row">
            <h2 className="subtitle">Colletta Classics</h2>
            <div className="menu-items-div">
              <p className="menu-item">
                <span className="menu-item-name">SPRITZ </span>
                Aperol, Coochi Rossa, Prosecco, Lemon, Soda{" "}
                <span className="menu-item-price"> $13</span>
              </p>
              <p className="menu-item">
                <span className="menu-item-name">NEGRONI </span>
                Gin, Campari, Carpano Antica{" "}
                <span className="menu-item-price"> $13</span>
              </p>
              <p className="menu-item">
                <span className="menu-item-name">BLACK MANHATTAN </span>
                Kentucky Bourbon, Amaro Averna, Sweet Vermouth{" "}
                <span className="menu-item-price"> $15</span>
              </p>
            </div>
          </Row>
        </div>
      )}
    </motion.div>
  );
};

export default Menu;
