import styled from "styled-components";
import { robotoFont } from "../fonts";

export const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 9.6rem 9.6rem;
  margin: 0 auto;
`;

export const AboutMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
`;

export const AboutItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem;
  background-color: ${(p) => p.theme.colors.mainBgColorLowOp};
  border-radius: 1.2rem;
  width: 100%;
  height: 100%;
  padding: 4.4rem;
  border-bottom: 0.1px solid ${(p) => p.theme.colors.accentColor};
`;

export const AboutIcon = styled.span`
  font-size: 3.6rem;
  padding: 1.2rem;
  border-radius: 20rem;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  border-bottom: 1px solid ${(p) => p.theme.colors.accentColor};
  color: ${(p) => p.theme.colors.accentColor};
  position: absolute;
  top: -3.2rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const AboutText = styled.p`
  text-align: center;
  font-family: ${robotoFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainTextColor};
`;
