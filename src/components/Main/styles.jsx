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
  background-position: 350px 0%;
  z-index: -1;
  @media (max-width: 1919px) {
    background-position: 250px 0%;
    height: 750px;
  }
  @media (max-width: 1365px) {
    align-items: flex-start;

    background-position: -300px 0%;
    height: 1200px;
  }
  @media (max-width: 767px) {
    background-position: -300px 0%;
    height: 1640px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1420px;
  gap: 100px;
  @media (max-width: 1919px) {
    max-width: 1166px;
    gap: 0px;
  }
  @media (max-width: 1365px) {
    margin-top: 30px;
    max-width: 528px;
  }
  @media (max-width: 767px) {
    margin-top: 20px;
    max-width: 320px;
  }
`;

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1365px) {
    flex-direction: column;
  }
`;
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 767px) {
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    max-width: 320px;
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 15px;
    }
  }
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
  @media (max-width: 1919px) {
    font-size: 28px;
    line-height: 40px;
    width: 528px;
  }
  @media (max-width: 1365px) {
    font-size: 28px;
    line-height: 40px;
  }
  @media (max-width: 767px) {
    width: 320px;
    font-size: 28px;
    line-height: 40px;
    /* or 143% */

    text-align: center;
  }
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
  @media (max-width: 1919px) {
    font-size: 18px;
    line-height: 25px;
    width: 495px;
  }
  @media (max-width: 1365px) {
    font-size: 18px;
    line-height: 25px;
  }
  @media (max-width: 767px) {
    width: 320px;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
  }
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
  @media (max-width: 1919px) {
    &:first-of-type {
      width: 153px;
      height: 42px;
      font-size: 17.2089px;
      line-height: 20px;
    }
    &:last-of-type {
      width: 213px;
      height: 42px;
      margin-left: 15px;
      font-size: 17.2089px;
      line-height: 20px;
    }
  }
`;

export const RightSection = styled.div`
  width: 500px;
  height: 552px;
  margin-right: 100px;
  @media (max-width: 1365px) {
    width: 404px;
    height: 392px;
    margin-right: 0px;
    margin-left: 20px;
  }
  @media (max-width: 767px) {
    width: 302px;
    height: 296px;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 19px;
  @media (max-width: 1919px) {
    gap: 15px;
  }
  @media (max-width: 1365px) {
    flex-wrap: wrap;
  }
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
  @media (max-width: 1919px) {
    width: 242px;
    height: 128px;
  }
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
  @media (max-width: 1919px) {
    width: 221px;
    height: 67.59px;
    font-size: 40px;
    line-height: 40px;
    padding: 15px;
  }
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
  @media (max-width: 1919px) {
    padding: 10px;
    width: 170.04px;
    height: 52px;
    font-size: 16px;
    line-height: 16px;
  }
`;
