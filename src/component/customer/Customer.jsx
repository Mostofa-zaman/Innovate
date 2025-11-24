import { Col, Container, Image, Row } from "react-bootstrap";
import "./customer.css";
import Slider from "react-slick";

// import for images
import CommentIamgeOne from "../../assets/commentimg1.jpg";
import CommentIamgeTwo from "../../assets/commentimg2.jpg";

const Customer = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <section className="customerMain">
      <Container>
        <Row>
          <Col lg={{ span: 6 }}>
            <div className="customerHeading">
              What our customers are saying about us
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="customerSliderContainer">
              <Slider {...settings}>
                <div className="coustomerSliderImageParent">
                  <Image
                    src={CommentIamgeOne}
                    className="coustomerSliderImage"
                  />
                </div>
                <div className="coustomerSliderImageParent">
                  <Image
                    src={CommentIamgeTwo}
                    className="coustomerSliderImage"
                  />
                </div>
                <div className="coustomerSliderImageParent">
                  <Image
                    src={CommentIamgeOne}
                    className="coustomerSliderImage"
                  />
                </div>
                <div className="coustomerSliderImageParent">
                  <Image
                    src={CommentIamgeTwo}
                    className="coustomerSliderImage"
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

export default Customer;
