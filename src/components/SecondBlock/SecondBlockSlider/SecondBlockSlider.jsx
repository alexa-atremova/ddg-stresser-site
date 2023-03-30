import React from "react";
import Slider from "react-slick";
import {
  SliderBlockText,
  SliderBlockTitle,
  SliderWrapBlock,
  SliderStyledSlidesCarousel,
} from "./styles";
import Imgs1 from "./../../../assets/1.png";
import Imgs2 from "./../../../assets/2.png";
import Imgs3 from "./../../../assets/3.png";
import Imgs4 from "./../../../assets/4.png";

export default function SecondBlockSlider({ lang }) {
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
          <img src={Imgs1} alt="" />
          <SliderBlockTitle>
            {lang === "ru" ? "Безопасная оплата" : "Secure payment"}
          </SliderBlockTitle>
          <SliderBlockText>
            {lang === "ru"
              ? "Мы обрабатываем все ваши платежи криптовалютой с нашими собственными узлами, чтобы обеспечить 100% анонимность."
              : "We process all your cryptocurrency payments with our own nodes to provide 100% anonymity."}
          </SliderBlockText>
        </SliderWrapBlock>
        <SliderWrapBlock>
          <img src={Imgs2} alt="" />
          <SliderBlockTitle>
            {lang === "ru"
              ? "Ваша безопасность важна для нас"
              : "Your security is important to us"}
          </SliderBlockTitle>
          <SliderBlockText style={{ width: "350px" }}>
            {lang === "ru"
              ? "Стресс-тесты запускаются из нескольких мест и не могут контролироваться. Ваша конфиденциальность в безопасности, никакие журналы не хранятся, и все данные шифруются."
              : "Stress tests are launched from multiple locations and cannot be controlled. Your privacy is secure, no logs are stored, and all data is encrypted."}
          </SliderBlockText>
        </SliderWrapBlock>
        <SliderWrapBlock>
          <img src={Imgs3} alt="" />
          <SliderBlockTitle>
            {lang === "ru"
              ? "Современные методы атаки"
              : "Modern attack methods"}
          </SliderBlockTitle>
          <SliderBlockText>
            {lang === "ru"
              ? "Наша поддержка здесь, чтобы помочь вам, если вам что-то нужно, вы можете связаться с нами."
              : "Our support is here to help you, if you need anything, you can contact us."}
          </SliderBlockText>
        </SliderWrapBlock>
        <SliderWrapBlock>
          <img src={Imgs4} alt="" />
          <SliderBlockTitle>
            {" "}
            {lang === "ru"
              ? "Служба поддержки с вами 24/7"
              : "Support team available 24/7"}
          </SliderBlockTitle>
          <SliderBlockText>
            {lang === "ru"
              ? "Наши методы ddos-атак способны обходить новейшие средства защиты, и наши инженеры постоянно совершенствуют их."
              : "Our ddos attack methods are able to bypass the latest protections,and our engineers are constantly improving them."}
          </SliderBlockText>
        </SliderWrapBlock>
      </Slider>
    </SliderStyledSlidesCarousel>
  );
}
