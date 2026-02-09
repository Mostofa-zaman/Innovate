import { Col, Container, Image, Row } from "react-bootstrap";
import "./team.css";

// Import images
import Moon from "../../assets/halfmoon.png";
import Lases from "../../assets/longlash.png";

// Import TeamCard component
import TeamCard from "../teamCard/TeamCard";

const Team = () => {
  return (
    <>
      {/* Team Section One - Header & Animations */}
      <section className="teamOneMain">
        {/* Background Animations */}
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

      {/* Team Section Two - Team Cards */}
      <section className="teamTwoMain">
        <Container>
          <Row>
            {/* Team Member 1 */}
            <Col lg={3}>
              <div className="teamTwoElement">
                <TeamCard heading="Eleanor Pena" paragraph="Senior Engineer" />
              </div>
            </Col>

            {/* Team Member 2 */}
            <Col lg={3}>
              <div className="teamTwoElement">
                <TeamCard heading="Jenny Wilson" paragraph="Project Manager" />
              </div>
            </Col>

            {/* Team Member 3 */}
            <Col lg={3}>
              <div className="teamTwoElement">
                <TeamCard heading="Jerome Bell" paragraph="Senior Engineer" />
              </div>
            </Col>

            {/* Team Member 4 */}
            <Col lg={3}>
              <div className="teamTwoElement">
                <TeamCard heading="Robert Fox" paragraph="Marketing Expert" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Team;
