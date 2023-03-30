import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Slide from "../Slide/Slide";
import { StyledSlide } from "../Slide/styles";

import left from "./../../../assets/SliderImg/left.png";
import right from "./../../../assets/SliderImg/right.png";
import {
  StyledNextArrow,
  StyledPrevArrow,
  StyledSlidesCarousel,
} from "./styles";

export default function SlidesCarousel({ lang }) {
  const [tariffs, setTariffs] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.ddg.lol/api/tariff/available")
      .then((response) => {
        setTariffs(response.data.tariffs);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <StyledNextArrow className={className} onClick={onClick}>
        <img src={right} alt="RightArrow" />
      </StyledNextArrow>
    );
  }
  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <StyledPrevArrow className={className} onClick={onClick}>
        <img src={left} alt="LeftArrow" />
      </StyledPrevArrow>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <StyledSlidesCarousel data-aos="zoom-in">
      {tariffs.length > 0 ? (
        <Slider {...settings} className="desk">
          {tariffs.map((tariff) => (
            <StyledSlide key={tariff.name}>
              <div className="slideCard">
                <div className="title-wrap">
                  <h1>{tariff.name}</h1>
                  <h2>
                    {tariff.term_price}$ / {tariff.term_days}{" "}
                    {lang === "ru" ? "дней" : "days"}
                  </h2>
                </div>
                <div className="text-wrap">
                  <p>
                    {lang === "ru" ? "Методы" : "Methods"}:{" "}
                    {tariff.methods_available}/{tariff.methods_all}
                  </p>
                  <p>
                    {" "}
                    {lang === "ru" ? "Конкуренты" : "Сoncurrents"}:{" "}
                    {tariff.concurrents}
                  </p>
                </div>
              </div>
            </StyledSlide>
          ))}
        </Slider>
      ) : (
        <p>Loading...</p>
      )}
    </StyledSlidesCarousel>
  );
}
