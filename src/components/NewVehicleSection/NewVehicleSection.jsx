import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import "./styles.css";
import { useColorScheme } from "@mui/joy/styles";

function NewVehicleSection({ title, children }) {
  const { mode } = useColorScheme();

  return (
    <div className="form-section-container">
      <Typography
        level="h2"
        variant="plain"
        sx={{ color: mode === "dark" ? "neutral.0" : "neutral.900" }}
      >
        {title}
      </Typography>
      <Divider />
      <div className="form-section">{children}</div>
    </div>
  );
}

export { NewVehicleSection };
