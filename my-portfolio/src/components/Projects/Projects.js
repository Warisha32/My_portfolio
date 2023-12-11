import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import covidinfo from "../../Assets/Projects/covidinfo.png"
import  contango from "../../Assets/Projects/contango.png";
import mindology from "../../Assets/Projects/mindology.png";
import sacred from "../../Assets/Projects/sacred.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covidinfo}
              isBlog={false}
              title="Covid Info"
              description="A web application that serves as a repository of pan-India updated
              covid 19 resources and information, with clearly demarcated sections for
              each resource like oxygen, ambulance etc."
              ghLink="https://github.com/The-Unleashed-Club/covid-resources"
              demoLink="https://covidresourcess.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contango}
              isBlog={false}
              title="Contango"
              description="Contango is a board game that allows you to grow your investment empire alongside other players. The goal is to hand pick investments that will reap rewards long into the future and help pave the way to financial freedom."
              ghLink=""
              demoLink="https://play.google.com/store/apps/details?id=com.contango.contango"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mindology}
              isBlog={false}
              title="Mindology"
              description="Mindology is a platform or service designed to help individuals explore and understand their personalities in a comprehensive way. The focus seems to be on leveraging advanced personality detection technology to unlock unique strengths and provide deep insights into various personality traits."
              ghLink=""
              demoLink="https://mindology.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sacred}
              isBlog={false}
              title="Sacred Chank Productions"
              description="A platform dedicated to the distribution of Kannada movies and the latest news articles, providing a comprehensive hub for enthusiasts and cinephiles."
              ghLink=""
              demoLink="https://sacredchankproductions.com/"
            />
          </Col>

         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
