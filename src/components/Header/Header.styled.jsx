import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2.4rem;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  background-color: transparent;
  margin: 0 auto;
  width: 60%;
`;

export const HeaderNavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;
