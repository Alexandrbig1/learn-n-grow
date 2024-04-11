import styled from "styled-components";

export const LogoWrapper = styled.a`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

export const LogoIcon = styled.span`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const LogoText = styled.p`
  color: ${(p) => p.theme.colors.headerTextColor};
`;
