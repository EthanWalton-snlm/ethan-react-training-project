import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/joy/Button";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { VehicleInput } from "../../components/VehicleInput/VehicleInput";
import { VEHICLE_INFO, newVehicleTemplate } from "../../constants";
import {
  editableFields,
  vehicleFields,
  ownerFields,
  addressFields,
  policyFields,
} from "./data.js";
import { NewVehicleSection } from "../../components/NewVehicleSection/NewVehicleSection";
import { NewVehicleMakeModel } from "../../components/NewVehicleMakeModel/NewVehicleMakeModel";
import { NewVehicleInputs } from "../../components/NewVehicleInputs/NewVehicleInputs";
import { NewVehiclePlan } from "../../components/NewVehiclePlan/NewVehiclePlan";
import {
  calculateBasePremium,
  calculateAdjustedPremium,
} from "../../utils/quotes.js";
import "./styles.css";

function NewVehicle({
  editMode = false,
  vehicleData: initialVehicleData = newVehicleTemplate,
  updateData,
}) {
  const [vehicleData, setVehicleData] = useState({ ...initialVehicleData });
  const [vehicleMake, setVehicleMake] = useState(initialVehicleData.make || "");
  const [insuredValue, setInsuredValue] = useState();
  const [basePremium, setBasePremium] = useState();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setVehicleMake(vehicleData.make || "");
  }, [vehicleData.make]);

  const disableField = (key) => editMode && !editableFields.includes(key);

  const handleChange = (key, value) => {
    setVehicleData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    await fetch("https://68871b80071f195ca97f4670.mockapi.io/vehicles", {
      method: "POST",
      body: JSON.stringify(vehicleData),
      headers: { "Content-Type": "application/json" },
    });
    updateData();
    navigate("/dashboard", { state: { status: "created" } });
  };

  const handleEditSubmit = async () => {
    await fetch(
      `https://68871b80071f195ca97f4670.mockapi.io/vehicles/${vehicleData.id}`,
      {
        method: "PUT",
        body: JSON.stringify(vehicleData),
        headers: { "Content-Type": "application/json" },
      }
    );
    updateData();
    navigate("/dashboard", { state: { status: "updated" } });
  };

  const setInsuranceValues = (make = vehicleMake) => {
    const insureValue = VEHICLE_INFO.find((car) => car.brand === make)?.value;

    handleChange("insuredValue", insureValue);
    setInsuredValue(insureValue);

    const base = calculateBasePremium(insureValue);

    setBasePremium(base);
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
    handleChange("planType", plan.name);

    const adjustedPremium = calculateAdjustedPremium(
      basePremium,
      plan.adjustment
    );

    handleChange("premium", adjustedPremium);
  };

  useEffect(() => {
    console.log("Updated premium", vehicleData.premium);
  }, [vehicleData.premium]);

  return (
    <div className="new-vehicle">
      <NewVehicleSection title="Vehicle Information">
        <NewVehicleInputs
          fields={vehicleFields}
          {...{ vehicleData, handleChange, disableField }}
        />
        <NewVehicleMakeModel
          {...{
            vehicleMake,
            setVehicleMake,
            handleChange,
            setInsuranceValues,
            vehicleData,
          }}
        />
      </NewVehicleSection>

      <NewVehicleSection title="Owner Information">
        <NewVehicleInputs
          fields={[...ownerFields, ...addressFields]}
          {...{ vehicleData, handleChange, disableField }}
        />
      </NewVehicleSection>

      <NewVehicleSection title="Policy Information">
        <NewVehicleInputs
          fields={policyFields}
          {...{ vehicleData, handleChange, disableField }}
        />
        <VehicleInput
          key="insuredValue"
          placeholder="Insured Value"
          disabled
          value={insuredValue}
        />
      </NewVehicleSection>

      {editMode ? (
        <Button
          variant="soft"
          startDecorator={<FileUploadIcon />}
          onClick={handleEditSubmit}
          className="submit-button"
        >
          Submit Changes
        </Button>
      ) : (
        <>
          <NewVehiclePlan
            {...{ basePremium, selectedPlan, handlePlanChange }}
          />
          <Button
            variant="soft"
            startDecorator={<DoneAllIcon />}
            onClick={handleSubmit}
            className="submit-button"
          >
            Submit Vehicle
          </Button>
        </>
      )}
    </div>
  );
}

export { NewVehicle };
