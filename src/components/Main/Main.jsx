import React from "react";
import video from "./../../assets/gif.mp4";
import {
  WrapBlock,
  BlockText,
  BlockTitle,
  BottomSection,
  Button,
  LeftSection,
  MainContainer,
  RightSection,
  Text,
  Title,
  TopSection,
  Wrapper,
} from "./styles";

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
              DDG-Stresser-это телеграм бот, который позволяет отправлять атаки
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
          <WrapBlock>
            <BlockTitle>{">"}20к</BlockTitle>
            <BlockText>Зарегистрированных пользователей</BlockText>
          </WrapBlock>
          <WrapBlock>
            <BlockTitle style={{ color: "#22DFAB" }}>{">"}1 года</BlockTitle>
            <BlockText>Онлайн</BlockText>
          </WrapBlock>
          <WrapBlock>
            <BlockTitle style={{ color: " #FBC12E;" }}>{">"}300к</BlockTitle>
            <BlockText>Совершенных тестов</BlockText>
          </WrapBlock>
          <WrapBlock>
            <BlockTitle style={{ color: "#AC8AF8" }}>{">"}80</BlockTitle>
            <BlockText>Доступно методов</BlockText>
          </WrapBlock>
        </BottomSection>
      </Wrapper>
    </MainContainer>
  );
};

export default Main;
