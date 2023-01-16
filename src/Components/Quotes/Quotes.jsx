/* eslint-disable react-hooks/exhaustive-deps */
import { Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./quotes.css";

export default function Quotes() {
  const [QuotesData, setQuotesData] = useState([]);
  const [index, setIndex] = useState(1);

  const length = QuotesData.length;
  const time = 6000;
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => setQuotesData(data));
    console.log(QuotesData);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const updateIndex = index >= length - 1 ? 0 : index + 1;
      setIndex(updateIndex);
    }, time);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="quotes_section">
      <div className="quotes_container">
        <div
          className="quotes_cont"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {QuotesData.map((item, index) => {
            return (
              <div className="quotes_card" key={index}>
                <Typography
                  variant="Title"
                  sx={{
                    fontStyle: "italic",
                    fontSize: "28px",
                    textAlign: "center",
                  }}
                >
                  "{item.text}"
                </Typography>
                <Typography variant="subtitle" sx={{ textAlign: "right" }}>
                  {item.author}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
