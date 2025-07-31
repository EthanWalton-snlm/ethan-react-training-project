import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/joy/Button";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { VehicleInput } from "../../components/VehicleInput/VehicleInput";
import { VEHICLE_INFO, newVehicleTemplate, today } from "../../constants";
import { NewVehicleSection } from "../../components/NewVehicleSection/NewVehicleSection";
import { NewVehiclePlan } from "../../components/NewVehiclePlan/NewVehiclePlan";
import {
  calculateBasePremium,
  calculateAdjustedPremium,
} from "../../utils/quotes.js";
import { useFormik } from "formik";
import { object, string, number } from "yup";
import Autocomplete from "@mui/joy/Autocomplete";
import "./styles.css";

const addVehicleSchema = object({
  imageLink: string()
    .required()
    .min(4, "A valid link must be over 10 characters")
    .matches(/^https?:\/\//, "URL must start with http:// or https://"),
  make: string().required().min(1, "Please select a valid vehicle make"),
  model: string().required().min(1, "Please select a valid vehicle model"),
  year: number()
    .required()
    .moreThan(1940, "Your vehicle is too old to be insured")
    .typeError("Year must be numerical"),
  color: string().required(),
  registrationNumber: string().required(),
  mileage: number()
    .required()
    .moreThan(0, "Please enter a valid mileage")
    .typeError("Mileage must be numerical"),
  ownerFullName: string().required(),
  ownerIdNumber: string()
    .required()
    .min(13, "Please enter a valid South African ID number")
    .max(13, "Please enter a valid South African ID number"),
  planType: string().required().min(1),
  premium: number().required(),
  insuredValue: number().required(),
});

function NewVehicle({
  editMode = false,
  vehicleData: initialVehicleData = newVehicleTemplate,
  updateData,
}) {
  const [vehicleData, setVehicleData] = useState({ ...initialVehicleData });
  const [vehicleMake, setVehicleMake] = useState(initialVehicleData.make || "");
  const [basePremium, setBasePremium] = useState();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const navigate = useNavigate();

  const {
    id,
    imageLink,
    make,
    model,
    year,
    color,
    registrationNumber,
    mileage,
    ownerFullName,
    ownerIdNumber,
    street,
    city,
    province,
    postalCode,
    country,
    planType,
    premium,
    startDate,
    insuredValue,
  } = initialVehicleData;

  const formik = useFormik({
    initialValues: {
      id: id,
      imageLink: imageLink ?? "",
      make: make ?? "",
      model: model ?? "",
      year: year ?? "",
      color: color ?? "",
      registrationNumber: registrationNumber ?? "",
      mileage: mileage ?? "",
      ownerFullName: ownerFullName ?? "",
      ownerIdNumber: ownerIdNumber ?? "",
      street: street ?? "",
      city: city ?? "",
      province: province ?? "",
      postalCode: postalCode ?? "",
      country: country ?? "",
      planType: planType ?? "",
      premium: premium ?? "",
      startDate: startDate ?? today,
      insuredValue: insuredValue ?? 0,
    },

    validationSchema: addVehicleSchema,

    onSubmit: (values) => {
      editMode ? handleEditPost({ ...values }) : handlePost({ ...values });
    },
  });

  const {
    values,
    touched,
    errors,
    handleBlur,
    setFieldValue,
    handleChange,
    handleSubmit,
  } = formik;

  useEffect(() => {
    setVehicleMake(vehicleData.make || "");
  }, [vehicleData.make]);

  const handleValueChange = (key, value) => {
    setVehicleData((prev) => ({ ...prev, [key]: value }));
  };

  const handlePost = async (updatedVehicle) => {
    await fetch("https://68871b80071f195ca97f4670.mockapi.io/vehicles", {
      method: "POST",
      body: JSON.stringify(updatedVehicle),
      headers: { "Content-Type": "application/json" },
    });
    updateData();
    navigate(`/confirm/${updatedVehicle.registrationNumber}`, {
      state: { status: "created" },
    });
  };

  const handleEditPost = async (updatedVehicle) => {
    await fetch(
      `https://68871b80071f195ca97f4670.mockapi.io/vehicles/${updatedVehicle.id}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedVehicle),
        headers: { "Content-Type": "application/json" },
      }
    );
    updateData();
    navigate(`/confirm/${updatedVehicle.registrationNumber}`, {
      state: { status: "updated" },
    });
  };

  const setInsuranceValues = (make = vehicleMake) => {
    const insureValue = VEHICLE_INFO.find((car) => car.brand === make)?.value;

    handleValueChange("insuredValue", insureValue);
    formik.setFieldValue("insuredValue", insureValue);

    const base = calculateBasePremium(insureValue);
    setBasePremium(base);
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
    handleValueChange("planType", plan.name);
    formik.setFieldValue("planType", plan.name);

    const adjustedPremium = calculateAdjustedPremium(
      basePremium,
      plan.adjustment
    );

    handleValueChange("premium", adjustedPremium);
    formik.setFieldValue("premium", adjustedPremium);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-vehicle">
        <NewVehicleSection title="Vehicle Information">
          <VehicleInput
            label="Image Link"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.imageLink}
            name="imageLink"
            error={touched.imageLink && errors.imageLink}
            helperText={touched.imageLink ? errors.imageLink : ""}
          />
          <VehicleInput
            label="Year"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.year}
            name="year"
            error={touched.year && errors.year}
            helperText={touched.year ? errors.year : ""}
          />
          <VehicleInput
            label="Color"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.color}
            name="color"
            error={touched.color && errors.color}
            helperText={touched.color ? errors.color : ""}
          />
          <VehicleInput
            label="Registration Number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.registrationNumber}
            name="registrationNumber"
            error={touched.registrationNumber && errors.registrationNumber}
            helperText={
              touched.registrationNumber ? errors.registrationNumber : ""
            }
          />
          <VehicleInput
            label="Mileage"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.mileage}
            name="mileage"
            error={touched.mileage && errors.mileage}
            helperText={touched.mileage ? errors.mileage : ""}
          />

          <Autocomplete
            placeholder="Select a make"
            options={VEHICLE_INFO.map((car) => car.brand)}
            disableClearable
            value={values.make}
            onChange={(_, value) => {
              setFieldValue("make", value);
              setVehicleMake(value);
              setInsuranceValues(value);
            }}
            onBlur={() => formik.setFieldTouched("make", true)}
            color="primary"
          />

          {vehicleMake ? (
            <Autocomplete
              placeholder="Select a model"
              options={
                VEHICLE_INFO.find((car) => car.brand === values.make)?.models ||
                []
              }
              disableClearable
              value={values.model}
              onChange={(_, value) => {
                setFieldValue("model", value);
              }}
              onBlur={() => formik.setFieldTouched("model", true)}
              color="primary"
            />
          ) : (
            <></>
          )}
        </NewVehicleSection>

        <NewVehicleSection title="Owner Information">
          <VehicleInput
            label="Full Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ownerFullName}
            name="ownerFullName"
            error={touched.ownerFullName && errors.ownerFullName}
            helperText={touched.ownerFullName ? errors.ownerFullName : ""}
          />
          <VehicleInput
            label="ID Number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ownerIdNumber}
            name="ownerIdNumber"
            error={touched.ownerIdNumber && errors.ownerIdNumber}
            helperText={touched.ownerIdNumber ? errors.ownerIdNumber : ""}
          />
          <VehicleInput
            label="Street"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.street}
            name="street"
            error={touched.street && errors.street}
            helperText={touched.street ? errors.street : ""}
          />
          <VehicleInput
            label="City"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.city}
            name="city"
            error={touched.city && errors.city}
            helperText={touched.city ? errors.city : ""}
          />
          <VehicleInput
            label="Province"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.province}
            name="province"
            error={touched.province && errors.province}
            helperText={touched.province ? errors.province : ""}
          />
          <VehicleInput
            label="Postal Code"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.postalCode}
            name="postalCode"
            error={touched.postalCode && errors.postalCode}
            helperText={touched.postalCode ? errors.postalCode : ""}
          />
          <VehicleInput
            label="Country"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.country}
            name="country"
            error={touched.country && errors.country}
            helperText={touched.country ? errors.country : ""}
          />
        </NewVehicleSection>

        <NewVehicleSection title="Policy Information">
          <VehicleInput
            label="Insured Value"
            onChange={handleChange}
            value={values.insuredValue}
            name="insuredValue"
            disabled
          />
        </NewVehicleSection>

        {!editMode && values.make ? (
          <NewVehiclePlan
            {...{ basePremium, selectedPlan, handlePlanChange, formik }}
          />
        ) : (
          <></>
        )}

        <Button
          variant="soft"
          startDecorator={editMode ? <FileUploadIcon /> : <DoneAllIcon />}
          type="submit"
          className="submit-button"
        >
          Submit {editMode ? "Changes" : "Vehicle"}
        </Button>
      </div>
    </form>
  );
}

export { NewVehicle };
