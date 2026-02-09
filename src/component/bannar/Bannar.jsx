import { Col, Container, Image, Row } from "react-bootstrap";
import "./bannar.css";
import { MdOutlineStar } from "react-icons/md";
import Button from "../commonButton/CommonButtom";

// improt for images
import BannarImg from "../../assets/bannarimg.png";
import BannarMan from "../../assets/bannarman.png";
import Lotus from "../../assets/lotus.jpeg";
import SignArrow from "../../assets/arrow.png";
import Round from "../../assets/playouter.png";
import PlayRound from "../../assets/play.png";
import LineFire from "../../assets/linespread.png";

const Bannar = () => {
  return (
    <section className="bannar">
      <Image src={BannarImg} className="bannarImage" />
      <Image src={BannarMan} className="bannarMan" />
      <Image src={LineFire} className="lineFireAnim" />

      <div className="videoPlay">
        <div className="round"></div>
        <Image src={PlayRound} className="roundPlay" />
      </div>
      <div className="circle">
        <div className="dot"></div>
      </div>
      <div className="circleTwo">
        <div className="dotTwo"></div>
      </div>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="bannarElement">
              <h1 className="heading1">
                We Provide Premium Consulting Service For your Business
              </h1>
              <p className="bannarParagraphOne">
                The Premium Consulting Service provides a faster way to process
                plans, register dealings and create titles.
              </p>
              <Button buttonName={"get started now"} />
              <p className="bannarParapraphTwo">
                Already member of our communty?{" "}
                <span className="signButton">
                  <a href="#">Sign in</a>
                  <Image src={SignArrow} className="arrowImage" />
                </span>
              </p>

              <div className="review">
                <div className="reviewImagesParent">
                  <Image src={Lotus} className="reviewImage rimgone" />
                  <Image src={Lotus} className="reviewImage rimgtwo" />
                  <Image src={Lotus} className="reviewImage rimgthree" />
                  <Image src={Lotus} className="reviewImage rimgfour" />
                </div>
                <div className="reviewText ">
                  <div className="reviewNumRating">
                    <h4 className="reviewNumber">4.5</h4>
                    <div className="reviewRatingStar">
                      <MdOutlineStar className="reviewStar" />
                      <MdOutlineStar className="reviewStar" />
                      <MdOutlineStar className="reviewStar" />
                      <MdOutlineStar className="reviewStar" />
                      <MdOutlineStar className="reviewStar" />
                    </div>
                  </div>
                  <div className="reviewParagarph">
                    <p>305k Total Review</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
     
        </Row>
      </Container>
    </section>
  );
};

export default Bannar;
