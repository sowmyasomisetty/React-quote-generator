import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do what you can, with what you have, where you are.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Act as if what you do makes a difference. It does.",
    "Difficulties in life are intended to make us better, not bitter.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Trust is like a paper, once it's crumpled it can't be perfect again, but it can still be used to write a beautiful story.",
    "Sometimes, the best revenge is to smile and move on, letting go of those who betrayed you.",
    "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
    "The hardest thing about betrayal is that it never comes from your enemies.",
    "The future depends on what you do today.",
    "Your future is created by what you do today, not tomorrow.",
    "Don't watch the clock; do what it does. Keep going.",
    "The best way to predict the future is to create it.",
    "Opportunities don't happen. You create them.",
    "Doubt kills more dreams than failure ever will.",
    "The road to success and the road to failure are almost exactly the same.",
    "Keep going. Everything you need will come to you at the perfect time.",
  ];

  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center text-white position-relative">
      {/* heading at the top */}
      <h1 className="position-absolute top-0 w-100 text-center p-3 text-white">
        Random Quote Generator
      </h1>

      {/* Quote and button centered */}
      <div className="container text-center">
        <p className="fs-3 fw-bold mb-4">"{quote}"</p>
        <button onClick={generateQuote} className="btn btn-dark text-white px-4 py-2">
          New Quote
        </button>
      </div>
    </div>
  );
};

export default App;
