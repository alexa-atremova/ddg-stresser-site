import React from "react";
import {
  LinkTelegram,
  LinkBot,
  Logo,
  FooterContainer,
  Container,
} from "./styled";
import logo from "./../../assets/footer_icon.png";

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="Logo" />
      <Container>
        <LinkTelegram href="https://example.com" target="_blank">
          Телеграмм Канал
        </LinkTelegram>
        <LinkBot href="https://example.com" target="_blank">
          Телеграмм Бот
        </LinkBot>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
