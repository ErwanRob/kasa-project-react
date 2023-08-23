import Card from "../components/Card";

function CardList({ apartments }) {
  return (
    <div className="cardList">
      <div className="cardList-container">
        {apartments.map((apartment) => (
          <Card key={apartment.id} apartment={apartment} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
