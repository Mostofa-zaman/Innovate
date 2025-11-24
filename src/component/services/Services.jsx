import { Col, Container, Row } from "react-bootstrap";
import "./services.css";
import SliderCard from "../sliderCard/SliderCard";

// import images
import ImagesOne from "../../assets/sliderimg1.png";
import ImagesTwo from "../../assets/sliderimg2.png";
import ImagesThree from "../../assets/sliderimg3.png";
import ImagesFour from "../../assets/sliderimg4.png";
// import slider
import Slider from "react-slick";

// inport slider icon
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrowRight" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrowLeft" onClick={onClick}>
      <FaArrowLeftLong />
    </div>
  );
}

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="service">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="servicesTopPart">
              <h6 className="servicesTopPartHeadinOne">Services</h6>
              <h2 className="servicesTopPartHeadinTwo">
                Find the service we provide
              </h2>
            </div>
          </Col>
          <Col lg={{ span: 5, offset: 3 }}>
            <p className="servicesTopPartParagraph">
              Our consultants have years of experience on the in success.
              ​Through the provision of our services.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div>
              <Slider {...settings}>
                <div className="serviceSlider">
                  <SliderCard
                    srcImage={ImagesOne}
                    paragraph={
                      "That community can of course lend to sales - that's how brand and business go hand-in-hand"
                    }
                    heading={"Grow Your Brand And Business"}
                    sliderParentBg={"#F44C4C"}
                  />
                </div>
                <div className="serviceSlider">
                  <SliderCard
                    srcImage={ImagesTwo}
                    paragraph={
                      "There are two ways to increase your conversion rate: increase their motivation and make it easier"
                    }
                    heading={"Increase Your Conversion Rate"}
                    sliderParentBg={"#52C5B6"}
                    borderColor={"#52C5B6"}
                    dotBackground={"#52C5B6"}
                  />
                </div>
                <div className="serviceSlider">
                  <SliderCard
                    srcImage={ImagesThree}
                    paragraph={
                      "A business plan consultant provides strategic direction by creating or methodically pressure-testing "
                    }
                    heading={"GBusiness Plan Consulting"}
                    sliderParentBg={"#2BCCFF"}
                    dotBackground={"#2BCCFF"}
                    borderColor={"#2BCCFF"}
                  />
                </div>
                <div className="serviceSlider">
                  <SliderCard
                    srcImage={ImagesFour}
                    paragraph={
                      "You must do different kinds of research for your startup. However, before you make any new decision"
                    }
                    heading={"GBusiness Startup Analysis"}
                    sliderParentBg={"#5D5FEF"}
                    dotBackground={"#5D5FEF"}
                    borderColor={"#5D5FEF"}
                  />
                </div>

                <div className="serviceSlider">
                  <SliderCard
                    srcImage={ImagesThree}
                    paragraph={
                      "A business plan consultant provides strategic direction by creating or methodically pressure-testing "
                    }
                    heading={"GBusiness Plan Consulting"}
                    sliderParentBg={"#2BCCFF"}
                    dotBackground={"#2BCCFF"}
                    borderColor={"#2BCCFF"}
                  />
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
