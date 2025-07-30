import { NewVehicle } from "../NewVehicle/NewVehicle";
import { useParams } from "react-router";
import { PageNotFound } from "../PageNotFound/PageNotFound";

function EditVehicle({ vehicleData, updateData }) {
  const { id } = useParams();

  const vehicle = vehicleData.filter(
    (vehicle) => id === vehicle.registrationNumber
  );

  return (
    <>
      {vehicle.length > 0 ? (
        <NewVehicle
          editMode={true}
          vehicleData={vehicle[0]}
          updateData={updateData}
        />
      ) : (
        <PageNotFound />
      )}
    </>
  );
}

export { EditVehicle };
