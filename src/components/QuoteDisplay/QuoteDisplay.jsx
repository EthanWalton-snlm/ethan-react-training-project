import { QuoteCard } from "../QuoteCard/QuoteCard";
import { Carousel } from "react-responsive-3d-carousel";
import "react-responsive-3d-carousel/dist/styles.css";
import "./styles.css";

function QuoteDisplay({ premium }) {
  const slides = [
    <QuoteCard
      name="Bronze"
      price={`R${parseFloat(premium).toFixed(2)}`}
      content={
        <ul>
          <li>Theft Cover</li>
        </ul>
      }
    />,
    <QuoteCard
      name="Diamond"
      price={`R${(premium * 2).toFixed(2)}`}
      content={
        <ul>
          <li>Theft Cover</li>
          <li>Accident Cover</li>
          <li>Act of God Cover</li>
          <li>Vehicle Tracking</li>
        </ul>
      }
    />,
    <QuoteCard
      name="Silver"
      price={`R${(premium * 1.5).toFixed(2)}`}
      content={
        <ul>
          <li>Theft Cover</li>
          <li>Accident Cover</li>
          <li>Act of God Cover</li>
        </ul>
      }
    />,
  ];
  return (
    <div className="carousel-container">
      <Carousel
        items={slides}
        startIndex={0}
        defaultOption={{ widthFactor: 0.8 }}
        autoPlay={false}
        swipeable={true}
        showStatus={false}
        showIndicators={false}
        width={"15rem"}
      />
    </div>
  );
}

export { QuoteDisplay };
