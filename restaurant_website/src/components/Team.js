import React from "react";
import "../styles/team.css";
import { Container, Row, Col } from "react-bootstrap";
import headchef from "../images/team/headchef.jpeg";
import souschef from "../images/team/luis.jpeg";
import pastrychef from "../images/team/pastrychef.jpeg";
import manager from "../images/team/manager.jpeg";
import { motion } from 'framer-motion';

const team = [
  {
    id: 1,
    name: "Tom",
    job: "Head Chef",
    image: headchef,
  },
  {
    id: 1,
    name: "Lola",
    job: "Pastry Chef",
    image: pastrychef,
  },
  {
    id: 1,
    name: "Derek",
    job: "Sous Chef",
    image: souschef,
  },
  {
    id: 1,
    name: "Maria",
    job: "Manager",
    image: manager,
  },
];

const Team = () => {

  return (
    <Container>
      <motion.div className="row team-row"  initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.1, duration: 1} }}>
        <h3 className="text-center mt-5 subtitle">Team</h3>

        {team.map((employee) => (
          <Col sm={6} m={6} lg={3}>
            <div className="employee-card d-flex flex-column justify-content-center align-items-center">
              <div id={employee.name} className="employee-image-card" >
                <img className="employee-image" src={employee.image} alt={employee.name}></img>
              </div>
              <h4 className="mt-2 employee-name">{employee.name}</h4>
              <p className="employee-job">{employee.job}</p>
            </div>
          </Col>
        ))}
      </motion.div>
    </Container>
  );
};

export default Team;
