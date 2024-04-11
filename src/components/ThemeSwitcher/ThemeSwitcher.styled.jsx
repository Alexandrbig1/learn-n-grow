import styled from "styled-components";
import { FiSun } from "react-icons/fi";
import { LuMoon } from "react-icons/lu";

export const ThemeSwitcherBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 1.2rem;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 20rem;
  transition: all var(--primary-transition);

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(p) => p.theme.colors.headerTextColorLowOp};
  }
`;

export const SunIcon = styled(FiSun)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.headerTextColor};
`;

export const MoonIcon = styled(LuMoon)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.headerTextColor};
`;
