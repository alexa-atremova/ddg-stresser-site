import React from "react";
import Slider from "react-slick";
import {
  SliderBlockText,
  SliderBlockTitle,
  SliderStyledSlidesCarousel,
  SliderWrapBlock,
} from "./styles";
import Imgs1 from "./../../../assets/1.png";
import Imgs2 from "./../../../assets/2.png";
import Imgs3 from "./../../../assets/3.png";
import Imgs4 from "./../../../assets/4.png";

export default function SecondBlockSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    autoplay: true,
  };

  return (
    <SliderStyledSlidesCarousel data-aos="zoom-in">
      <Slider {...settings} className="desk">
        <SliderWrapBlock>
          <img classname="blockImg" src={Imgs1} alt="" />
          <SliderBlockTitle>Безопасная оплата</SliderBlockTitle>
          <SliderBlockText>
            Мы обрабатываем все ваши платежи криптовалютой с нашими собственными
            узлами, чтобы обеспечить 100% анонимность.
          </SliderBlockText>
        </SliderWrapBlock>
        <SliderWrapBlock>
          <img classname="blockImg" src={Imgs2} alt="" />
          <SliderBlockTitle>Ваша безопасность важна для нас</SliderBlockTitle>
          <SliderBlockText style={{ width: "350px" }}>
            Стресс-тесты запускаются из нескольких мест и не могут
            контролироваться. Ваша конфиденциальность в безопасности, никакие
            журналы не хранятся, и все данные шифруются.
          </SliderBlockText>
        </SliderWrapBlock>
        <SliderWrapBlock>
          <img classname="blockImg" src={Imgs3} alt="" />
          <SliderBlockTitle>Современные методы атаки</SliderBlockTitle>
          <SliderBlockText>
            Наша поддержка здесь, чтобы помочь вам, если вам что-то нужно, вы
            можете связаться с нами.
          </SliderBlockText>
        </SliderWrapBlock>
        <SliderWrapBlock>
          <img classname="blockImg" src={Imgs4} alt="" />
          <SliderBlockTitle>Служба поддержки с вами 24/7</SliderBlockTitle>
          <SliderBlockText>
            Наши методы ddos-атак способны обходить новейшие средства защиты, и
            наши инженеры постоянно совершенствуют их.
          </SliderBlockText>
        </SliderWrapBlock>
      </Slider>
    </SliderStyledSlidesCarousel>
  );
}
