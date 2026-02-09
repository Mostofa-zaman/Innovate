import { Col, Container, Image, Row } from "react-bootstrap";
import "./world.css";
import Button from "../commonButton/CommonButtom";
import Slider from "react-slick";

// Import images
import Images1 from "../../assets/worldsld1.png";
import Images2 from "../../assets/worldsld2.png";
import Images3 from "../../assets/worldsld3.png";
import Images4 from "../../assets/worldsld4.png";

const World = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <section className="worldMain">
      <Container>
        <Row>
          {/* Left Side - Heading & Button */}
          <Col lg={4}>
            <div className="worldLeftSide">
              <h3 className="worldLeftSideHeading">
                Trusted by the world’s leading companies
              </h3>
              <Button buttonName="Free Consultation" className="worldButton" />
            </div>
          </Col>

          {/* Right Side - Stats & Slider */}
          <Col lg={{ span: 6, offset: 2 }}>
            <div className="worldRightSide">

              {/* Stats Section */}
              <div className="worldRightSideRation">
                <div className="worldRightSideRationText">
                  <h1>150+</h1>
                  <p>Finished Session</p>
                </div>
                <div className="worldRightSideRationText">
                  <h1>100%</h1>
                  <p>Satisfiction Rate</p>
                </div>
                <div className="worldRightSideRationText">
                  <h1>350+</h1>
                  <p>Trusted Clients</p>
                </div>
              </div>

              {/* Slider Section */}
              <div className="worldSlider">
                <Slider {...settings}>
                  {[Images1, Images2, Images3, Images4, Images1].map(
                    (img, index) => (
                      <div key={index}>
                        <Image src={img} className="worldsliderImage" />
                      </div>
                    )
                  )}
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default World;
