import styled from "styled-components";

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 150px;
  width: 100%;
  height: 895px;
  gap: 30px;
  overflow: hidden;
  @media (max-width: 1919px) {
    gap: 30px;
    margin-top: 50px;
    height: 850px;
  }
  @media (max-width: 1365px) {
    gap: 30px;
    margin-top: 50px;
    height: 650px;
  }
  @media (max-width: 767px) {
    height: 582px;
    gap: 10px;
  }

  a {
    text-decoration: none;
  }
`;

export const Button = styled.a`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 302px;
  height: 55px;
  background: linear-gradient(180deg, #64bcfc 0%, #3d99ed 100%);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0px 10px;
  font-family: "Gill Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 35px;
  /* identical to box height, or 175% */

  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #ffffff;
  @media (max-width: 1919px) {
    width: 222px;
    height: 41px;
    font-size: 15px;
    line-height: 25px;
  }
`;
export const Text = styled.h2`
  position: relative;
  width: 794px;
  font-family: "Gill Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 35px;
  /* or 175% */
  margin: 0;
  text-align: center;

  color: #1b1b1b;
  @media (max-width: 1919px) {
    width: 643.87px;
    font-size: 18px;
    line-height: 25px;
  }
  @media (max-width: 767px) {
    width: 320px;
    font-size: 16px;
    line-height: 25px;
  }
  .backimg5 {
    position: absolute;
    width: 168.34px;
    height: 140.46px;
    left: -392px;
    top: 208px;
    z-index: 1;
    @media (max-width: 1919px) {
      width: 168.34px;
      height: 140.46px;
      left: -333px;
      top: 166px;
      z-index: 1;
    }
    @media (max-width: 1365px) {
      width: 150px;
      height: 154.93px;
      left: -103px;
      top: 209px;
      z-index: -1;
    }
    @media (max-width: 767px) {
      width: 100px;
      height: 93.39px;
      left: -30px;
      top: 120px;
    }
  }

  .backimg6 {
    position: absolute;
    width: 268.23px;
    height: 278.95px;
    left: 984px;
    top: 9px;
    z-index: 1;
    @media (max-width: 1919px) {
      position: absolute;
      width: 268.23px;
      height: 278.95px;
      left: 725px;
      top: -40px;
      z-index: 1;
    }
    @media (max-width: 1365px) {
      width: 290.76px;
      height: 298.34px;
      left: 508px;
      top: 123px;
      z-index: -1;
    }
    @media (max-width: 767px) {
      width: 134.39px;
      height: 139.73px;
      left: 238px;
      top: 174px;
    }
  }
`;

export const Title = styled.p`
  width: 358px;
  margin: 0;
  font-family: "Avante Int";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 65px;
  /* identical to box height, or 162% */
  text-align: center;
  color: #1b1b1b;
  ::after {
    content: "";
    margin-top: 20px;
    display: block;
    align-self: center;
    margin-left: 60px;
    width: 250px;
    height: 3px;

    background-color: #eaeaea;
    @media (max-width: 1919px) {
      margin-left: 120px;
    }
    @media (max-width: 767px) {
      margin-left: 40px;
    }
  }
  @media (max-width: 1919px) {
    text-align: center;
    width: 479px;
    font-size: 35px;
    line-height: 45px;
  }
  @media (max-width: 767px) {
    width: 320px;
    font-size: 28px;
    line-height: 45px;
  }
`;
