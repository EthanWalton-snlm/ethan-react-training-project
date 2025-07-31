import { BarChart } from "@mui/x-charts/BarChart";
import Typography from "@mui/joy/Typography";
import { useColorScheme } from "@mui/joy/styles";
import { Card, CardContent } from "@mui/joy";
import { sentenceCase } from "../../utils/sentenceCase";
import Divider from "@mui/joy/Divider";

function VehicleChart({ data, filterKey }) {
  const { mode } = useColorScheme();

  const dataCounts = {};
  const xAxis = data.map((vehicle) => {
    const xVal = vehicle[filterKey];
    dataCounts[xVal] = (dataCounts[xVal] ?? 0) + 1;
    return xVal;
  });

  const yAxis = Object.values(dataCounts);

  return (
    <>
      <Card variant="outlined">
        <Typography
          level="h4"
          variant="plain"
          sx={{
            color: mode === "dark" ? "neutral.0" : "neutral.900",
          }}
        >
          {sentenceCase(filterKey)}
        </Typography>
        <Divider orientation="horizontal" />
        <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: xAxis,
            },
          ]}
          series={[
            {
              data: yAxis,
            },
          ]}
          height={300}
        />
      </Card>
    </>
  );
}

export { VehicleChart };
