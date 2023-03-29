import React, { useState } from "react";
import { LinkBot } from "../Header/styled";
import video from "./../../assets/gif.mp4";
import logo from "./../../assets/logo.png";
import {
  AuthInput,
  ButtonBot,
  Checkbox,
  CloseButton,
  CloseIcon,
  LinkAuth,
  Modal,
  ModalContent,
  TermsButton,
  TermsModalContent,
} from "./modal-styles";
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
  ButtonSing,
} from "./styles";

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [merchKey, setMerchKey] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.match(/^\d{1,19}:[A-Za-z0-9]{1,30}$/)) {
      setIsValid(true);
      setMerchKey(inputValue);
    } else {
      setIsValid(false);
    }
  };

  const handleAuthClick = () => {
    if (isValid) {
      window.open(`https://webapp.ddg.lol/?key=${merchKey}`);
    }
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };
  const handleTerms = () => {
    setIsChecked(false);
    setShowTerms(!showTerms);
  };
  const handleAuth = () => {
    setShowTerms(false);
    setShowAuth(!showAuth);
  };

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
              DDG-Stresser - это телеграмм бот, который позволяет отправлять
              атаки с использованием нашей мощной DDoS-сети с самыми передовыми
              методами и самой высокой мощностью.
              <br />
              <br /> Мы предлагаем наиболее эффективные методы, делая его
              стабильным, надежным и долгосрочным. <br />
              <br />
              Наш сервис предлагает множество методов, некоторые из которых
              являются новыми и могут обойти несколько защит.
            </Text>
            <div>
              <ButtonSing onClick={handleModal}> Регистрация</ButtonSing>
              <Button onClick={handleTerms}>Авторизация по ключу</Button>
            </div>
            {showModal && (
              <Modal onClick={handleModal}>
                <ModalContent onClick={(e) => e.stopPropagation()}>
                  <CloseButton onClick={handleModal}>
                    <CloseIcon />
                  </CloseButton>
                  <div className="text">
                    <h1>Регистрация</h1>
                    <p>
                      Чтобы зарегистрироваться в нашей системе вам необходимо
                      перейти на наш телеграмм бот и приобрести любой тариф из
                      предложенных и получить ключ, благодаря которому вы уже
                      сможете авторизоваться на сайте
                    </p>
                  </div>

                  <ButtonBot href="#">
                    <img src={logo} alt="" />
                    Телеграм бот
                  </ButtonBot>
                </ModalContent>
              </Modal>
            )}
            {showTerms && (
              <Modal onClick={handleTerms}>
                <TermsModalContent onClick={(e) => e.stopPropagation()}>
                  <div className="wrapp">
                    <CloseButton onClick={handleTerms}>
                      <CloseIcon />
                    </CloseButton>
                    <div className="text-terms">
                      <h1>Условия обслуживания</h1>
                      <div className="terms-list">
                        <h2>1. Ответственность</h2>
                        <p>
                          Используя услуги стресс-тестирования сервера,
                          предоставляемые Cryptostresser.com , вы соглашаетесь
                          нести ответственность за все действия и последствия.
                        </p>
                      </div>
                      <div className="terms-list">
                        <h2>2. Политика конфиденциальности</h2>
                        <p>
                          Конфиденциальность данных наших клиентов является
                          приоритетом. Мы не храним ваш логин и журналы атак.
                        </p>
                      </div>
                      <div className="terms-list">
                        <h2>3. Услуга</h2>
                        <p>
                          Мы предоставляем наши услуги стресс-тестирования
                          серверов частным лицам и предприятиям только для
                          тестирования личной сетевой безопасности. Вы не
                          уполномочены использовать наши услуги для прерывания
                          подключения к серверу / домашнему подключению / сети.
                          Используйте эту услугу только на своем собственном
                          сервере / сети, если это условие будет нарушено, ваша
                          учетная запись будет навсегда заблокирована. Атака на
                          правительственные веб-сайты (.GOV) строго запрещена!
                        </p>
                      </div>
                      <div className="terms-list">
                        <h2>4. Обязательство</h2>
                        <p>
                          Условия предоставления услуг будут действительны с
                          момента вашего первого использования наших услуг. Если
                          вы нарушите наши условия, ваша учетная запись будет
                          навсегда заблокирована в наших сервисах.
                        </p>
                      </div>
                      <div className="terms-list">
                        <h2>5. Политика оплаты</h2>
                        <p>
                          Если вы покупаете на Cryptostresser.com , вы
                          принимаете наши условия. Если у вас возникли
                          какие-либо проблемы с нашими услугами, откройте
                          заявку, наши сотрудники ответят вам в течение
                          нескольких часов. Возврат средств не может быть
                          произведен.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="checkwrap">
                    <div className="checkAuth">
                      <div className="box">
                        <Checkbox
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => setIsChecked(!isChecked)}
                        />
                        <h2>Я прочёл условия обслуживания</h2>
                      </div>
                      <TermsButton disabled={!isChecked} onClick={handleAuth}>
                        Ok
                      </TermsButton>
                    </div>
                  </div>
                </TermsModalContent>
              </Modal>
            )}
            {showAuth && (
              <Modal onClick={handleAuth}>
                <ModalContent onClick={(e) => e.stopPropagation()}>
                  <CloseButton onClick={handleAuth}>
                    <CloseIcon />
                  </CloseButton>
                  <div className="text">
                    <h1>Авторизация</h1>
                    <p>
                      Чтобы получить merch-ключ необходимо перейти в телеграмм
                      бот <b>DDG STRESSER</b> и приобрести любой из предложенных
                      тарифов
                    </p>
                  </div>
                  <AuthInput>
                    <h2>Введите merch-ключ:</h2>
                    <input
                      type="text"
                      pattern="/^\d{1,19}:[A-Za-z0-9]{1,30}$/"
                      required
                      onChange={handleInputChange}
                    />
                    {!isValid && (
                      <span className="error-message">
                        Ключ введен неправильно
                      </span>
                    )}
                  </AuthInput>
                  <div className="btnAuth">
                    <LinkAuth onClick={handleAuthClick} disabled={!isValid}>
                      Авторизация
                    </LinkAuth>
                    <LinkBot href="https://example.com" target="_blank">
                      Телеграм Бот
                    </LinkBot>
                  </div>
                </ModalContent>
              </Modal>
            )}
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
