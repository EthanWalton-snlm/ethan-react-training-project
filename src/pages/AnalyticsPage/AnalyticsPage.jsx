import { VehicleChart } from "../../components/VehicleChart/VehicleChart";
import Typography from "@mui/joy/Typography";
import { useColorScheme } from "@mui/joy/styles";
import "./styles.css";

function AnalyticsPage({ vehicleData }) {
  const { mode } = useColorScheme();
  return (
    <div className="analytics-container">
      <Typography
        level="h1"
        variant="plain"
        sx={{
          color: mode === "dark" ? "neutral.0" : "neutral.900",
          margin: "0 0 1rem 0",
        }}
      >
        Vehicle Analytics
      </Typography>
      <div className="charts">
        <VehicleChart data={vehicleData} filterKey="color" />
        <VehicleChart data={vehicleData} filterKey="planType" />
      </div>
    </div>
  );
}

export { AnalyticsPage };
