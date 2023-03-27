import styled from "styled-components";

export const FooterContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 350px;
  background: #fcfbfc;
  gap: 40px;
`;

export const Logo = styled.img`
  width: 180px;
  height: 180px;
`;
export const Container = styled.div`
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
