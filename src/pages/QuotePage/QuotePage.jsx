import { NewVehiclePlan } from "../../components/NewVehiclePlan/NewVehiclePlan";
import Autocomplete from "@mui/joy/Autocomplete";
import { useEffect, useState } from "react";
import {
  calculateBasePremium,
  calculateAdjustedPremium,
} from "../../utils/quotes.js";
import Button from "@mui/joy/Button";
import { Navigate, useNavigate } from "react-router";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import "./styles.css";

function QuotePage({ vehicleData, updateData }) {
  const [currentVehicle, setCurrentVehicle] = useState();
  const [planType, setPlanType] = useState(vehicleData.planType);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("!!!", currentVehicle?.id);
  }, [currentVehicle]);

  const handleChange = (key, value) => {
    setCurrentVehicle((prev) => ({ ...prev, [key]: value }));
  };

  const basePremium = calculateBasePremium(currentVehicle?.insuredValue);

  const handlePlanChange = (plan) => {
    const adjustedPremium = calculateAdjustedPremium(
      basePremium,
      plan.adjustment
    );

    handleChange("planType", plan.name);
    handleChange("premium", adjustedPremium);

    setPlanType(plan);
  };

  const handleSubmit = async () => {
    await fetch(
      `https://68871b80071f195ca97f4670.mockapi.io/vehicles/${currentVehicle.id}`,
      {
        method: "PUT",
        body: JSON.stringify(currentVehicle),
        headers: { "Content-Type": "application/json" },
      }
    );

    updateData();
    navigate("/dashboard", { state: { status: "updated" } });
  };

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
        <>
          <div className="quote-display">
            <NewVehiclePlan
              basePremium={basePremium}
              selectedPlan={planType}
              handlePlanChange={handlePlanChange}
            />
          </div>
          <Button
            variant="soft"
            startDecorator={<FileUploadIcon />}
            onClick={handleSubmit}
            className="submit-button"
          >
            Submit Changes
          </Button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export { QuotePage };
