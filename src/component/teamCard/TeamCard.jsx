import { Image } from "react-bootstrap";
import "./teamCard.css";

// Import icons
import { FaPlus } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa6";

// Import team image
import ImageOne from "../../assets/teamcard1.png";

const TeamCard = ({ heading, paragraph }) => {
  return (
    <div className="teamCardElement">
      {/* Team Image */}
      <Image src={ImageOne} className="teamCardImages" />

      {/* Team Text */}
      <div className="teamCardText">
        <div className="teamCardLine" />

        <div className="teamCardTitle">
          <h6>{heading}</h6>
          <p>{paragraph}</p>
        </div>
      </div>

      {/* Social / Action Icons */}
      <div className="teamCardIcon">
        {/* Plus Icon */}
        <div className="teamCardIconOne teamCardCommonCss">
          <FaPlus className="teamCardCommon crossIcon" />
        </div>

        {/* Twitter Icon */}
        <div className="teamCardIconTwo teamCardCommonCss">
          <FaTwitter className="teamCardCommon teamCardOtherIcon" />
        </div>

        {/* LinkedIn Icon */}
        <div className="teamCardIconThree teamCardCommonCss">
          <IoLogoLinkedin className="teamCardCommon teamCardOtherIcon" />
        </div>

        {/* Pinterest Icon */}
        <div className="teamCardIconFour teamCardCommonCss">
          <FaPinterest className="teamCardCommon teamCardOtherIcon" />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
