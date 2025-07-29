import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import "./styles.css";

function QuoteCard({ color, price, name, content }) {
  return (
    <>
      <Card
        variant="solid"
        color="neutral"
        className="quote-card"
        sx={`background-color: ${color}`}
      >
        <CardContent orientation="vertical">
          <Typography>{price}</Typography>
          <Typography>{name}</Typography>
          <Divider orientation="horizontal" />
          <Typography>{content}</Typography>
        </CardContent>
      </Card>
      ;
    </>
  );
}

export { QuoteCard };
