import { QuoteDisplay } from "../../components/QuoteDisplay/QuoteDisplay";
import Autocomplete from "@mui/joy/Autocomplete";
import { useEffect, useState } from "react";
import "./styles.css";

function QuotePage({ vehicleData }) {
  const [currentVehicle, setCurrentVehicle] = useState();

  useEffect(() => {
    console.log("!!!", currentVehicle?.id);
  }, [currentVehicle]);

  return (
    <div className="quotes-container">
      <Autocomplete
        placeholder="Select a vehicle"
        options={vehicleData.map((vehicle) => ({
          label: `${vehicle.year} ${vehicle.make} ${vehicle.model} (${vehicle.registrationNumber})`,
          key: vehicle.id,
          ...vehicle,
        }))}
        disableClearable
        onChange={(event, currVehicle) => {
          setCurrentVehicle(currVehicle);
        }}
        color="primary"
        size="md"
        variant="outlined"
      />

      {currentVehicle ? (
        <div className="quote-display">
          <QuoteDisplay vehicle={currentVehicle} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export { QuotePage };
