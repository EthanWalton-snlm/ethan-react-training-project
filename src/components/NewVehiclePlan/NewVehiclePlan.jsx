import { useColorScheme } from "@mui/joy/styles";
import Autocomplete from "@mui/joy/Autocomplete";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import { PLAN_INFO } from "../../constants";
import { QuoteDisplay } from "../QuoteDisplay/QuoteDisplay";

function NewVehiclePlan({
  basePremium,
  selectedPlan,
  handlePlanChange,
  formik,
}) {
  const { mode } = useColorScheme();

  return (
    <>
      <Typography
        level="h2"
        variant="plain"
        sx={{ color: mode === "dark" ? "neutral.0" : "neutral.900" }}
      >
        Plan Selection
      </Typography>
      <Divider />
      <QuoteDisplay premium={basePremium} />
      <Autocomplete
        placeholder="Select a plan"
        options={PLAN_INFO}
        getOptionLabel={(option) => option.name}
        disableClearable
        onChange={(_, value) => {
          formik.setFieldTouched("planType", true);
          handlePlanChange(value);
        }}
        value={selectedPlan}
        slotProps={{
          input: {
            name: "planType",
            onBlur: formik.handleBlur,
          },
        }}
        color="primary"
        error={formik.touched.planType && !!formik.errors.planType}
        helperText={formik.touched.planType ? formik.errors.planType : ""}
      />
    </>
  );
}

export { NewVehiclePlan };
