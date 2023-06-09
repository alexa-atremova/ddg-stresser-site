import styled from "styled-components";

export const BlockContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #fcfbfc;
`;
export const BlockWrapper = styled.div`
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
    gap: 10px;
  }
`;

export const BlockTopSection = styled.div`
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
export const BlockLeftSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 519px;
  height: 511px;

  .backimg1 {
    position: absolute;

    left: -310px;
    bottom: -40px;
  }
  @media (max-width: 1919px) {
    width: 447px;
    height: 441px;
    .backimg1 {
      width: 294.88px;
      height: 305.46px;
      left: -277px;
      bottom: -82px;
    }
    img {
      width: 447px;
      height: 441px;
    }
  }
  @media (max-width: 1365px) {
    order: 2;
    .backimg1 {
      left: -277px;
      bottom: -541px;
    }
  }
  @media (max-width: 767px) {
    max-width: 320px;
    width: 320px;
    height: 315px;
    .backimg1 {
      left: -200px;
      bottom: -244px;
    }
    img {
      width: 320px;
      height: 315px;
    }
  }
`;

export const Title = styled.h1`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  font-family: "Avante Int";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 65px;
  /* identical to box height, or 162% */

  color: #1b1b1b;

  width: 574px;
  ::after {
    content: "";
    margin-top: 20px;
    display: block;
    align-self: flex-start;
    width: 250px;
    height: 3px;

    background-color: #eaeaea;
    @media (max-width: 767px) {
      width: 200px;
      margin-left: 60px;
    }
  }
  @media (max-width: 1919px) {
    width: 502px;
    font-size: 35px;
    line-height: 55px;
  }
  @media (max-width: 767px) {
    display: flex;
    align-self: center;
    width: 320px;
    height: 140px;
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
  margin: 0;
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

export const BlockRightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  .backimg2 {
    position: absolute;

    right: -299px;
    top: 100px;
  }
  @media (max-width: 1919px) {
    .backimg2 {
      width: 149.5px;
      height: 200px;

      right: -150px;
      top: 100px;
    }
  }

  @media (max-width: 1365px) {
    .backimg2 {
      width: 149.5px;
      height: 200px;

      right: -134px;
      top: 557px;
    }
  }
  @media (max-width: 767px) {
    .backimg2 {
      right: -134px;
      top: 326px;
    }
  }
`;

export const BlockBottomSection = styled.div`
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

export const BlockWrapBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  height: 223px;
  margin: 0;
  gap: 10px;
  @media (max-width: 1919px) {
    width: 260px;

    img {
      width: 70.32px;
      height: 70.32px;
    }
  }
  @media (max-width: 1365px) {
    width: 260px;
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
    max-width: 270px;
    font-size: 14.891px;
    line-height: 17px;
  }
  @media (max-width: 1365px) {
    max-width: 270px;
  }
`;
