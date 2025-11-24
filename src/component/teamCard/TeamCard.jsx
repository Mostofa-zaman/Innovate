import { Image } from "react-bootstrap";
import "./teamCard.css";

// import for icon
import { FaPlus } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa6";

import ImageOne from "../../assets/teamcard1.png";

const TeamCard = ({ heading, paragraph }) => {
  return (
    <div className="teamCardElement">
      <Image src={ImageOne} className="teamCardImages" />
      <div className="teamCardText">
        <div className="teamCardLine"></div>
        <div className="teamCardTitle">
          <h6>{heading}</h6>
          <p>{paragraph}</p>
        </div>
      </div>
      <div className="teamCardIcon">
        <div className="teamCardIconOne teamCardCommonCss">
          <FaPlus className="teamCardCommon crossIcon" />
        </div>
        <div className="teamCardIconTwo teamCardCommonCss">
          <FaTwitter className="teamCardCommon  teamCardOtherIcon " />
        </div>
        <div className="teamCardIconThree teamCardCommonCss">
          <IoLogoLinkedin className="teamCardCommon teamCardOtherIcon" />
        </div>
        <div className="teamCardIconFour teamCardCommonCss">
          <FaPinterest className="teamCardCommon teamCardOtherIcon" />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
