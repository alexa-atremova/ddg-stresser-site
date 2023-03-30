import React from "react";
import {
  LinkTelegram,
  LinkBot,
  Logo,
  FooterContainer,
  Container,
} from "./styled";
import logo from "./../../assets/footer_icon.png";

const Footer = ({ lang }) => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="Logo" />
      <Container>
        <LinkTelegram href="https://t.me/ddg_stresser" target="_blank">
          {lang === "ru" ? "Телеграм Канал" : "Telegram Channel"}{" "}
          {/* используем выбранный язык */}
        </LinkTelegram>
        <LinkBot href="https://t.me/ddg_stresser_bot?start=28" target="_blank">
          {lang === "ru" ? "Телеграм Бот" : "Telegram Bot"}{" "}
          {/* используем выбранный язык */}
        </LinkBot>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
