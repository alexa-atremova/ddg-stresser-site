import styled from "styled-components";

export const StyledFAQ = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fcfbfc;
  .wrapper {
    width: 100%;
    max-width: 950px;
    margin-top: 100px;
    margin-bottom: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .text {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 50px;
      margin-bottom: 50px;
      gap: 30px;
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

        padding: 15px;
        font-family: "Gill Sans";
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 35px;
        /* identical to box height, or 159% */

        color: #000000;

        height: 60px;
        overflow: hidden;
        transition: all 0.3s 0.2s linear;

        cursor: pointer;
        .head {
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-between;
          align-items: center;

          h2 {
            font-family: "Gill Sans";
            font-style: normal;
            font-weight: 600;
            font-size: 22px;
            line-height: 35px;
            /* identical to box height, or 159% */

            color: #1b1b1b;
          }
          .arrow {
            width: 30px;
            height: 30px;
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
        }
        @media (max-width: 768px) {
          height: 50px;
        }
      }
      .first {
        @media (max-width: 437px) {
          height: 70px;
        }
      }
      .second {
        @media (max-width: 485px) {
          height: 70px;
        }
      }
      .third {
        @media (max-width: 542px) {
          height: 70px;
        }
      }
      .fourth {
        @media (max-width: 566px) {
          height: 70px;
        }
        @media (max-width: 370px) {
          height: 90px;
        }
      }
      .fifth {
        @media (max-width: 1035px) {
          height: 90px;
        }
        @media (max-width: 768px) {
          height: 70px;
        }
        @media (max-width: 424px) {
          height: 90px;
        }
      }
      .sixth {
        @media (max-width: 1035px) {
          height: 90px;
        }
        @media (max-width: 768px) {
          height: 70px;
        }
        @media (max-width: 447px) {
          height: 90px;
        }
        @media (max-width: 366px) {
          height: 110px;
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
        @media (max-width: 1204px) {
          height: 204px;
        }
        @media (max-width: 1010px) {
          height: 228px;
        }
        @media (max-width: 886px) {
          height: 252px;
        }
        @media (max-width: 775px) {
          height: 276px;
        }
        @media (max-width: 768px) {
          height: 210px;
        }
        @media (max-width: 682px) {
          height: 230px;
        }
        @media (max-width: 589px) {
          height: 250px;
        }
        @media (max-width: 536px) {
          height: 270px;
        }
        @media (max-width: 477px) {
          height: 290px;
        }
        @media (max-width: 444px) {
          height: 310px;
        }
        @media (max-width: 437px) {
          height: 332px;
        }
        @media (max-width: 414px) {
          height: 352px;
        }
        @media (max-width: 377px) {
          height: 372px;
        }
        @media (max-width: 363px) {
          height: 392px;
        }
      }
      .opened.second {
        height: 200px;
        @media (max-width: 1341px) {
          height: 132px;
        }
        @media (max-width: 779px) {
          height: 156px;
        }
        @media (max-width: 768px) {
          height: 128px;
        }
        @media (max-width: 592px) {
          height: 148px;
        }
        @media (max-width: 485px) {
          height: 172px;
        }
        @media (max-width: 412px) {
          height: 192px;
        }
      }
      .opened.third {
        height: 230px;
        @media (max-width: 542px) {
          height: 124px;
        }
        @media (max-width: 375px) {
          height: 148px;
        }
        @media (max-width: 361px) {
          height: 168px;
        }
      }

      .opened.fifth {
        height: 230px;
        @media (max-width: 1100px) {
          height: 178px;
        }
        @media (max-width: 1035px) {
          height: 208px;
        }
        @media (max-width: 806px) {
          height: 234px;
        }
        @media (max-width: 768px) {
          height: 194px;
        }
        @media (max-width: 620px) {
          height: 214px;
        }
        @media (max-width: 506px) {
          height: 234px;
        }
        @media (max-width: 425px) {
          height: 264px;
        }
        @media (max-width: 411px) {
          height: 284px;
        }
      }
      .opened.sixth {
        height: 180px;
        @media (max-width: 1035px) {
          height: 158px;
        }
        @media (max-width: 775px) {
          height: 182px;
        }
        @media (max-width: 768px) {
          height: 146px;
        }
        @media (max-width: 590px) {
          height: 166px;
        }
        @media (max-width: 447px) {
          height: 188px;
        }
        @media (max-width: 415px) {
          height: 208px;
        }
        @media (max-width: 366px) {
          height: 232px;
        }
      }
    }
  }
`;
