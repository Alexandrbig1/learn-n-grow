import { HeaderNavWrapper, HeaderWrapper } from "./Header.styled";

// eslint-disable-next-line react/prop-types
function Header({ toggleTheme, isDarkTheme }) {
  return (
    <HeaderWrapper>
      <span>logo</span>
      <HeaderNavWrapper>
        <span>home</span>
        <span>about</span>
        <span>contact</span>
      </HeaderNavWrapper>
    </HeaderWrapper>
  );
}

export default Header;
