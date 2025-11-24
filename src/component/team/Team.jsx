import { Col, Container, Image, Row } from "react-bootstrap";
import "./team.css";

// import for images
import Moon from "../../assets/halfmoon.png";
import Lases from "../../assets/longlash.png";
import TeamCard from "../teamCard/TeamCard";

const Team = () => {
  return (
    <>
      <section className="teamOneMain">
        <Image src={Moon} className="moonAnimation" />
        <Image src={Lases} className="lasesAnimation" />

        <Container>
          <Row>
            <Col lg={12}>
              <div className="teamOne">
                <h6 className="teamHeadingOne">our team</h6>
                <h2 className="teamHeadingTwo">Meet with Expert</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="teamTwoMain">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="teamTwoElement">
                <TeamCard
                  heading={"Eleanor Pena"}
                  paragraph={"Senior Engineer"}
                />
              </div>
            </Col>
            <Col lg={3}>
              <div className="teamTwoElement">
                <TeamCard
                  heading={"Jenny Wilson"}
                  paragraph={"Project Manager"}
                />
              </div>
            </Col>
            <Col lg={3}>
              <div className="teamTwoElement">
                <TeamCard
                  heading={"Jerome Bell"}
                  paragraph={"Senior Engineer"}
                />
              </div>
            </Col>
            <Col lg={3}>
              <div className="teamTwoElement">
                <TeamCard
                  heading={"Robert Fox"}
                  paragraph={"Marketing Expert"}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Team;
