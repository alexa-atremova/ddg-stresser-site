import React from "react";
import styled from "styled-components";
import SlidesCarousel from "./Slider/Slider";
import SliderComponent from "./Slider/Slider";

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
    </PriceContainer>
  );
};

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 150px;
  width: 100%;
  height: 895px;
  gap: 30px;
`;

const Text = styled.h2`
  width: 794px;
  font-family: "Gill Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 35px;
  /* or 175% */
  margin: 0;
  text-align: center;

  color: #1b1b1b;
`;

const Title = styled.p`
  width: 358px;
  margin: 0;
  font-family: "Avante Int";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 65px;
  /* identical to box height, or 162% */

  color: #1b1b1b;
`;

export default Price;
