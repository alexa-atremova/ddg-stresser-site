import styled from "styled-components";
import back from "./../../assets/back.png";

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 990px;
  background: #fcfbfc;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 500px 0%;
  z-index: -1;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1420px;
  gap: 100px;
`;

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Title = styled.h1`
  font-family: "Avante Int";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 55px;
  /* or 157% */

  color: #1b1b1b;

  width: 670px;
`;

export const Text = styled.p`
  font-family: "Gill Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 35px;
  /* or 159% */

  color: #414141;

  width: 640px;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;

  &:first-of-type {
    width: 196px;
    height: 55px;

    background: #eaeaea;
    border-radius: 0px 10px;

    font-family: "Gill Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 25px;

    color: #1b1b1b;
  }

  &:last-of-type {
    width: 273px;
    height: 55px;
    margin-left: 20px;
    background: linear-gradient(180deg, #64bcfc 0%, #3d99ed 100%);

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0px 10px;

    font-family: "Gill Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 25px;

    color: #ffffff;
  }
`;

export const RightSection = styled.div`
  width: 500px;
  height: 552px;
  margin-right: 100px;
`;

export const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 19px;
`;

export const WrapBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 341px;
  height: 180px;
  margin: 0;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0px 25px;

  gap: 0px;
`;

export const BlockTitle = styled.h2`
  width: 311px;
  height: 55px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 55px;
  padding: 20px;
  line-height: 55px;
  margin: 0;
  text-align: center;
  box-shadow: inset 0px -1px 0px #f2f2f2;
  color: #1fa5ff;
`;

export const BlockText = styled.p`
  width: 239px;
  height: 44px;
  font-family: "Avante Int";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 22px;
  padding: 20px;
  margin: 0;
  text-align: center;

  color: #2b2d42;
`;
