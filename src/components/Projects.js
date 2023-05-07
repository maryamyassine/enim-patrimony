import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import principaleData from "../data/principale.json";
import annexeData from '../data/annexe.json';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const resolvedPrincipaleDepartments = principaleData.departements
  const resolvedAnnexeDepartments = annexeData.departements


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Départments</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Principale</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Annexe</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            resolvedPrincipaleDepartments.map((departement, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...departement}
                                />
                                
                              )

                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            resolvedAnnexeDepartments.map((departement, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...departement}
                                />
                              )
                            })
                          }
                        </Row>

                      </Tab.Pane>
                      
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
