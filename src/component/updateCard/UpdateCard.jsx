import { Card } from "react-bootstrap";

import "./updateCard.css";
import { BsCalendar2Check } from "react-icons/bs";

const UpdateCard = ({
  heading,
  paragraph,
  personImage,
  personName,
  imageSrc,
  dateText,
}) => {
  return (
    <div className="updateCardMain">
      <Card className="updateCardElement">
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
          <Card.Title className="updateCardHeading">{heading}</Card.Title>
          <Card.Text className="updateCardParagraph">{paragraph}</Card.Text>
          <Card.Body className="nameDatePart">
            <Card.Body className="nameDatePartOne  nameDatePartCommon">
              <Card.Img src={personImage} className="nameDatePartPersonImage" />
              <Card.Text className="updateCardParagraphTwo">
                {personName}
              </Card.Text>
            </Card.Body>
            <Card.Body className="nameDatePartTwo  nameDatePartCommon">
              <Card.Text className="">
                <BsCalendar2Check className="updateCardIcon "/>
              </Card.Text>
              <Card.Text className="updateCardParagraphTwo">
                {dateText}
              </Card.Text>
            </Card.Body>
          </Card.Body>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UpdateCard;
