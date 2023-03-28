import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;

  background: #fcfbfc;
`;
export const Wrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1420px;
  gap: 50px;
  @media (max-width: 1919px) {
    margin-bottom: 0px;
    max-width: 1110px;
  }
  @media (max-width: 1365px) {
    max-width: 568px;
  }
  @media (max-width: 767px) {
    max-width: 320px;
  }
`;

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1300px;
  @media (max-width: 1919px) {
    max-width: 1110px;
  }
  @media (max-width: 1365px) {
    max-width: 568px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media (max-width: 767px) {
    max-width: 320px;
  }
`;
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 519px;
  height: 511px;
  @media (max-width: 1919px) {
    width: 447px;
    height: 441px;
    img {
      width: 447px;
      height: 441px;
    }
  }
  @media (max-width: 1365px) {
    order: 2;
  }
  @media (max-width: 767px) {
    max-width: 320px;
    width: 320px;
    height: 315px;
    img {
      width: 320px;
      height: 315px;
    }
  }
`;

export const Title = styled.h1`
  display: flex;
  align-self: flex-start;
  font-family: "Avante Int";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 65px;
  /* identical to box height, or 162% */

  color: #1b1b1b;

  width: 574px;
  @media (max-width: 1919px) {
    width: 502px;
    font-size: 35px;
    line-height: 55px;
  }
  @media (max-width: 767px) {
    display: flex;
    align-self: center;
    width: 320px;
    height: 110px;
    font-size: 28px;
    line-height: 55px;
    text-align: center;
  }
`;

export const Text = styled.p`
  font-family: "Gill Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 35px;
  /* or 175% */

  color: #1b1b1b;

  width: 664px;
  @media (max-width: 1919px) {
    width: 573.1px;
    font-size: 18px;
    line-height: 30px;
    margin: 0;
  }
  @media (max-width: 767px) {
    width: 320px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 30px;
  @media (max-width: 1919px) {
    gap: 25px;
  }
  @media (max-width: 1365px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const WrapBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  height: 223px;
  margin: 0;
  gap: 10px;
  @media (max-width: 1919px) {
    img {
      width: 70.32px;
      height: 70.32px;
    }
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const BlockTitle = styled.h2`
  margin: 0;
  font-family: "Avante Int";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #1b1b1b;
  @media (max-width: 1919px) {
    font-size: 16.5456px;
    line-height: 20px;
    max-width: 300px;
  }
  @media (max-width: 1365px) {
    max-width: 270px;
  }
`;

export const BlockText = styled.p`
  width: 300px;
  margin: 0;
  font-family: "Gill Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #1b1b1b;
  @media (max-width: 1919px) {
    width: 100%;
    max-width: 300px;
    font-size: 14.891px;
    line-height: 17px;
  }
  @media (max-width: 1365px) {
    max-width: 270px;
  }
`;
