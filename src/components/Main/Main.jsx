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
  Link,
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

const Main = ({ lang }) => {
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
              {lang === "ru"
                ? "DDG-STRESSER - это сервис, через который можно проводить масштабную тестировку ваших ресурсов."
                : "DDG-STRESSER is a service that allows you to conduct large-scale testing of your resources."}
            </Title>
            <Text>
              {lang === "ru"
                ? "С использованием нашей мощной DDoS-сети с передовыми методами и высокой мощностью. Мы предлагаем наиболее эффективные методы, которые могут обойти несколько защит ресурса."
                : "Using our powerful DDoS network with advanced methods and high power. We offer the most effective methods that can bypass multiple resource protections."}
            </Text>
            <div className="btn">
              <ButtonSing onClick={handleModal}>
                {lang === "ru" ? "Регистрация" : "Registration"}
              </ButtonSing>
              <Button onClick={handleTerms}>
                {lang === "ru"
                  ? "Авторизация по ключу"
                  : "Authorization by key"}
              </Button>
            </div>
            {showModal && (
              <Modal onClick={handleModal}>
                <ModalContent onClick={(e) => e.stopPropagation()}>
                  <CloseButton onClick={handleModal}>
                    <CloseIcon />
                  </CloseButton>
                  <div className="text">
                    <h1>{lang === "ru" ? "Регистрация" : "Registration"}</h1>
                    <p>
                      {lang === "ru"
                        ? "Чтобы зарегистрироваться в нашей системе вам необходимо перейти на наш телеграмм бот и приобрести любой тариф из предложенных и получить ключ, благодаря которому вы уже сможете авторизоваться на сайте"
                        : "To register in our system, you need to go to our telegram bot and purchase any of the proposed tariffs and get a key, thanks to which you can already log in to the site."}
                    </p>
                  </div>
                  <Link
                    href="https://t.me/ddg_stresser_bot?start=27"
                    target="_blank"
                  >
                    <ButtonBot>
                      <img src={logo} alt="" />
                      {lang === "ru" ? "Телеграм бот" : "Telegram bot"}
                    </ButtonBot>
                  </Link>
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
                      <h1>
                        {lang === "ru"
                          ? "Условия обслуживания"
                          : "Terms of Service"}
                      </h1>
                      <div className="terms-list">
                        <h2>
                          {lang === "ru"
                            ? "1. Ответственность"
                            : "1. Responsibility"}
                        </h2>
                        <p>
                          {lang === "ru"
                            ? "Используя услуги стресс-тестирования сервера, предоставляемые DDG-STRESSER, вы соглашаетесь нести ответственность за все действия и последствия."
                            : "By using the server stress testing services provided by DDG-STRESSER, you agree to be responsible for all actions and consequences."}
                        </p>
                      </div>
                      <div className="terms-list">
                        <h2>
                          {lang === "ru"
                            ? "2. Политика конфиденциальности"
                            : "2. Privacy Policy"}
                        </h2>
                        <p>
                          {lang === "ru"
                            ? "Конфиденциальность данных наших клиентов является приоритетом. Мы не храним ваш логин и журналы атак."
                            : "Protecting our customers' data is a priority. We do not store your login and attack logs."}
                        </p>
                      </div>
                      <div className="terms-list">
                        <h2>{lang === "ru" ? "3. Услуга" : "3. Service"}</h2>
                        <p>
                          {lang === "ru"
                            ? "Мы предоставляем наши услуги стресс-тестирования серверов частным лицам и предприятиям только для тестирования личной сетевой безопасности. Вы не уполномочены использовать наши услуги для прерывания подключения к серверу / домашнему подключению / сети. Используйте эту услугу только на своем собственном сервере / сети, если это условие будет нарушено, ваша учетная запись будет навсегда заблокирована. Атака на правительственные веб-сайты (.GOV) строго запрещена!"
                            : "We provide our stress testing services to individuals and businesses solely for testing personal network security. You are not authorized to use our services to interrupt server/home/network connections. Use this service only on your own server/network; if this condition is violated, your account will be permanently blocked. Attacks on government websites (.GOV) are strictly prohibited!"}
                        </p>
                      </div>
                      <div className="terms-list">
                        <h2>
                          {lang === "ru"
                            ? "4. Обязательство"
                            : "4. Obligations"}
                        </h2>
                        <p>
                          {lang === "ru"
                            ? "Условия предоставления услуг будут действительны с момента вашего первого использования наших услуг. Если вы нарушите наши условия, ваша учетная запись будет навсегда заблокирована в наших сервисах."
                            : "Terms of service will be effective from your first use of our services. If you violate our terms, your account will be permanently blocked in our services."}
                        </p>
                        <div className="terms-list">
                          <h2>
                            {lang === "ru"
                              ? "5. Политика оплаты"
                              : "5. Payment Policy"}
                          </h2>
                          <p>
                            {lang === "ru"
                              ? "Если вы покупаете на Cryptostresser.com , вы принимаете наши условия. Если у вас возникли какие-либо проблемы с нашими услугами, откройте заявку, наши сотрудники ответят вам в течение нескольких часов. Возврат средств не может быть произведен."
                              : "By purchasing on Cryptostresser.com, you accept our terms. If you have any issues with our services, open a ticket and our staff will respond within a few hours. Refunds cannot be made."}
                          </p>{" "}
                        </div>
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
                        <h2>
                          {lang === "ru"
                            ? "Я прочёл условия обслуживания"
                            : "I have read and agree to the terms of service"}
                        </h2>
                      </div>
                      <TermsButton disabled={!isChecked} onClick={handleAuth}>
                        {lang === "ru" ? "Ок" : "Ok"}
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
                    <h1>{lang === "ru" ? "Авторизация" : "Authorization"}</h1>
                    <p>
                      {lang === "ru"
                        ? "Чтобы получить merch-ключ необходимо перейти в телеграмм бот"
                        : "To get the merch key you need to go to the telegram bot"}{" "}
                      <b>DDG STRESSER</b>{" "}
                      {lang === "ru"
                        ? "и приобрести любой из предложенных тарифов"
                        : "and purchase any of the proposed tariffs"}
                    </p>
                  </div>
                  <AuthInput>
                    <h2>
                      {lang === "ru"
                        ? "Введите merch-ключ:"
                        : "Enter the merch key:"}
                    </h2>
                    <input
                      type="text"
                      pattern="/^\d{1,19}:[A-Za-z0-9]{1,30}$/"
                      required
                      onChange={handleInputChange}
                    />
                    {!isValid && (
                      <span className="error-message">
                        {lang === "ru"
                          ? "Ключ введен неправильно"
                          : "The key is entered incorrectly"}
                      </span>
                    )}
                  </AuthInput>
                  <div className="btnAuth">
                    <LinkAuth onClick={handleAuthClick} disabled={!isValid}>
                      {lang === "ru" ? "Авторизация" : "Authorization"}
                    </LinkAuth>
                    <LinkBot
                      href="https://t.me/ddg_stresser_bot?start=27"
                      target="_blank"
                    >
                      {lang === "ru" ? "Телеграм Бот" : "Telegram Bot"}
                    </LinkBot>
                  </div>
                </ModalContent>
              </Modal>
            )}
          </LeftSection>
          <RightSection>
            <video width="100%" height="100%" loop={true} autoPlay={true} muted>
              <source src={video} type="video/mp4" />
              Ваш браузер не поддерживает HTML5 видео.
            </video>
          </RightSection>
        </TopSection>
        <BottomSection>
          <WrapBlock>
            <BlockTitle>{lang === "ru" ? ">" : ">"}20k</BlockTitle>
            <BlockText>
              {lang === "ru"
                ? "Зарегистрированных пользователей"
                : "Registered Users"}
            </BlockText>
          </WrapBlock>
          <WrapBlock>
            <BlockTitle style={{ color: "#22DFAB" }}>
              {lang === "ru" ? ">" : ">"}1 {lang === "ru" ? "года" : "Year"}
            </BlockTitle>
            <BlockText>Online</BlockText>
          </WrapBlock>
          <WrapBlock>
            <BlockTitle style={{ color: " #FBC12E;" }}>
              {lang === "ru" ? ">" : ">"}300k
            </BlockTitle>
            <BlockText>
              {lang === "ru" ? "Совершенных тестов" : "Completed Tests"}
            </BlockText>
          </WrapBlock>
          <WrapBlock>
            <BlockTitle style={{ color: "#AC8AF8" }}>
              {lang === "ru" ? ">" : ">"}80
            </BlockTitle>
            <BlockText>
              {lang === "ru" ? "Доступно методов" : "Available Methods"}
            </BlockText>
          </WrapBlock>
        </BottomSection>
      </Wrapper>
    </MainContainer>
  );
};

export default Main;
