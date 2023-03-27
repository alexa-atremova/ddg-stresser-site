import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(100, 188, 252, 0.5);
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1420px;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 30px;
`;
export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
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
  gap: 5px;

  width: 84px;
  height: 45px;

  border: 1px solid #cfcfcf;
  background: #ffffff;
  border-radius: 0px 10px;

  font-family: "Avante Int";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #1b1b1b;
`;
export const LanguageIcon = styled.img`
  width: 25px;
  height: 25px;
`;
