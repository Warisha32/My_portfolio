import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards"
import Particle from "../Particle";
import kylo from "../../Assets/Projects/kylo.png"
import creed from "../../Assets/Projects/creed.png"
function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Experiences </strong>
        </h1>
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kylo}
              isBlog={false}
              title="Kylo Apps"
              description="Frontend Developer"
               demoLink="https://kyloapps.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={creed}
              isBlog={false}
              title="Creed Essentials"
              description="Software Developer"
             
              demoLink="https://creedessential.com/"
            />
          </Col>

          

         

         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
