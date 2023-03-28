import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;

  background: #fcfbfc;
`;
export const Wrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1420px;
  gap: 50px;
`;

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1300px;
`;
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 519px;
  height: 511px;
`;

export const Title = styled.h1`
  display: flex;
  align-self: flex-start;
  font-family: "Avante Int";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 65px;
  /* identical to box height, or 162% */

  color: #1b1b1b;

  width: 574px;
`;

export const Text = styled.p`
  font-family: "Gill Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 35px;
  /* or 175% */

  color: #1b1b1b;

  width: 664px;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 30px;
`;

export const WrapBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  height: 223px;
  margin: 0;

  gap: 10px;
`;

export const BlockTitle = styled.h2`
  margin: 0;
  font-family: "Avante Int";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #1b1b1b;
`;

export const BlockText = styled.p`
  width: 300px;
  margin: 0;
  font-family: "Gill Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #1b1b1b;
`;
