import React, { useState } from "react";
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
import {
  CloseButton,
  CloseIcon,
  HamburgerMenuButton,
  HamburgerMenuIcon,
  Menu,
  MenuButton,
  Modal,
  ModalContent,
} from "./menu-styles";
import arrow_img2 from "./../../assets/arrow_img2.png";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <HeaderContainer>
      <Wrapper>
        <Logo src={logo} alt="Logo" />
        <Container>
          <LinksContainer>
            <LinkTelegram href="https://t.me/ddg_stresser" target="_blank">
              Телеграм Канал
            </LinkTelegram>
            <LinkBot
              href="https://t.me/ddg_stresser_bot?start=27"
              target="_blank"
            >
              Телеграм Бот
            </LinkBot>
          </LinksContainer>
          <ButtonsContainer>
            <LanguageButton>
              <LanguageIcon src={ru} />
              Рус
            </LanguageButton>
            <LanguageButton>
              <LanguageIcon src={eng} />
              Eng
            </LanguageButton>
          </ButtonsContainer>
          <Menu>
            <HamburgerMenuButton onClick={handleModal}>
              <HamburgerMenuIcon />
            </HamburgerMenuButton>
            {showModal && (
              <Modal onClick={handleModal}>
                <ModalContent onClick={(e) => e.stopPropagation()}>
                  <div className="img1">
                    <img src={arrow_img2} alt="" />
                  </div>
                  <div className="img2">
                    <img src={arrow_img2} alt="" />
                  </div>
                  <CloseButton onClick={handleModal}>
                    <CloseIcon />
                  </CloseButton>
                  <LinkTelegram href="#">Авторизоваться</LinkTelegram>
                  <LinkBot
                    href="https://t.me/ddg_stresser_bot?start=27"
                    target="_blank"
                  >
                    Телеграм бот
                  </LinkBot>
                </ModalContent>
              </Modal>
            )}
          </Menu>
        </Container>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
