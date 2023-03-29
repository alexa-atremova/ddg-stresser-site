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
        <LinkTelegram href="https://t.me/ddg_stresser" target="_blank">
          Телеграм Канал
        </LinkTelegram>
        <LinkBot href="https://t.me/ddg_stresser_bot?start=27" target="_blank">
          Телеграм Бот
        </LinkBot>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
