import styled from "styled-components";
import { robotoFont } from "../fonts";

export const HeroContainer = styled.div`
  padding-top: 6rem;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 6rem);
`;

export const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 9.6rem;
  justify-content: space-between;
  align-items: center;
  padding: 4.2rem 9.6rem;
  border-radius: 3rem;
  background-color: ${(p) => p.theme.colors.mainBgColorLowOp};
`;

export const HeroImgWrapper = styled.div`
  width: 44rem;
  height: 44rem;
  overflow: hidden;
  border-radius: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 7px solid #3e3e3e50;
  background-color: ${(p) => p.theme.colors.accentColor};
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  padding: 2.4rem;
  border-radius: 3rem;
  background-color: ${(p) => p.theme.colors.mainBgColor};
`;

export const HeroTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const HeroTitle = styled.h1`
  font-family: ${robotoFont};
  font-weight: 500;
  font-size: 4.6rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const HeroTitleStrong = styled.strong`
  color: ${(p) => p.theme.colors.accentColor};
`;

export const HeroText = styled.p`
  font-family: ${robotoFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const HeroButton = styled.button`
  align-self: self-end;
  border: none;
  outline: none;
  background: none;
  background-color: ${(p) => p.theme.colors.accentColor};
  border-radius: 12px;
  padding: 1.2rem 2.4rem;
  width: 28rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.accentColorHover};
  }
`;

export const HeroBtnText = styled.span`
  font-family: ${robotoFont};
  font-weight: 700;
  font-size: 18px;
  line-height: 1.55556;
  color: ${(p) => p.theme.colors.mainTextColorRev};
`;

export const HeroIcon = styled.span`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.mainTextColorRev};
`;
