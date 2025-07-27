import Input from "@mui/joy/Input";

function VehicleInput({ onChange, placeholder, disabled, value = "" }) {
  return (
    <>
      <Input
        color="primary"
        placeholder={placeholder}
        size="md"
        variant="outlined"
        onChange={onChange}
        disabled={disabled}
        defaultValue={value}
      />
    </>
  );
}

export { VehicleInput };
