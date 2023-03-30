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
        min-height: 400px;
      }
    }
  }
  @media (max-width: 1919px) {
    max-width: 800px;
    .desk {
      .slick-list {
        .slick-track {
          min-height: 300px;
        }
      }
    }
  }
  @media (max-width: 1365px) {
    max-width: 650px;
    .desk {
      .slick-list {
        .slick-track {
          min-height: 250px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    max-width: 320px;
    .desk {
      .slick-list {
        .slick-track {
          min-height: 250px;
        }
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
  @media (max-width: 1919px) {
    right: -50px;
    width: 20px;
    height: 20px;
    img {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 1365px) {
    display: none;
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
  @media (max-width: 1919px) {
    left: -50px;

    width: 20px;
    height: 20px;
    img {
      width: 20px;
      height: 20px;
    }
  }
  @media (max-width: 1365px) {
    display: none;
  }
`;
