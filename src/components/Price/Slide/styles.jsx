import styled from "styled-components";

export const StyledSlide = styled.div`
  width: 100%;

  .slideCard {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: linear-gradient(180deg, #f9f9fb 50%, #ffffff 50%);
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.07);
    border-radius: 0px 30px;
    width: 320px;
    height: 325px;
    gap: 20px;
    .title-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 30px;

      h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        width: 256px;
        height: 55px;
        left: calc(50% - 256px / 2);
        top: calc(50% - 55px / 2 - 125px);

        background: linear-gradient(180deg, #6473fc 0%, #4065ef 100%);
        border-radius: 0px 10px;

        font-family: "Gill Sans";
        font-style: normal;
        font-weight: 600;
        font-size: 23px;
        line-height: 35px;
        /* identical to box height, or 175% */

        text-align: center;

        color: #ffffff;
      }
      h2 {
        margin: 0;
        font-family: "Gill Sans";
        font-style: normal;
        font-weight: 600;
        font-size: 35px;
        line-height: 35px;
        /* identical to box height, or 117% */

        text-align: center;

        color: #414141;
      }
    }
    .text-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      gap: 5px;
      p {
        margin: 0;

        font-family: "Gill Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 35px;
        /* or 194% */

        text-align: center;

        color: #414141;
      }
    }
  }
  @media (max-width: 1919px) {
    .slideCard {
      width: 249px;
      height: 252px;
      gap: 20px;
      .title-wrap {
        gap: 30px;

        h1 {
          width: 174px;
          height: 41px;

          font-size: 14.2292px;
          line-height: 25px;
        }
        h2 {
          font-size: 22px;
          line-height: 25px;
        }
      }
      .text-wrap {
        gap: 5px;
        p {
          font-size: 14px;
          line-height: 25px;
        }
      }
    }
  }
  @media (max-width: 1365px) {
    .slideCard {
      width: 201px;
      height: 203px;
      gap: 10px;
      .title-wrap {
        gap: 15px;

        h1 {
          width: 144px;
          height: 35px;

          font-size: 12px;
          line-height: 20px;
        }
        h2 {
          font-size: 18px;
          line-height: 20px;
        }
      }
      .text-wrap {
        gap: 5px;
        p {
          font-size: 11.3153px;
          line-height: 20px;
        }
      }
    }
  }
`;
export const StyledNextArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 30px;
  top: 0;
  margin-top: 155px;
  user-select: none;
  cursor: pointer;
  ::before {
    display: none;
  }
`;

export const StyledPrevArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  margin-top: 155px;
  width: 24px;
  height: 30px;
  user-select: none;
  cursor: pointer;
  ::before {
    display: none;
  }
`;
