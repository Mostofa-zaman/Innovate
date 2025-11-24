import { Col, Container, Row } from "react-bootstrap";
import "./update.css";
import UpdateCard from "../updateCard/UpdateCard";
// import for image
import Nature from "../../assets/nature.webp";
import NatureTwo from "../../assets/nature2.avif";
import NatureThree from "../../assets/nature3.jpg";
const Update = () => {
  return (
    <section className="updateMain">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="updateTopPart">
              <h6 className="updateTopPartHeadingOne">New Blog</h6>
              <h2 className="updateTopPartHeadingTwo">
                Latest Updates and News
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <UpdateCard
              heading={"Simple Juice Recipes to boost your immune system"}
              paragraph={
                "Objectively restore stand-alone markets rather than enterprise-wide products. "
              }
              imageSrc={Nature}
              personImage={Nature}
              personName={"Esther Howard"}
              dateText={"8 Sep, 2021"}
            />
          </Col>
          <Col lg={4}>
            <UpdateCard
              heading={"Simple Juice Recipes to boost your immune system"}
              paragraph={
                "Objectively restore stand-alone markets rather than enterprise-wide products. "
              }
              imageSrc={NatureTwo}
              personImage={NatureTwo}
              personName={"Esther Howard"}
              dateText={"8 Sep, 2021"}
            />
          </Col>
          <Col lg={4}>
            <UpdateCard
              heading={"Simple Juice Recipes to boost your immune system"}
              paragraph={
                "Objectively restore stand-alone markets rather than enterprise-wide products. "
              }
              imageSrc={NatureThree}
              personImage={NatureThree}
              personName={"Esther Howard"}
              dateText={"8 Sep, 2021"}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Update;
