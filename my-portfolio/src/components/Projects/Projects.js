import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
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
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="Scarred Chank Productions: A premier film distribution company specializing in foreign countries."
              demoLink="https://sacredchankproductions.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
