import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import Autocomplete from "@mui/joy/Autocomplete";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { VehicleInput } from "../../components/VehicleInput/VehicleInput";
import { QuoteDisplay } from "../../components/QuoteDisplay/QuoteDisplay";
import { VEHICLE_INFO, newVehicleTemplate, PLAN_INFO } from "../../constants";
import {
  editableFields,
  vehicleFields,
  ownerFields,
  addressFields,
  policyFields,
} from "./data.js";
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

    const base = insureValue / 150;

    setBasePremium(base.toFixed(2));
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
    handleChange("planType", plan.name);

    const adjustedPremium = basePremium * plan.adjustment;

    handleChange("premium", adjustedPremium.toFixed(2));
  };

  useEffect(() => {
    console.log("Updated premium", vehicleData.premium);
  }, [vehicleData.premium]);

  return (
    <div className="new-vehicle">
      <div className="form-section-container">
        <Typography level="h2" variant="plain" sx={{ color: "primary.800" }}>
          Vehicle Information
        </Typography>
        <Divider />
        <div className="form-section">
          {vehicleFields.map(({ key, placeholder }) => (
            <VehicleInput
              key={key}
              onChange={(e) => handleChange(key, e.target.value)}
              placeholder={placeholder}
              disabled={disableField(key)}
              value={vehicleData[key]}
            />
          ))}

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
          />

          <Autocomplete
            placeholder="Select a model"
            options={
              VEHICLE_INFO.find((car) => car.brand === vehicleMake)?.models ||
              []
            }
            disableClearable
            onChange={(_, value) => handleChange("model", value)}
            value={vehicleData.model || ""}
          />
        </div>
      </div>

      <div className="form-section-container">
        <Typography level="h2" variant="plain" sx={{ color: "primary.800" }}>
          Owner Information
        </Typography>
        <Divider />
        <div className="form-section">
          {[...ownerFields, ...addressFields].map(({ key, placeholder }) => (
            <VehicleInput
              key={key}
              onChange={(e) => handleChange(key, e.target.value)}
              placeholder={placeholder}
              disabled={disableField(key)}
              value={vehicleData[key]}
            />
          ))}
        </div>
      </div>

      <div className="form-section-container">
        <Typography level="h2" variant="plain" sx={{ color: "primary.800" }}>
          Policy Information
        </Typography>
        <Divider />
        <div className="form-section">
          {policyFields.map(({ key, placeholder }) => (
            <VehicleInput
              key={key}
              onChange={(e) => handleChange(key, e.target.value)}
              placeholder={placeholder}
              disabled={disableField(key)}
              value={vehicleData[key]}
            />
          ))}

          <VehicleInput
            key="insuredValue"
            placeholder="Insured Value"
            disabled
            value={insuredValue}
          />

          <VehicleInput
            key="premium"
            placeholder="Premium"
            disabled
            value={basePremium}
          />
        </div>
      </div>

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
          <Typography level="h2" variant="plain" sx={{ color: "primary.800" }}>
            Plan Selection
          </Typography>
          <Divider />
          <QuoteDisplay premium={basePremium} />
          <Autocomplete
            placeholder="Select a plan"
            options={PLAN_INFO}
            getOptionLabel={(option) => option.name}
            disableClearable
            onChange={(_, value) => handlePlanChange(value)}
            value={selectedPlan}
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
