import { NewVehicle } from "../NewVehicle/NewVehicle";
import { useParams } from "react-router";

function EditVehicle({ vehicleData }) {
  const { id } = useParams();
  const findVehicleById = (id) =>
    vehicleData.filter(
      (vehicle) => id === vehicle.vehicle.registrationNumber
    )[0];

  return <NewVehicle editMode={true} vehicleData={findVehicleById(id)} />;
}

export { EditVehicle };
