import React from "react";
import { StyledSlide } from "./styles";
// import social from "./../../../Assets/Team/Vector.png";

export default function Slide({ title, price, stress, metod, botnet }) {
  return (
    <StyledSlide>
      <div>
        <div className="slideCard">
          <div className="title-wrap">
            <h1>{title}</h1>
            <h2>{price}$ / 30 дней</h2>
          </div>
          <div className="text-wrap">
            <p>Максимальное время </p>
            <p>стресса: {stress} сек</p>
            <p>Методы: {metod}/81</p>
            <p>{botnet}</p>
          </div>
        </div>
      </div>
    </StyledSlide>
  );
}
