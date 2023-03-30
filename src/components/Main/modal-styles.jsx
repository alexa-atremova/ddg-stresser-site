import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    display: flex;
    align-self: flex-start;
    font-family: "Gill Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 35px;
    /* identical to box height, or 159% */

    text-align: left;
    margin: 0;
    color: #414141;
  }
  input {
    width: 537px;
    height: 42px;
    padding: 0 20px;
    font-size: 15px;
    border: 1px solid #eaeaea;
    border-radius: 5px;
  }

  .error-message {
    color: red;
    font-size: 12px;
    margin-top: 4px;
    display: none;
  }

  input:invalid ~ .error-message {
    display: block;
  }
  @media (max-width: 1365px) {
    input {
      width: 400px;
      height: 42px;
    }
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 15px;
    }
    input {
      width: 280px;
      height: 42px;
    }
  }
`;

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 657px;
  height: fit-content;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  gap: 20px;
  .text {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
    h1 {
      width: 178px;
      height: fit-content;

      font-family: "Avante Int";
      font-style: normal;
      font-weight: 700;
      font-size: 26px;
      line-height: 35px;
      /* identical to box height, or 135% */

      text-align: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;

      color: #414141;
    }
    p {
      width: 563px;
      height: fit-content;
      margin: 0;
      font-family: "Gill Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 35px;
      /* or 159% */

      text-align: center;

      color: #414141;
    }
  }
  .btnAuth {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    padding-bottom: 30px;
  }
  @media (max-width: 1365px) {
    width: 500px;
    .text {
      h1 {
        width: 178px;

        font-size: 26px;
        line-height: 35px;
      }
      p {
        width: 450px;

        font-size: 22px;
        line-height: 35px;
      }
    }
  }
  @media (max-width: 768px) {
    width: 300px;
    .text {
      h1 {
        width: 178px;

        font-size: 20px;
        line-height: 25px;
      }
      p {
        width: 290px;

        font-size: 16px;
        line-height: 20px;
      }
    }
    .btnAuth {
      flex-direction: column;
    }
  }
`;
export const TermsModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-height: 90vh;
  height: fit-content;

  background: #ffffff;
  border-radius: 10px;

  .wrapp {
    position: relative;
    width: 768px;
    padding: 30px;
    margin-bottom: 30px;
    overflow-y: auto;
    .text-terms {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 10px;
      h1 {
        font-family: "Avante Int";
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 35px;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: capitalize;
        color: #414141;
      }
      .terms-list {
        h2 {
          margin: 0;
          font-family: "Gill Sans";
          font-style: normal;
          font-weight: 600;
          font-size: 22px;
          line-height: 35px;
          color: #414141;
        }
        p {
          width: 668px;
          margin: 0;
          font-family: "Gill Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 35px;
          color: #656565;
        }
      }
    }

    ::-webkit-scrollbar {
      width: 8px;
    }

    /* трек скроллбара */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }

    /* ползунок скроллбара */
    ::-webkit-scrollbar-thumb {
      background: #888; /* цвет ползунка */
      border-radius: 10px; /* радиус границы */
    }

    /* при наведении курсора на скроллбар */
    ::-webkit-scrollbar-thumb:hover {
      background: #555; /* цвет ползунка */
    }
  }
  .checkwrap {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    width: 100%;

    .checkAuth {
      width: 100%;
      max-width: 680px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      .box {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        h2 {
          font-family: "Gill Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 35px;
          /* identical to box height, or 175% */

          color: #414141;
        }
      }
    }
  }
  @media (max-width: 1365px) {
    .wrapp {
      width: 600px;
      padding: 20px;
      margin-bottom: 30px;
      .text-terms {
        gap: 10px;
        h1 {
          font-size: 23px;
          line-height: 35px;
        }
        .terms-list {
          h2 {
            font-size: 20px;
            line-height: 20px;
          }
          p {
            width: 580px;

            font-size: 20px;
            line-height: 35px;
          }
        }
      }
    }
    .checkwrap {
      margin-bottom: 10px;

      .checkAuth {
        width: 100%;
        max-width: 580px;

        .box {
          h2 {
            font-size: 20px;
            line-height: 35px;
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    .wrapp {
      width: 290px;
      padding: 20px;
      margin-bottom: 30px;

      .text-terms {
        gap: 10px;
        h1 {
          font-size: 19px;
          line-height: 35px;
        }
        .terms-list {
          h2 {
            font-size: 17px;
            line-height: 20px;
          }
          p {
            width: 280px;

            font-size: 16px;
            line-height: 35px;
          }
        }
      }
    }
    .checkwrap {
      margin-bottom: 10px;

      .checkAuth {
        width: 100%;
        max-width: 280px;
        flex-direction: column;

        .box {
          h2 {
            font-size: 16px;
            line-height: 35px;
          }
        }
      }
    }
  }
`;
export const LinkAuth = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 172px;
  height: 49px;
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
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  background-color: transparent;

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;
export const ButtonBot = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 57px;
  padding: 11px 15px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0px 10px;
  text-decoration: none;

  border: 1px solid #479ae7;

  font-family: "Gill Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 35px;
  /* identical to box height, or 194% */

  text-align: center;
  text-transform: uppercase;

  color: #000000;
  gap: 20px;
  img {
    width: 47px;
    height: 47px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    width: 220px;
    height: 47px;
    img {
      width: 37px;
      height: 37px;
    }
  }
`;

export const Checkbox = styled.input`
  width: 25px;
  height: 25px;

  background: #ffffff;
  border: 1px solid #a3a3a3;
  border-radius: 3px;

  margin-right: 8px;
`;

export const TermsButton = styled.button`
  width: 86px;
  height: 49px;
  background: linear-gradient(180deg, #64bcfc 0%, #3d99ed 100%);
  border-radius: 0px 7px;
  border: none;
  font-family: "Gill Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 35px;
  /* identical to box height, or 175% */

  color: #ffffff;

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  background-color: transparent;
  padding: 8px 16px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  @media (max-width: 767px) {
    width: 66px;
    height: 39px;
    font-size: 16px;
    line-height: 20px;
  }
`;
export const Link = styled.a`
  text-decoration: none;
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const CloseIcon = styled.span`
  width: 18px;
  height: 2px;
  transition: all 0.2s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 18px;
    height: 2px;
    background: black;
    transition: all 0.2s ease-in-out;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
