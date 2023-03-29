import React from "react";
import styled from "styled-components";
import SlidesCarousel from "./Slider/Slider";
import { Button, PriceContainer, Text, Title } from "./styles";

const Price = () => {
  return (
    <PriceContainer>
      <Title>Ценообразование</Title>
      <Text>
        Узнайте, сколько будет стоить использование нашего стрессера в Telegram.
        Мы предлагаем прозрачную и гибкую ценовую политику, которая позволяет
        выбрать оптимальный вариант для вашего бизнеса.
      </Text>
      <SlidesCarousel />
      <Button>ПРиобрести тариф</Button>
    </PriceContainer>
  );
};

export default Price;
