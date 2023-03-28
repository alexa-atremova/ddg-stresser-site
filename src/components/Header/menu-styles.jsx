import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1366px) {
    display: none;
  }
`;
export const HamburgerMenuButton = styled.button`
  width: 42px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 10px;
  margin-left: 5px;

  @media (max-width: 960px) {
    display: block;
  }
`;

export const HamburgerMenuIcon = styled(FaBars)`
  color: #000000;
  font-size: 1.2rem;
`;
export const MenuButton = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

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

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 337px;
  height: 147px;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  gap: 20px;
  .img1 {
    position: absolute;

    left: 0px;
    img {
      width: 130px;
      height: 150px;
      transform: rotate(180deg);
    }
  }
  .img2 {
    right: 0px;
    position: absolute;

    img {
      width: 130px;
      height: 150px;
    }
  }
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
