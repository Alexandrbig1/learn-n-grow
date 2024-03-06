import { HeaderNavWrapper, HeaderWrapper } from "./Header.styled";

function Header() {
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
