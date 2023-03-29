import React from "react";
import Imgs from "./../../assets/Imgs.png";
import Imgs1 from "./../../assets/1.png";
import Imgs2 from "./../../assets/2.png";
import Imgs3 from "./../../assets/3.png";
import Imgs4 from "./../../assets/4.png";
import {
  BlockWrapBlock,
  BlockText,
  BlockTitle,
  BlockBottomSection,
  BlockLeftSection,
  BlockContainer,
  BlockRightSection,
  Text,
  Title,
  BlockTopSection,
  BlockWrapper,
} from "./styles";
import SecondBlockSlider from "./SecondBlockSlider/SecondBlockSlider";

const SecondBlock = () => {
  return (
    <BlockContainer>
      <BlockWrapper>
        <BlockTopSection>
          <BlockLeftSection>
            <img src={Imgs} alt="" />
          </BlockLeftSection>
          <BlockRightSection>
            <Title>Преимущества DDG STRESSER</Title>
            <Text>
              Наш настраиваемый концентратор атак стрессеров позволяет вам
              обойти пользовательские правила блокировки DDOS-атак, и это
              поможет достичь вашей цели с большей уверенностью. С нашим
              концентратором вы можете использовать пользовательские настройки
              для обхода любой цели, даже если у них есть блокировка DDOS-атак.
            </Text>
          </BlockRightSection>
        </BlockTopSection>
        <BlockBottomSection>
          <BlockWrapBlock>
            <img src={Imgs1} alt="" />
            <BlockTitle>Безопасная оплата</BlockTitle>
            <BlockText>
              Мы обрабатываем все ваши платежи криптовалютой с нашими
              собственными узлами, чтобы обеспечить 100% анонимность.
            </BlockText>
          </BlockWrapBlock>
          <BlockWrapBlock>
            <img src={Imgs2} alt="" />
            <BlockTitle>Ваша безопасность важна для нас</BlockTitle>
            <BlockText style={{ width: "350px" }}>
              Стресс-тесты запускаются из нескольких мест и не могут
              контролироваться. Ваша конфиденциальность в безопасности, никакие
              журналы не хранятся, и все данные шифруются.
            </BlockText>
          </BlockWrapBlock>
          <BlockWrapBlock>
            <img src={Imgs3} alt="" />
            <BlockTitle>Современные методы атаки</BlockTitle>
            <BlockText>
              Наша поддержка здесь, чтобы помочь вам, если вам что-то нужно, вы
              можете связаться с нами.
            </BlockText>
          </BlockWrapBlock>
          <BlockWrapBlock>
            <img src={Imgs4} alt="" />
            <BlockTitle>Служба поддержки с вами 24/7</BlockTitle>
            <BlockText>
              Наши методы ddos-атак способны обходить новейшие средства защиты,
              и наши инженеры постоянно совершенствуют их.
            </BlockText>
          </BlockWrapBlock>
        </BlockBottomSection>
        <SecondBlockSlider />
      </BlockWrapper>
    </BlockContainer>
  );
};

export default SecondBlock;
