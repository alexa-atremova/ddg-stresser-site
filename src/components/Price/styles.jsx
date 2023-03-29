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
  @media (max-width: 1919px) {
    gap: 30px;
    margin-top: 50px;
    height: 850px;
    @media (max-width: 767px) {
      height: 582px;
      gap: 10px;
    }
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

  color: #1b1b1b;
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
