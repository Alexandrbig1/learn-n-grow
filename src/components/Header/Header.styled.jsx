import styled, { css } from "styled-components";
import { robotoFont } from "../fonts";

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;

  max-width: 375px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 3.2rem;
    width: 100%;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 2.4rem;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: ${(p) => p.theme.colors.headerBoxShadow} 0px 2px 5px 0px,
    ${(p) => p.theme.colors.headerBoxShadowSecond} 0px 1px 1px 0px;
  max-width: 348px;
  width: 100%;
  height: 5.8rem;

  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;

  background-color: ${(p) => p.theme.colors.accentColorLowOp};
  padding: 1.2rem 2.4rem;
  border-radius: 20rem;

  color: ${(p) => p.theme.colors.headerTextColor};

  z-index: 50;

  @media (min-width: 768px) {
    max-width: 68.2rem;
    width: 100%;
    gap: 4.8rem;
    justify-content: center;
  }

  @media (min-width: 1440px) {
    position: fixed;
    top: 2.4rem;
    left: 50%;
    transform: translateX(-50%);
    gap: 9.6rem;
    max-width: 79.2rem;
  }
`;

export const HeaderNavWrapper = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
`;

export const BurgerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const HeaderLink = styled.a`
  color: ${(p) => p.theme.colors.mainTextColorLowOp};
  font-family: ${robotoFont};
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.36px;
  transition: all var(--primary-transition);
  background-color: transparent;
  padding: 0.6rem 1.2rem;
  border-radius: 20rem;

  &:hover {
    color: ${(p) => p.theme.colors.mainTextColor};
    background-color: ${(p) => p.theme.colors.mainBgColor};
  }

  ${({ $active }) =>
    $active &&
    css`
      color: ${(p) => p.theme.colors.mainTextColor};
      background-color: ${(p) => p.theme.colors.mainBgColor};
    `}
`;
