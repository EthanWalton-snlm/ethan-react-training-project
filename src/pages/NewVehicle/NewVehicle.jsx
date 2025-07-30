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
import { useFormik } from "formik";
import { object, string, number, date } from "yup";
import "./styles.css";

const addVehicleSchema = object({
  imageLink: string().required(),
});

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

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        imageLink: "",
        make: "",
        model: "",
        year: 0,
        color: "",
        registrationNumber: "",
        mileage: 0,
        ownerFullName: "",
        ownerIdNumber: "",
        street: "",
        city: "",
        province: "",
        postalCode: "",
        country: "South Africa",
        planType: "",
        premium: "",
        startDate: "2025-01-01",
        excess: 0,
        insuredValue: 0,
      },

      validationSchema: addVehicleSchema,

      onSubmit: (values) => {
        console.log("onSubmit: ", values);
        //...
      },
    });

  useEffect(() => {
    setVehicleMake(vehicleData.make || "");
  }, [vehicleData.make]);

  const disableField = (key) => editMode && !editableFields.includes(key);

  const handleValueChange = (key, value) => {
    setVehicleData((prev) => ({ ...prev, [key]: value }));
  };

  const handlePost = async () => {
    await fetch("https://68871b80071f195ca97f4670.mockapi.io/vehicles", {
      method: "POST",
      body: JSON.stringify(vehicleData),
      headers: { "Content-Type": "application/json" },
    });
    updateData();
    navigate(`/confirm/${vehicleData.registrationNumber}`, {
      state: { status: "created" },
    });
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
    navigate(`/confirm/${vehicleData.registrationNumber}`, {
      state: { status: "updated" },
    });
  };

  const setInsuranceValues = (make = vehicleMake) => {
    const insureValue = VEHICLE_INFO.find((car) => car.brand === make)?.value;

    handleValueChange("insuredValue", insureValue);
    setInsuredValue(insureValue);

    const base = calculateBasePremium(insureValue);

    setBasePremium(base);
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
    handleValueChange("planType", plan.name);

    const adjustedPremium = calculateAdjustedPremium(
      basePremium,
      plan.adjustment
    );

    handleValueChange("premium", adjustedPremium);
  };

  useEffect(() => {
    console.log("Updated premium", vehicleData.premium);
  }, [vehicleData.premium]);

  return (
    <div className="new-vehicle">
      <NewVehicleSection title="Vehicle Information">
        <NewVehicleInputs
          fields={vehicleFields}
          {...{ vehicleData, handleValueChange, disableField }}
        />
        <NewVehicleMakeModel
          {...{
            vehicleMake,
            setVehicleMake,
            handleValueChange,
            setInsuranceValues,
            vehicleData,
          }}
        />
      </NewVehicleSection>

      <NewVehicleSection title="Owner Information">
        <NewVehicleInputs
          fields={[...ownerFields, ...addressFields]}
          {...{ vehicleData, handleValueChange, disableField }}
        />
      </NewVehicleSection>

      <NewVehicleSection title="Policy Information">
        <NewVehicleInputs
          fields={policyFields}
          {...{ vehicleData, handleValueChange, disableField }}
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
            onClick={handlePost}
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
