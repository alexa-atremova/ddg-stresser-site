import Header from "./components/Header/Heder";
import Main from "./components/Main/Main";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import Footer from "./components/Footer/Footer";
import FAQ from "./components/FAQ/FAQ";
import SecondBlock from "./components/SecondBlock/SecondBlock";
import Price from "./components/Price/Price";

export const AppConteiner = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <AppConteiner>
      <GlobalStyle />
      <Header />
      <Main />
      <SecondBlock />
      {/* <FAQ />
      <Price />*/}
      <Footer />
    </AppConteiner>
  );
}

export default App;
