import { Container, Row, Col, Tab } from "react-bootstrap";
import { ImageCard } from "./ImageCard";
import projectsData from "../data/projects.json";
import { useParams } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const SubProjectDetails = () => {
  const { id1 } = useParams(); 
  const { id } = useParams();// Retrieve the project id from the URL
  const project = projectsData.projects[id1 - 1].subProjects[id -1]; // Retrieve the specific project using the id
  const images = project.images
  console.log(images[0].imgUrl)

  return (
    <section className="subproject-details">
      <Container>
        <Row>
          <Col>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
           {images && <><h4>Project images</h4>
         <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fifth">Tab 5</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            images.map((image, index) => {
                              return (
                                <ImageCard
                                  key={index}
                                  imageName={image.imageName}
                                  imgUrl = {image.imgUrl}
                                />
                                
                              )

                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                        {
                            images.map((image, index) => {
                              return (
                                <ImageCard
                                  key={index}
                                  {...image}
                                />
                                
                              )

                            })
                          }
                        </Row>

                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                        {
                            images.map((image, index) => {
                              return (
                                <ImageCard
                                  key={index}
                                  {...image}
                                />
                                
                              )

                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                        {
                            images.map((image, index) => {
                              return (
                                <ImageCard
                                  key={index}
                                  {...image}
                                />
                                
                              )

                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fifth">
                        <Row>
                        {
                            images.map((image, index) => {
                              return (
                                <ImageCard
                                  key={index}
                                  {...image}
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
            </>}
          </Col>
        </Row>
        
      </Container>
    </section>
  );
};
