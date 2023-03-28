import React from "react";
import Slider from "react-slick";
import Slide from "../Slide/Slide";

import left from "./../../../assets/SliderImg/left.png";
import right from "./../../../assets/SliderImg/right.png";
import {
  StyledNextArrow,
  StyledPrevArrow,
  StyledSlidesCarousel,
} from "./styles";

export default function SlidesCarousel() {
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
        breakpoint: 1367,
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
      {
        breakpoint: 533,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <StyledSlidesCarousel data-aos="zoom-in">
      <Slider {...settings} className="desk">
        <Slide
          title={"⚡️ L7 + Telegram v1"}
          price={"100"}
          stress={"3600"}
          metod={"7"}
          botnet={"TG-Botnet:✅"}
        />
        <Slide
          title={"🌐 Еxp. 3"}
          price={"125"}
          stress={"3600"}
          metod={"26"}
          botnet={"TG-Botnet:❌"}
        />
        <Slide
          title={"🌐 Botnet exp1"}
          price={"149"}
          stress={"1200"}
          metod={"29"}
          botnet={"TG-Botnet:❌"}
        />
        <Slide
          title={"Telegram ⚡️ exp. 2"}
          price={"150"}
          stress={"3600"}
          metod={"1"}
          botnet={"TG-Botnet:✅"}
        />
        <Slide
          title={"🌐 Еxp. 4"}
          price={"180"}
          stress={"4500"}
          metod={"27"}
          botnet={"TG-Botnet:❌"}
        />
        <Slide
          title={"🌐 Exp. 5"}
          price={"250"}
          stress={"7800"}
          metod={"27"}
          botnet={"TG-Botnet:❌"}
        />
        <Slide
          title={"🌐 Еxp. 6"}
          price={"450"}
          stress={"10800"}
          metod={"7"}
          botnet={"TG-Botnet:❌"}
        />
        <Slide
          title={"НЕ ДЛЯ НИЩИХ 🙈"}
          price={"1250"}
          stress={"10800"}
          metod={"28"}
          botnet={"TG-Botnet:✅"}
        />
        <Slide
          title={"Not for beggars 🦈"}
          price={"1500"}
          stress={"10800"}
          metod={"53/81"}
          botnet={"TG-Botnet:❌"}
        />
        <Slide
          title={"Zeus 👾"}
          price={"4000"}
          stress={"10800"}
          metod={"27/81"}
          botnet={"TG-Botnet:✅"}
        />
      </Slider>
    </StyledSlidesCarousel>
  );
}
