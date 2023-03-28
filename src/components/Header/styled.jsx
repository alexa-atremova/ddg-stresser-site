import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(100, 188, 252, 0.5);
  @media (max-width: 1365px) {
    height: 80px;
  }
  @media (max-width: 767px) {
    height: 70px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1420px;
  @media (max-width: 1919px) {
    max-width: 1166px;
  }
  @media (max-width: 1365px) {
    max-width: 628px;
  }
  @media (max-width: 767px) {
    max-width: 340px;
  }
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  @media (max-width: 1365px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 767px) {
    width: 50px;
    height: 50px;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 30px;
  @media (max-width: 1365px) {
    gap: 10px;
  }
`;
export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 30px;
  @media (max-width: 1365px) {
    display: none;
  }
`;
export const LinkTelegram = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 47px;
  background: linear-gradient(180deg, #64bcfc 0%, #3d99ed 100%);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0px 10px;

  font-family: "Gill Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 35px;
  /* identical to box height, or 194% */
  text-decoration: none;
  text-align: center;

  color: #ffffff;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;
export const LinkBot = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 47px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0px 10px;
  text-decoration: none;

  border: 1px solid #479ae7;

  font-family: "Gill Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 35px;
  /* identical to box height, or 194% */

  text-align: center;

  color: #414141;
`;

export const LanguageButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2px 5px;
  margin-left: 10px;
  gap: 5px;

  width: 84px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 10px;

  font-family: "Avante Int";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #1b1b1b;
  @media (max-width: 1365px) {
    width: 67px;
    height: 36px;
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 1365px) {
    width: 59px;
    height: 31.5px;
    font-size: 14px;
    line-height: 17px;
    margin-left: 0px;
  }
`;
export const LanguageIcon = styled.img`
  width: 25px;
  height: 25px;
  @media (max-width: 1365px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 1365px) {
    width: 17px;
    height: 17px;
  }
`;
