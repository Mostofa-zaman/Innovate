import { Col, Container, Image, Row } from "react-bootstrap";
import "./solution.css";
import Button from "../commonButton/CommonButtom";

// import for images
import SolutionImgOne from "../../assets/solution2.png";
import SolutionImgTwo from "../../assets/solution3.png";
import SolutionImgThree from "../../assets/solution1.png";
import SolutionImgFour from "../../assets/solution4.png";
import SolutionImgFive from "../../assets/linespread3.png";
import SolutionImgSix from "../../assets/dotnet.png";

const Solution = () => {
  return (
    <section className="solution">
      <Container>
        <Row>
          <Col lg={{ span: 5 }}>
            <div className="solutionLeftPart">
              <h2 className="solutionLeftPartHeadingOne">
                Best Reliable Solution For Your Business
              </h2>
              <p className="solutionLeftPartParagraphOne">
                We help our clients succeed by creating brand identities,
                digital experiences, and print materials that communicate
                clearly, achieve marketing.
              </p>
              <Button buttonName={"Get Started Now"} />
            </div>
            <div className="solutionLeftPartBottom">
              <div className="solutionLeftPartBottomElement">
                <h5 className="solutionLeftPartHeadingTwo">
                  First-class investment solutions
                </h5>
                <p className="solutionLeftPartParagraphTwo">
                  We can help you with your business strategy, architecture,
                  mapping, and optimisation.{" "}
                </p>
              </div>
              <div className="solutionLeftPartBottomElement">
                <h5 className="solutionLeftPartHeadingTwo">
                  Building the idea of future
                </h5>
                <p className="solutionLeftPartParagraphTwo">
                  Offering Performance Driven Partnerships CIBA Specializes In
                  Business Process Outsourcing.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={{ span: 6, offset: 1 }}>
            <div className="solutionRightPart">
              <Image src={SolutionImgOne} className="imageSolOne" />
              <Image src={SolutionImgTwo} className="imageSolTwo" />
              <Image src={SolutionImgThree} className="imageSolThree" />
              <Image src={SolutionImgFour} className="imageSolFoures" />
              <Image src={SolutionImgFive} className="imageSolFive" />
              <Image src={SolutionImgSix} className="imageSolSix" />
              

              <div className="exprienceCard">
                <h1 className="exprienceCardHeadingOne">24</h1>
                <h5 className="exprienceCardHeadingTwo">Years Experience</h5>
                <div className="exCardLine"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Solution;
