import styled from "styled-components";

export const StyledPrice = styled.section`
  width: 100%;
  min-height: 782px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      00deg,
      #1b1b1b 0.1%,
      rgba(40, 36, 32, 0) 52.45%,
      #1b1b1b 102.66%
    );
  }
  .wrapper {
    margin-top: 170px;
    width: 100%;
    max-width: 1360px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    z-index: 2;
    gap: 30px;
    .title {
      display: flex;
      justify-content: center;

      font-family: "Tiro Devanagari Sanskrit";
      font-style: normal;
      font-weight: 400;
      font-size: 50px;
      line-height: 66px;
      text-transform: uppercase;

      color: #ffffff;
    }
  }
  @media (max-width: 1359px) {
    min-height: 700px;
    .wrapper {
      .title {
        font-size: 40px;
        line-height: 53px;
      }
    }
  }
  @media (max-width: 1023px) {
    min-height: 600px;
    .wrapper {
      margin-top: 60px;
      gap: 10px;
      .title {
        font-size: 30px;
        line-height: 40px;
      }
    }
  }
  @media (max-width: 767px) {
    .wrapper {
      .title {
        font-size: 25px;
        line-height: 33px;
      }
    }
  }
  @media (max-width: 533px) {
    min-height: 490px;
    .wrapper {
      margin-top: 40px;
      gap: 0px;
      .title {
        font-size: 22px;
        line-height: 29px;
      }
    }
  }
`;
