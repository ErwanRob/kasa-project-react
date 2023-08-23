import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {range.map((rangeElem) =>
        rating >= rangeElem ? (
          <span key={rangeElem.toString()}>
            <FontAwesomeIcon
              icon={faStar}
              className="rating-item rating--true"
            />
          </span>
        ) : (
          <span key={rangeElem.toString()}>
            <FontAwesomeIcon
              icon={faStar}
              className="rating-item rating--false"
            />
          </span>
        )
      )}
    </div>
  );
}

export default Rating;
