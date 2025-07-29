import { QuoteCard } from "../../components/QuoteCard/QuoteCard";
import "./styles.css";

function QuotePage() {
  return (
    <div className="quotes-container">
      <div className="quotes">
        <QuoteCard
          color={"#ff74023b"}
          name="bronze"
          price="R100"
          content="blah"
        />
        <QuoteCard
          color={"#006eff69"}
          name="bronze"
          price="R100"
          content="blah"
        />
        <QuoteCard
          color={"#adadad3b"}
          name="silver"
          price="R100"
          content="blah"
        />
      </div>
    </div>
  );
}

export { QuotePage };
