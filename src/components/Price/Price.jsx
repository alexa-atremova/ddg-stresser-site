import React from "react";

import SlidesCarousel from "./Slider/Slider";
import { Button, PriceContainer, Text, Title } from "./styles";
import images5 from "./../../assets/images5.png";
import images6 from "./../../assets/images6.png";

const Price = ({ lang }) => {
  return (
    <PriceContainer>
      <Title>{lang === "ru" ? "Ценообразование" : "Pricing"}</Title>
      <Text>
        <img className="backimg5" src={images5} alt="" />
        <img className="backimg6" src={images6} alt="" />
        {lang === "ru"
          ? "Узнайте, сколько будет стоить использование нашего стрессера в Telegram. Мы предлагаем прозрачную и гибкую ценовую политику, которая позволяет выбрать оптимальный вариант для вашего бизнеса."
          : "Find out how much it will cost to use our stresser in Telegram. We offer a transparent and flexible pricing policy that allows you to choose the best option for your business."}
      </Text>
      <SlidesCarousel lang={lang} />
      <a href="https://t.me/ddg_stresser_bot?start=27" target="_blank">
        <Button>{lang === "ru" ? "Приобрести тариф" : "Buy Plan"}</Button>
      </a>
    </PriceContainer>
  );
};

export default Price;
