import React from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom"; // importation de Navigate au lieu de useNavigate?
import ImageCarousel from "./ImageCarousel";
import ApartmentDetails from "./AppartementDetails";
import apartmentsData from "../datas/appartList.json";

function Appartement() {
  const { id } = useParams(); // Recupération de l'id dans l'URL parce que les autre solution me soul
  const apartment = apartmentsData.find((apartment) => apartment.id === id);

  if (!apartment) {
    return <Navigate to="/*" />; /*useNavigate not working for some reason*/
  }

  return (
    <div className="appartement">
      <ImageCarousel images={apartment.pictures} />
      <ApartmentDetails
        title={apartment.title}
        host={apartment.host}
        location={apartment.location}
        rating={apartment.rating}
        tags={apartment.tags}
        description={apartment.description}
        equipements={apartment.equipments}
      />
    </div>
  );
}

export default Appartement;
