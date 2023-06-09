import styled from "styled-components";

export const StyledFAQ = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fcfbfc;
  overflow: hidden;
  .wrapper {
    position: relative;
    width: 100%;
    max-width: 950px;
    margin-top: 100px;
    margin-bottom: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
    @media (max-width: 1919px) {
      margin-top: 50px;
      max-width: 675px;
    }
    @media (max-width: 767px) {
      max-width: 320px;
    }
    .backimg3 {
      position: absolute;
      width: 252.45px;
      height: 234.3px;
      left: -340px;
      bottom: 103px;
      z-index: -1;
      @media (max-width: 1365px) {
        width: 179.61px;
        height: 166.5px;
        left: -73px;
        bottom: 126px;
      }
      @media (max-width: 767px) {
        width: 179.61px;
        height: 166.5px;
        left: -30px;
        bottom: 126px;
      }
    }

    .backimg4 {
      position: absolute;
      width: 689.46px;
      height: 514.44px;
      left: 519px;
      bottom: -36px;
      z-index: -1;
      @media (max-width: 1919px) {
        width: 689.46px;
        height: 514.44px;
        left: 270px;
        bottom: -70px;
      }
      @media (max-width: 1365px) {
        width: 352.53px;
        height: 263.02px;
        left: 406px;
        bottom: 72px;
      }
      @media (max-width: 767px) {
        width: 224.11px;
        height: 167.21px;

        left: 152px;
        bottom: 126px;
      }
    }
    .text {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 50px;
      margin-bottom: 50px;
      gap: 30px;
      @media (max-width: 1919px) {
        margin-top: 10px;
        margin-bottom: 0px;
        gap: 20px;
      }
      h1 {
        height: 65px;
        margin: 0;
        font-family: "Avante Int";
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 65px;
        /* identical to box height, or 162% */

        color: #1b1b1b;
        /* ::after {
          content: "";
          margin-top: 20px;
          display: block;
          width: 250px;
          height: 3px;

          background-color: #eaeaea;
        } */
        @media (max-width: 1919px) {
          height: 60px;
          font-size: 35px;
          line-height: 45px;
        }
        @media (max-width: 767px) {
          width: 320px;
          height: 110px;
          font-size: 28px;
          line-height: 45px;
          text-align: center;
        }
        ::after {
          content: "";
          margin-top: 20px;
          display: block;
          align-self: center;
          margin-left: 150px;
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
      }
      p {
        margin: 0;
        width: 905px;
        font-family: "Gill Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 35px;
        /* or 175% */

        text-align: center;

        color: #1b1b1b;
        @media (max-width: 1919px) {
          width: 643.87px;
          font-size: 18px;
          line-height: 25px;
        }
        @media (max-width: 767px) {
          width: 320px;
        }
      }
    }
    ul {
      list-style-type: none;
      display: flex;

      flex-direction: column;

      gap: 10px;
      padding: 0;
      li {
        background: #ffffff;
        border: 2px solid #ebebeb;
        border-radius: 0px 10px;

        padding: 5px 15px;
        font-family: "Gill Sans";
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 35px;
        /* identical to box height, or 159% */

        color: #000000;

        height: 50px;
        overflow: hidden;
        transition: all 0.3s 0.2s linear;

        cursor: pointer;

        .head {
          margin-top: 5px;
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-between;
          align-items: center;

          h2 {
            margin: 0;
            font-family: "Gill Sans";
            font-style: normal;
            font-weight: 600;
            font-size: 22px;
            line-height: 35px;
            /* identical to box height, or 159% */

            color: #1b1b1b;
            @media (max-width: 1919px) {
              font-size: 16px;
              line-height: 25px;
            }
            @media (max-width: 767px) {
            }
          }
          .arrow {
            width: 30px;
            height: 30px;
            @media (max-width: 1919px) {
              width: 20px;
              height: 20px;
            }
          }
        }

        p {
          font-family: "Gill Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 22px;
          line-height: 35px;
          /* or 159% */

          letter-spacing: 0.01em;

          color: #1b1b1b;
          transition: all 0.5s ease;
          @media (max-width: 1919px) {
            font-size: 16px;
            line-height: 25px;
          }
        }
        @media (max-width: 1920px) {
          height: 40px;
        }
        @media (max-width: 768px) {
        }
      }
      .second {
        @media (max-width: 768px) {
          height: 60px;
        }
      }
      .third {
        @media (max-width: 768px) {
          height: 60px;
        }
      }

      .fifth {
        @media (max-width: 768px) {
          height: 60px;
        }
      }
      .opened {
        height: 250px;
        transition: all 0.5s ease;
        cursor: default;

        p {
          opacity: 1;
          transition: all 0.5s 0.1s ease;
        }
      }
      .opened.first {
        @media (max-width: 1919px) {
          height: 150px;
        }

        @media (max-width: 767px) {
          height: 255px;
        }
      }
      .opened.second {
        height: 200px;
        @media (max-width: 1919px) {
          height: 130px;
        }

        @media (max-width: 767px) {
          height: 230px;
        }
      }
      .opened.third {
        height: 230px;
        @media (max-width: 1919px) {
          height: 150px;
        }

        @media (max-width: 767px) {
          height: 280px;
        }
      }

      .opened.fifth {
        height: 230px;
        @media (max-width: 1919px) {
          height: 160px;
        }

        @media (max-width: 767px) {
          height: 300px;
        }
      }
      .opened.sixth {
        height: 180px;
        @media (max-width: 1919px) {
          height: 110px;
        }

        @media (max-width: 767px) {
          height: 180px;
        }
      }
    }
  }
`;
