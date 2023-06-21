import { Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/sharp.png";
import sublimeText from "../assets/img/sublime-text.svg";
import filmora from "../assets/img/filmora.svg";
import ligthroom from "../assets/img/lightroom.svg";
import inshot from "../assets/img/inshot.svg";
import davinci from "../assets/img/davinci.svg";
import { motion } from "framer-motion";

import "./css/Skills.css";

export const Skills = () => {
  const icons = {
    fontSize: "60px",
    padding: "5px",
  };

  const coloumn = {
    padding: "10px",
  };

  const imgicon = {
    width: "65px",
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Languages</p>
              <Row className="text-center">
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-html5-plain" style={icons}></i> <br />
                    HTML
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-css3-plain" style={icons}></i> <br />
                    CSS
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-javascript-plain" style={icons}></i>{" "}
                    <br />
                    JavaScript
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-cplusplus-plain" style={icons}></i>{" "}
                    <br />
                    C++
                  </motion.div>
                </Col>

                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-php-plain" style={icons}></i> <br />
                    PHP
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-python-plain" style={icons}></i>{" "}
                    <br />
                    Python
                  </motion.div>
                </Col>
              </Row>
              <p style={{ marginTop: "3rem" }}>Application Software</p>
              <Row>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i class="devicon-atom-original" style={icons}></i> <br />
                    Atom
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={davinci} alt="Logo" style={imgicon} /> <br />
                    Davinci
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i class="devicon-photoshop-plain" style={icons}></i> <br />
                    Photoshop
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i class="devicon-premierepro-plain" style={icons}></i>{" "}
                    <br />
                    Premiere Pro
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={ligthroom} alt="Logo" style={imgicon} /> <br />
                    Ligthroom
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={sublimeText} alt="Logo" style={imgicon} /> <br />
                    Sublime Text
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={filmora} alt="Logo" style={imgicon} /> <br />
                    Filmora
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={inshot} alt="Logo" style={imgicon} /> <br />
                    Inshot
                  </motion.div>
                </Col>

                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i class="devicon-jupyter-plain" style={icons}></i> <br />
                    Jupyter
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i class="devicon-vscode-plain" style={icons}></i>
                    <br />
                    Visual Studio Code
                  </motion.div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <img src={colorSharp} alt="" className="background-image" />
    </section>
  );
};
