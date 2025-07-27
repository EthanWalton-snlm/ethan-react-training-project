import "./styles.css";
import { Vehicle } from "../../components/Vehicle/Vehicle";

function Vehicles({ vehicleData, setVehicleData }) {
  // console.log(vehicleData);
  return (
    <>
      {/* <Vehicle vehicle={vehicleData[0]} /> */}
      <div className="vehicles-container">
        {vehicleData.map((vehicle) => (
          <Vehicle vehicle={vehicle} />
        ))}
      </div>
    </>
  );
}

export { Vehicles };
