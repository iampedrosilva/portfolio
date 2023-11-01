import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/fotoportifolio.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillInstagram,
} from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMITA-ME <span className="purple"> APRESENTAR-ME </span>
            </h1>
            <p className="home-about-body">
              Me apaixonei por programação, já que a gente tem que fazer alguma coisa nessa vida… 🤷🏻‍♂️
              <br />
              <br />Sou fluente em linguagens como
              <i>
                <b className="purple"> Javascript & Python. </b>
              </i>
              <br />
              <br />
              Minhas áreas de interesse são a construção de novas tecnologias de&nbsp;
              <i>
                <b className="purple">Servidores Web para Empresas </b> e também em áreas relacionadas a{" "}
                <b className="purple">
                  Cybersecurity & Hacking.
                </b>
              </i>
              <br />
              <br />
              Sempre que possível, também aplico minha paixão por desenvolver produtos
              com <b className="purple">Node.js</b> &
              <i>
                <b className="purple">
                  {" "}
                  Biblioteca e estruturas de Javascript modernas,
                </b>
              </i>
              &nbsp; amo
              <i>
                <b className="purple"> React.js & Next.js</b>
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
            <h1>SIGA-ME</h1>
            <p>
            Sinta-se à vontade para se <span className="purple">conectar </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/zwindowsgamer"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://api.whatsapp.com/send?phone=5562996548161"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://open.spotify.com/user/22zd3bpaj7s5bdhz5flprihfy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaSpotify />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/iampedrosilva.js"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
