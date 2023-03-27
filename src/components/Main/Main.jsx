import React from "react";
import styled from "styled-components";

import video from "./../../assets/gif.mp4";

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 990px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1420px;
  gap: 100px;
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Title = styled.h1`
  font-family: "Avante Int";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 55px;
  /* or 157% */

  color: #1b1b1b;

  width: 670px;
`;

const Text = styled.p`
  font-family: "Gill Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 35px;
  /* or 159% */

  color: #414141;

  width: 640px;
`;

const Button = styled.button`
  border: none;
  cursor: pointer;

  &:first-of-type {
    width: 196px;
    height: 55px;

    background: #eaeaea;
    border-radius: 0px 10px;

    font-family: "Gill Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 25px;

    color: #1b1b1b;
  }

  &:last-of-type {
    width: 273px;
    height: 55px;
    margin-left: 20px;
    background: linear-gradient(180deg, #64bcfc 0%, #3d99ed 100%);

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0px 10px;

    font-family: "Gill Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 25px;

    color: #ffffff;
  }
`;

const RightSection = styled.div`
  width: 500px;
  height: 552px;
  margin-right: 100px;
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 19px;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 341px;
  height: 180px;
  margin: 0;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0px 25px;

  gap: 0px;
`;

const BlockTitle = styled.h2`
  width: 311px;
  height: 55px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 55px;
  padding: 20px;
  line-height: 55px;
  margin: 0;
  text-align: center;
  box-shadow: inset 0px -1px 0px #f2f2f2;
  color: #1fa5ff;
`;

const BlockText = styled.p`
  width: 239px;
  height: 44px;
  font-family: "Avante Int";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 22px;
  padding: 20px;
  margin: 0;
  text-align: center;

  color: #2b2d42;
`;

const Main = () => {
  return (
    <MainContainer>
      <Wrapper>
        <TopSection>
          <LeftSection>
            <Title>
              DDG-STRESSER - сервис, через который можно проводить маштабную
              тестировку ваших ресурсов
            </Title>
            <Text>
              DDG-Stresser-это телеграмм бот, который позволяет отправлять атаки
              с использованием нашей мощной DDoS-сети с самыми передовыми
              методами и самой высокой мощностью.
              <br />
              <br /> Мы предлагаем наиболее эффективные методы, делая его
              стабильным, надежным и долгосрочным. <br />
              <br />
              Наш сервис предлагает множество методов, некоторые из которых
              являются новыми и могут обойти несколько защит.
            </Text>
            <div>
              <Button>Регистрация</Button>
              <Button>Авторизация по ключу</Button>
            </div>
          </LeftSection>
          <RightSection>
            <video
              width="100%"
              height="100%"
              loop={true}
              controls={false}
              autoPlay={true}
              muted
            >
              <source src={video} type="video/mp4" />
              Ваш браузер не поддерживает HTML5 видео.
            </video>
          </RightSection>
        </TopSection>
        <BottomSection>
          <Block>
            <BlockTitle>{">"}20к</BlockTitle>
            <BlockText>Зарегистрированных пользователей</BlockText>
          </Block>
          <Block>
            <BlockTitle style={{ color: "#22DFAB" }}>{">"}1 года</BlockTitle>
            <BlockText>Онлайн</BlockText>
          </Block>
          <Block>
            <BlockTitle style={{ color: " #FBC12E;" }}>{">"}300к</BlockTitle>
            <BlockText>Совершенных тестов</BlockText>
          </Block>
          <Block>
            <BlockTitle style={{ color: "#AC8AF8" }}>{">"}80</BlockTitle>
            <BlockText>Доступно методов</BlockText>
          </Block>
        </BottomSection>
      </Wrapper>
    </MainContainer>
  );
};

export default Main;
