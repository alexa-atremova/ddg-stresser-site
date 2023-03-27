import React from "react";
import {
  HeaderContainer,
  LanguageButton,
  Container,
  LinkTelegram,
  LinkBot,
  LinksContainer,
  Logo,
  LanguageIcon,
  ButtonsContainer,
  Wrapper,
} from "./styled";
import logo from "./../../assets/logo.png";
import ru from "./../../assets/ru.png";
import eng from "./../../assets/eng.png";

const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Logo src={logo} alt="Logo" />
        <Container>
          <LinksContainer>
            <LinkTelegram href="https://example.com" target="_blank">
              Телеграмм Канал
            </LinkTelegram>
            <LinkBot href="https://example.com" target="_blank">
              Телеграмм Бот
            </LinkBot>
          </LinksContainer>
          <ButtonsContainer>
            <LanguageButton>
              <LanguageIcon src={ru} />
              Русс
            </LanguageButton>
            <LanguageButton>
              <LanguageIcon src={eng} />
              Eng
            </LanguageButton>
          </ButtonsContainer>
        </Container>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
