import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function InfoBox({ description, title }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="infoBox">
      <h2
        className={`infoBox__title ${isExpanded ? "active" : ""}`}
        onClick={toggleExpansion}
      >
        {title}
        <span className="infoBox__title-arrow">
          <FontAwesomeIcon icon={faChevronUp} />
        </span>
      </h2>
      <div className={`infoBox__detail ${isExpanded ? "active" : ""}`}>
        <div className={`infoBox__detail-txt ${isExpanded ? "active" : ""}`}>
          {description}
        </div>
      </div>
    </div>
  );
}
export default InfoBox;
