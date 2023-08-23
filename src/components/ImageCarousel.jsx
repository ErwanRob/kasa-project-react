import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ImageCarousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          className={`carousel__item ${index === activeIndex ? "active" : ""}`}
          src={image}
          alt={`Appartement ${index + 1}`}
        />
      ))}
      <div className="carousel__nav">
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={prevImage}
          className="carousel__nav-arrowleft"
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={nextImage}
          className="carousel__nav-arrowright"
        />
      </div>
    </div>
  );
}

export default ImageCarousel;
