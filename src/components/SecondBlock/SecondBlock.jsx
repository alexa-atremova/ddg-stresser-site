import React from "react";
import Imgs from "./../../assets/Imgs.png";
import Imgs1 from "./../../assets/1.png";
import Imgs2 from "./../../assets/2.png";
import Imgs3 from "./../../assets/3.png";
import Imgs4 from "./../../assets/4.png";
import images1 from "./../../assets/images1.png";
import images2 from "./../../assets/images2.png";
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

const SecondBlock = ({ lang }) => {
  return (
    <BlockContainer>
      <BlockWrapper>
        <BlockTopSection>
          <BlockLeftSection>
            <img className="backimg1" src={images1} alt="" />
            <img src={Imgs} alt="" />
          </BlockLeftSection>
          <BlockRightSection>
            <Title>
              {lang === "ru"
                ? "Преимущества DDG STRESSER"
                : "Advantages of DDG STRESSER"}
            </Title>
            <Text>
              {lang === "ru"
                ? "Наш настраиваемый концентратор атак стрессеров позволяет вам обойти пользовательские правила блокировки DDOS-атак, и это поможет достичь вашей цели с большей уверенностью. С нашим концентратором вы можете использовать пользовательские настройки для обхода любой цели, даже если у них есть блокировка DDOS-атак."
                : "Our customizable stresser attack hub allows you to bypass custom DDOS attack blocking rules, and this will help you achieve your goals with greater confidence. With our hub, you can use custom settings to bypass any target, even if they have DDOS attack blocking."}
            </Text>
            <img className="backimg2" src={images2} alt="" />
          </BlockRightSection>
        </BlockTopSection>
        <BlockBottomSection>
          <BlockWrapBlock>
            <img src={Imgs1} alt="" />
            <BlockTitle>
              {lang === "ru" ? "Безопасная оплата" : "Secure payment"}
            </BlockTitle>
            <BlockText>
              {lang === "ru"
                ? "Мы обрабатываем все ваши платежи криптовалютой с нашими собственными узлами, чтобы обеспечить 100% анонимность."
                : "We process all your cryptocurrency payments with our own nodes to provide 100% anonymity."}
            </BlockText>
          </BlockWrapBlock>
          <BlockWrapBlock>
            <img src={Imgs2} alt="" />
            <BlockTitle>
              {lang === "ru"
                ? "Ваша безопасность важна для нас"
                : "Your security is important to us"}
            </BlockTitle>
            <BlockText style={{ width: "350px" }}>
              {lang === "ru"
                ? "Стресс-тесты запускаются из нескольких мест и не могут контролироваться. Ваша конфиденциальность в безопасности, никакие журналы не хранятся, и все данные шифруются."
                : "Stress tests are launched from multiple locations and cannot be controlled. Your privacy is secure, no logs are stored, and all data is encrypted."}
            </BlockText>
          </BlockWrapBlock>
          <BlockWrapBlock>
            <img src={Imgs3} alt="" />
            <BlockTitle>
              {lang === "ru"
                ? "Современные методы атаки"
                : "Modern attack methods"}
            </BlockTitle>
            <BlockText>
              {lang === "ru"
                ? "Наша поддержка здесь, чтобы помочь вам, если вам что-то нужно, вы можете связаться с нами."
                : "Our support is here to help you, if you need anything, you can contact us."}
            </BlockText>
          </BlockWrapBlock>
          <BlockWrapBlock>
            <img src={Imgs4} alt="" />
            <BlockTitle>
              {" "}
              {lang === "ru"
                ? "Служба поддержки с вами 24/7"
                : "Support team available 24/7"}
            </BlockTitle>
            <BlockText>
              {lang === "ru"
                ? "Наши методы ddos-атак способны обходить новейшие средства защиты, и наши инженеры постоянно совершенствуют их."
                : "Our ddos attack methods are able to bypass the latest protections,and our engineers are constantly improving them."}
            </BlockText>
          </BlockWrapBlock>
        </BlockBottomSection>
        <SecondBlockSlider lang={lang} />
      </BlockWrapper>
    </BlockContainer>
  );
};

export default SecondBlock;
