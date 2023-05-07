import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoImg from '../assets/img/mines-rabat-logo.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "7 LABORATOIRES DE QUALITE", "UN CENTRE D'INCUBATION", "3 ATELIERS POUR LES TRAVEAUX MECANIQUES"  ];
  const [period, setPeriod] = useState(3000);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(75);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bienvenue au ENSMR Patrimony</span>
                <h1>{`L'ENSMR dispose de +`} <span className="txt-rotate" dataPeriod="1000" data-rotate="[ '7 LABORATOIRES DE QUALITE', 'UN CENTRE INCUBATIF', '3 ATELIERS POUR LES TRAVAUX MECANIQUES']"><span className="wrap">{text}</span></span></h1>
                  <p>Le patrimoine de l'ENSMR est un atout majeur pour sa réputation et son excellence académique, offrant un environnement exceptionnel pour la formation d'une nouvelle génération d'ingénieurs compétents et innovants.</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={logoImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
