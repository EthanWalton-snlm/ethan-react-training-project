import { Vehicle } from "../../components/Vehicle/Vehicle";

function Vehicles({ vehicleData, setVehicleData }) {
  // console.log(vehicleData);
  return (
    <>
      <Vehicle vehicle={vehicleData[0]} />
      {/* {vehicleData.map((vehicle) => {
        <Vehicle vehicle={vehicle} />;
      })} */}
    </>
  );
}

export { Vehicles };
