import Header from "./components/Header/Heder";
import Main from "./components/Main/Main";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import Footer from "./components/Footer/Footer";
import FAQ from "./components/FAQ/FAQ";
import SecondBlock from "./components/SecondBlock/SecondBlock";
import Price from "./components/Price/Price";
import { useState } from "react";

export const AppConteiner = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

function App() {
  const [lang, setLang] = useState("ru");

  function handleLanguageChange(lang) {
    setLang(lang);
  }
  return (
    <AppConteiner>
      <GlobalStyle />
      <Header onLanguageChange={handleLanguageChange} lang={lang} />
      <Main lang={lang} />
      <SecondBlock lang={lang} />
      <FAQ lang={lang} />
      <Price lang={lang} />
      <Footer lang={lang} />
    </AppConteiner>
  );
}

export default App;
