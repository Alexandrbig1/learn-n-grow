import {
  IconMenu,
  IconMenuWrapper,
  MenuBurgerContainer,
} from "./MenuBurger.styled";

// eslint-disable-next-line react/prop-types
function MenuBurgerIcon({ toggleMenu }) {
  return (
    <MenuBurgerContainer>
      <IconMenuWrapper onClick={toggleMenu}>
        <IconMenu />
      </IconMenuWrapper>
    </MenuBurgerContainer>
  );
}

export default MenuBurgerIcon;
