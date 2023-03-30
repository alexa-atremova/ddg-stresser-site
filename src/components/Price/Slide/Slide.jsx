import React from "react";
import { StyledSlide } from "./styles";
// import social from "./../../../Assets/Team/Vector.png";

export default function Slide({ title, price, stress, metod, botnet, lang }) {
  return (
    <StyledSlide>
      <div>
        <div className="slideCard">
          <div className="title-wrap">
            <h1>{title}</h1>
            <h2>
              {price}$ / 30 {lang === "ru" ? "дней" : "days"}
            </h2>
          </div>
          <div className="text-wrap">
            <p>
              {lang === "ru"
                ? "Максимальное время стресса"
                : "Maximum stress time"}
              : {stress} {lang === "ru" ? "сек" : "sec"}
            </p>
            <p>
              {lang === "ru" ? "Методы" : "Methods"}: {metod}/81
            </p>
            <p>{botnet}</p>
          </div>
        </div>
      </div>
    </StyledSlide>
  );
}
