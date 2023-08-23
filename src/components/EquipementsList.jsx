function EquipementList({ equipements }) {
  return (
    <ul className="detail__accomodation-equipement">
      {equipements.map((equipement, index) => (
        <li key={index} className="detail__accomodation-equipement-item">
          {equipement}
        </li>
      ))}
    </ul>
  );
}

export default EquipementList;
