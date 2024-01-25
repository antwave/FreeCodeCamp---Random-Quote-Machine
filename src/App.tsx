import { useState } from "react";
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./App.css";

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const color = Math.floor(Math.random() * 16777216);
  return "#" + color.toString(16);
};

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };

  return (
    <div
      className="background"
      style={{ backgroundColor: randomColor, transition }}
    >
      <div id="quote-box">
        <div
          className="quote-content"
          style={{ color: randomColor, transition }}
        >
          <h2 id="text">
            <FaQuoteLeft
              size="30"
              style={{ marginRight: "10px" }}
            />
            {quote.quote}{" "}
            <FaQuoteRight
              size="30"
              style={{ marginRight: "10px" }}
            />
          </h2>
          <h4 id="author">- {quote.author}</h4>
        </div>
        <div id="buttons">
          <a
            href="https://twitter.com/intent/tweet"
            id="tweet-quote"
            style={{
              backgroundColor: randomColor,
              marginRight: "10px0",
              transition,
            }}
          >
            <FaTwitter color="white" />
          </a>
          <button
            id="new-quote"
            onClick={changeQuote}
            style={{ backgroundColor: randomColor, transition }}
          >
            Change Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
