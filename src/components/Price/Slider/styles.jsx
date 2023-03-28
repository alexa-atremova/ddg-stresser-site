import styled from "styled-components";

export const StyledSlidesCarousel = styled.div`
  width: 100%;
  max-width: 1200px;

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
    }
    .slick-list {
      height: 100%;

      .slick-track {
        min-height: 450px;
      }
    }
  }
`;
export const StyledNextArrow = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -35px;

  width: 30px;
  height: 30px;

  top: 40%;
  user-select: none;
  cursor: pointer;
  ::before {
    display: none;
  }
  @media (max-width: 1023px) {
    right: -25px;
    width: 20px;
    height: 20px;
    img {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 767px) {
    right: -35px;
    width: 30px;
    height: 30px;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const StyledPrevArrow = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 40%;
  left: -35px;

  width: 30px;
  height: 30px;

  user-select: none;
  cursor: pointer;
  ::before {
    display: none;
  }
  @media (max-width: 1023px) {
    left: -25px;
    width: 20px;
    height: 20px;
    img {
      width: 20px;
      height: 20px;
    }
  }
  @media (max-width: 767px) {
    left: -35px;
    width: 30px;
    height: 30px;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;
