import Input from "@mui/joy/Input";

function VehicleInput({
  label,
  onChange,
  onBlur,
  disabled = false,
  value,
  error,
  helperText,
  name,
}) {
  return (
    <Input
      color="primary"
      placeholder={label}
      size="md"
      variant="outlined"
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
      value={value}
      name={name}
      error={error}
      helperText={helperText}
    />
  );
}

export { VehicleInput };
