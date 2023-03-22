import React from "react";
import "../styles/team.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import employee from "../images/employee.png";

const team = [
  {
    id: 1,
    name: "Tom",
    job: "Chef",
    image: employee,
  },
  {
    id: 1,
    name: "Tom",
    job: "Chef",
    image: employee,
  },
  {
    id: 1,
    name: "Tom",
    job: "Chef",
    image: employee,
  },
  {
    id: 1,
    name: "Tom",
    job: "Chef",
    image: employee,
  },
];

const Team = () => {
  return (
    <Container>
      <Row className="team-row">
      <h3 className="text-center">Team</h3>
        {team.map((employee) => (
          <Col sm={12} m={6} lg={3}>
            <div className="employee-card">
              <h3 className="my-2">{employee.name}</h3>
              <div className="employee-image-card">
                <img className="employee-image" src={employee.image}></img>
              </div>
              <p className="my-2">{employee.job}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Team;
