import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Slide from "../Slide/Slide";

import left from "./../../../assets/SliderImg/left.png";
import right from "./../../../assets/SliderImg/right.png";
import {
  StyledNextArrow,
  StyledPrevArrow,
  StyledSlidesCarousel,
} from "./styles";

export default function SlidesCarousel({ lang }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://api.ddg.lol/api/tariff/available")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
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
      {data ? (
        <Slider {...settings} className="desk">
          {data.tariffs.map((tariff) => (
            <Slide
              key={tariff.name}
              name={tariff.name}
              term_price={tariff.term_price}
              term_days={tariff.term_days}
              methods_available={tariff.methods_available}
              methods_all={tariff.methods_all}
              concurrents={tariff.concurrents}
              lang={lang}
            />
          ))}
        </Slider>
      ) : (
        <div>Loading</div>
      )}
    </StyledSlidesCarousel>
  );
}
