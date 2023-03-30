import React from "react";
import { StyledSlide } from "./styles";

export default function Slide({
  name,
  term_price,
  term_days,
  concurrents,
  methods_available,
  methods_all,
  lang,
}) {
  return (
    <StyledSlide>
      <div>
        <div className="slideCard">
          <div className="title-wrap">
            <h1>{name}</h1>
            <h2>
              {term_price}$ / {term_days} {lang === "ru" ? "дней" : "days"}
            </h2>
          </div>
          <div className="text-wrap">
            <p>
              {lang === "ru" ? "Методы" : "Methods"}: {methods_available}/
              {methods_all}
            </p>
            <p>
              {" "}
              {lang === "ru" ? "Конкуренты" : "Сoncurrents"}: {concurrents}
            </p>
          </div>
        </div>
      </div>
    </StyledSlide>
  );
}
