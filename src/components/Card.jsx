import { Link } from "react-router-dom";

function Card({ apartment }) {
  return (
    <Link to={`/lodging/${apartment.id}`} className="card__link">
      <div className="card">
        <img src={apartment.cover} alt="" className="card__img" />
        <h3 className="card__title">{apartment.title}</h3>
      </div>
    </Link>
  );
}
export default Card;
