import styled from "styled-components";

export const SliderStyledSlidesCarousel = styled.div`
  width: 100%;
  max-width: 320px;

  .desk {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;

    .slick-slide {
      transition: all 0.5s;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 70.32px;
        height: 70.32px;
        margin: auto;
      }
    }

    .slick-list {
      height: 100%;

      .slick-track {
        min-height: 200px;
      }
    }
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
export const SliderWrapBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 320px;
  text-align: center;
  margin: 0;
  gap: 10px;

  .blockImg {
    width: 70.32px;
    height: 70.32px;
  }
`;

export const SliderBlockTitle = styled.h2`
  margin: 0;
  padding-top: 30px;
  font-family: "Avante Int";
  font-style: normal;
  font-weight: 700;
  font-size: 16.5456px;
  line-height: 20px;

  color: #1b1b1b;

  max-width: 270px;
`;

export const SliderBlockText = styled.p`
  margin: 0;
  font-family: "Gill Sans";
  font-style: normal;
  font-weight: 400;
  color: #1b1b1b;
  width: 100%;
  font-size: 14.891px;
  line-height: 17px;

  max-width: 270px;
`;
