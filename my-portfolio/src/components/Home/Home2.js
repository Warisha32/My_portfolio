import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">

              Passionate about Software Development,  🤷‍♂️
              <br />
              <br />I've mastered classics like
              <i>
                <b className="purple"> C++, Javascript, React Native and React. </b>
              </i>
              <br />
              <br />
              My expertise lies in crafting innovative web technologies and products using  React.js, React Native and Next.js. &nbsp;

              <br />
              <br />

              <i>
                <b className="purple">Let's code the future together! 🚀</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Warisha32"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/laique_war79038"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/warisha-laique/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:warishalaique78666@gmail.com"
                  className="icon-colour  home-social-icons"
                >
                  <FaMessage />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
