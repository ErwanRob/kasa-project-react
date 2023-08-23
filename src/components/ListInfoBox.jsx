import InfoBox from "../components/InfoBox";

function ListInfoBox({ listInfoBox }) {
  return (
    <div className="listInfoBox">
      <div className="listInfoBox-container">
        {listInfoBox.map((infoBox) => (
          <InfoBox
            key={infoBox.id}
            title={infoBox.title}
            description={infoBox.description}
          />
        ))}
      </div>
    </div>
  );
}
export default ListInfoBox;
