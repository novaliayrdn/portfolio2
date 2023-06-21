import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import content from "../assets/img/project/content-desaigning.jpeg";
import photography from "../assets/img/project/fotography.jpeg";
import photography1 from "../assets/img/project/fotography2.jpeg";
import photography2 from "../assets/img/project/fotography3.jpeg";
import photography3 from "../assets/img/project/fotography4.jpeg";
import photography4 from "../assets/img/project/fotography5.jpg";
import photography5 from "../assets/img/project/fotography6.jpg";
import photography6 from "../assets/img/project/fotography7.jpg";
import photography7 from "../assets/img/project/fotography8.jpg";
import photography8 from "../assets/img/project/fotography9.jpg";
import lithan1 from "../assets/img/project/lithan1.png";
import lithan2 from "../assets/img/project/lithan2.png";
import lithan3 from "../assets/img/project/lithan3.png";
import lithan4 from "../assets/img/project/lithan4.png";
import lithan5 from "../assets/img/project/lithan5.png";
import colorSharp2 from "../assets/img/sharp2.png";
import videography from "../assets/video/videography.mp4";
import ultahGereja from "../assets/video/ultah-gereja.mp4";
import april23 from "../assets/video/april23.mov";
import april23dua from "../assets/video/april23dua.mov";

import "animate.css";
import TrackVisibility from "react-on-screen";

import "./css/Projects.css";
import { ProjectVideo } from "./ProjectVideo";

export const Projects = () => {
  const photographys = [
    {
      link: "#",
      title: "Content Designing",
      year: "2019",
      description: "My design as Social Media Admin",
      imgUrl: content,
    },
    {
      link: "#",
      title: "Model and Product Photos",
      year: "2022",
      description:
        "My photos when i was employed as a model-product photographer",
      imgUrl: photography,
    },
    {
      link: "#",
      title: "Model and Product Photos",
      year: "2022",
      description:
        "My photos when i was employed as a model-product photographer",
      imgUrl: photography1,
    },
    {
      link: "#",
      title: "Model Photoshoot",
      year: "2022",
      description: "My photos when i was hiring as freelance photographer",
      imgUrl: photography2,
    },
    {
      link: "#",
      title: "Model and Product Photos",
      year: "2022",
      description:
        "My photos when i was employed as a model-product photographer",
      imgUrl: photography3,
    },
    {
      link: "#",
      title: "Pre-Wedding Photoshoot",
      year: "2021",
      description: "My photos when i was hiring as freelance photographer",
      imgUrl: photography4,
    },
    {
      link: "#",
      title: "Pre-Wedding Photoshoot",
      year: "2021",
      description: "My photos when i was hiring as freelance photographer",
      imgUrl: photography5,
    },
    {
      link: "#",
      title: "Pre-Wedding Photoshoot",
      year: "2021",
      description: "My photos when i was hiring as freelance photographer",
      imgUrl: photography6,
    },
    {
      link: "#",
      title: "Pre-Wedding Photoshoot",
      year: "2021",
      description: "My photos when i was hiring as freelance photographer",
      imgUrl: photography7,
    },
    {
      link: "#",
      title: "Pre-Wedding Photoshoot",
      year: "2021",
      description: "My photos when i was hiring as freelance photographer",
      imgUrl: photography8,
    },
  ];

  const videographys = [
    {
      title: "Welcome to 'Kepulauan Seribu' or 'Thousand Island'",
      year: "2019-2020",
      description:
        "doesn't have 1000 island but its said so because it has a series of beautiful islands with their own charm",
      videoUrl: videography,
    },
    {
      title: "Opening Footage",
      year: "2023",
      description: "one of footage for my Church's 9th birthday last week",
      videoUrl: ultahGereja,
    },
    {
      title: "Footage 1",
      year: "2023",
      description: "one of footage for my Church's project",
      videoUrl: april23,
    },
    {
      title: "Footage 2",
      year: "2023",
      description: "one of footage for my Church's project",
      videoUrl: april23dua,
    },
  ];

  const lithans = [
    {
      link: "#",
      title: "Adding_Report",
      year: "Python project - 2023",
      description:
        "This project works like a sum calculator, where's the output will show all number 'integers' inputted, and show the total sum of all those numbers",
      imgUrl: lithan1,
    },
    {
      link: "#",
      title: "Adding_Report (2)",
      year: "Python project - 2023",
      description:
        "This project works like a sum calculator, where's the output will show all number 'integers' inputted, and show the total sum of all those numbers",
      imgUrl: lithan2,
    },
    {
      link: "#",
      title: "Atomic Quiz",
      year: "Python project - 2023",
      description:
        "Users have 5 chances to guess the name of the atomic element according to periodic table. And the output will show the user's score and show which user's answer is correct/incorrect",
      imgUrl: lithan3,
    },
    {
      link: "#",
      title: "Atomic Quiz (2)",
      year: "Python project - 2023",
      description:
        "Users have 5 chances to guess the name of the atomic element according to periodic table. And the output will show the user's score and show which user's answer is correct/incorrect",
      imgUrl: lithan4,
    },
    {
      link: "#",
      title: "Atomic Quiz (3)",
      year: "Python project - 2023",
      description:
        "Users have 5 chances to guess the name of the atomic element according to periodic table. And the output will show the user's score and show which user's answer is correct/incorrect",
      imgUrl: lithan5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>My Projects</h2>
                  <p>
                    Contain my project as Social Media Admin -
                    Photographer/Videographer - Lithan's student
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Photography</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Videography</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Lithan's Mini Projects
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {photographys.map((photographys, index) => {
                            return (
                              <ProjectCard key={index} {...photographys} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {videographys.map((videographys, index) => {
                            return (
                              <ProjectVideo key={index} {...videographys} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {lithans.map((lithans, index) => {
                            return <ProjectCard key={index} {...lithans} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="pt-5 mb-5">Project Explanation</h2>
                  <div class="video-container">
                    <iframe
                      src="https://www.youtube.com/embed/3HPWMAQgRTQ"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                      className="video"
                    ></iframe>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
