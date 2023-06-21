import { Container } from "react-bootstrap";

import "./css/Education.css";

export const Education = () => {
  return (
    <section className="education" id="education">
      <Container>
        <div className="text-center">
          <h2>Education</h2>
          <p></p>
          <div className="time">
            <div className="timeline">
              <ul>
                <li>
                  <h2 className="heading">
                    <u>1 Tibubeneng Elementary School</u>
                  </h2>
                  <p>
                    3rd place in the class until graduation but not interested
                    in the world of IT at all{" "}
                  </p>
                  <span className="date">2008 - 2014</span>
                  <span className="circle"></span>
                </li>
                <li style={{ textAlign: "left" }}>
                  <h2 className="heading">
                    <u>1 South Kuta Junior High School</u>
                  </h2>
                  <p>
                    i started to be interested in the world of photography and
                    videography since first grade. Them started studying basic
                    computers, microsoft, and some software in grade two until
                    graduation{" "}
                  </p>
                  <span className="date">2014 - 2017</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h2 className="heading">
                    <u>TI Global Jimbaran High School</u>
                  </h2>
                  <p>
                    majored in software engineering because i started to be
                    interested in the world of coding, and tried to take part in
                    several competitions to represent the school{" "}
                  </p>
                  <span className="date">2017 - 2020</span>
                  <span className="circle"></span>
                </li>
                <li style={{ textAlign: "left" }}>
                  <h2 className="heading">
                    <u>ITB Stikom Bali University</u>
                  </h2>
                  <p>
                    has postponed my studies for two years because of the
                    pandemic, and for two years i studied the world of
                    technology myself and deepened my coding and editing skills.
                    And now continue majoring in Digital System Administration
                    because i want to learn new things and i choose Lithan
                    Educlaas because i see a good opportunity to work in an
                    international company{" "}
                  </p>
                  <span className="date">2022 - Now</span>
                  <span className="circle"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
