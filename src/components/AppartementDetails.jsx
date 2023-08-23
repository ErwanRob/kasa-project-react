import TagList from "./TagList";
import InfoBox from "./InfoBox";
import EquipementList from "./EquipementsList";
import Rating from "./Rating";

function ApartmentDetails({
  title,
  host,
  location,
  rating,
  tags,
  description,
  equipements,
}) {
  return (
    <div className="detail">
      <div className="detail__title">
        <h2 className="detail__title-txt">{title}</h2>
        <div className="detail__title-host">
          <p className="detail__title-host-name">{host.name}</p>
          <img
            src={host.picture}
            alt={`Hôte: ${host.name}`}
            className="detail__title-host-img"
          />
        </div>
      </div>
      <p className="detail__localisation">{location}</p>
      <div className="detail__classification">
        <TagList tags={tags} />
        <Rating rating={rating} />
      </div>
      <div className="detail__accomodation">
        <InfoBox description={description} title="Description" />
        <InfoBox
          description={<EquipementList equipements={equipements} />}
          title="Equipement"
        />
      </div>
    </div>
  );
}
export default ApartmentDetails;
