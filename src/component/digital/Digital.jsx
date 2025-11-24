import { Accordion, Col, Container, Image, Row } from "react-bootstrap";
import "./digital.css";

// import for images
import DigitalImageOne from "../../assets/digital2.png";
import DigitalImageTwo from "../../assets/digital1.png";
import DigitalImageThree from "../../assets/digital3.png";
import DigitalImageFour from "../../assets/linespread3.png";
import DigitalImageFive from "../../assets/dotdigital.png";

const Digital = () => {
  return (
    <section className="digitalMain">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="digitalAnimation">
              <Image src={DigitalImageOne} className="digitalImageOne" />
              <Image src={DigitalImageTwo} className="digitalImageTwo" />
              <Image src={DigitalImageThree} className="digitalImageTree" />
              <Image src={DigitalImageFour} className="digitalImageFour" />
              <Image src={DigitalImageFive} className="digitalImageFive" />
            </div>
          </Col>
          <Col lg={{ span: 5, offset: 1 }}>
            <div className="digitalLeftSide">
              <h2 className="digitalLeftPartHeading">
                {" "}
                Startup digital platform <br /> for investing
              </h2>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Securing Digital Payment</Accordion.Header>
                  <Accordion.Body>
                   Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Securing Digital Payment</Accordion.Header>
                  <Accordion.Body>
                   Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Securing Digital Payment</Accordion.Header>
                  <Accordion.Body>
                   Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Securing Digital Payment</Accordion.Header>
                  <Accordion.Body>
                   Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.
                  </Accordion.Body>
                </Accordion.Item>
              
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Digital;
