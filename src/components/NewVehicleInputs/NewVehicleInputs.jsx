import { VehicleInput } from "../VehicleInput/VehicleInput";

function NewVehicleInputs({ fields, vehicleData, handleChange, disableField }) {
  return fields.map(({ key, placeholder }) => (
    <VehicleInput
      key={key}
      onChange={(e) => handleChange(key, e.target.value)}
      placeholder={placeholder}
      disabled={disableField(key)}
      value={vehicleData[key]}
    />
  ));
}

export { NewVehicleInputs };
