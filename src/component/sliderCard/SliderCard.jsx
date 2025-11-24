import { Image } from "react-bootstrap";
import "./sliderCard.css";

const SliderCard = ({
  heading,
  paragraph,
  borderColor,
  dotBackground,
  srcImage,
  sliderParentBg,
}) => {
  return (
    <div className="sliderCardMain" style={{ backgroundColor: sliderParentBg }}>
      <div className="sliderCardElement">
        <Image src={srcImage} className="sliderImage" />
        <div className="sliderParent" style={{ borderColor: borderColor }}>
          <div
            className="sliderDot"
            style={{ backgroundColor: dotBackground }}
          ></div>
        </div>
        <h6 className="sliderCardHeading">{heading}</h6>
        <p className="sliderCardParagraph">{paragraph}</p>
      </div>
    </div>
  );
};

export default SliderCard;
