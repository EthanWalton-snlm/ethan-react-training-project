import Autocomplete from "@mui/joy/Autocomplete";
import { VEHICLE_INFO } from "../../constants";

function NewVehicleMakeModel({
  vehicleMake,
  setVehicleMake,
  handleChange,
  setInsuranceValues,
  vehicleData,
}) {
  const selectedCar = VEHICLE_INFO.find((car) => car.brand === vehicleMake);

  return (
    <>
      <Autocomplete
        placeholder="Select a make"
        options={VEHICLE_INFO.map((car) => car.brand)}
        disableClearable
        onChange={(_, value) => {
          setVehicleMake(value);
          handleChange("make", value);
          setInsuranceValues(value);
        }}
        value={vehicleMake}
        color="primary"
      />
      <Autocomplete
        placeholder="Select a model"
        options={selectedCar?.models || []}
        disableClearable
        onChange={(_, value) => handleChange("model", value)}
        value={vehicleData.model || ""}
        color="primary"
      />
    </>
  );
}

export { NewVehicleMakeModel };
