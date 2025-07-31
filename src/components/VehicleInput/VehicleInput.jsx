import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";

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
    <div>
      <Typography
        level="p"
        color={error ? "danger" : "neutral"}
        sx={{ margin: "0 0 0 0.1rem" }}
      >
        {error ? helperText : label}
      </Typography>
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
        sx={{ margin: "0.25rem 0 0 0" }}
      />
    </div>
  );
}

export { VehicleInput };
