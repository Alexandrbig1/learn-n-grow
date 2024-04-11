import { useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import SocialIcons from "../SocialIcons/SocialIcons";
import {
  BurgerContainer,
  CloseBurgerMenu,
  IconMenu,
  IconMenuWrapper,
  Menu,
  MenuBurgerContainer,
  BurgerMenuItems,
  BurgerLogoWrapper,
  MenuText,
} from "./MenuBurger.styled";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function MenuBurger({ toggleMenu, menuOpen }) {
  const navigate = useNavigate();

  const handleLinkClick = (to) => {
    const sectionId = to.replace("/", "");
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(to);
    }
  };

  return (
    <Menu $isOpen={menuOpen}>
      <BurgerContainer>
        <CloseBurgerMenu onClick={toggleMenu} />
        <nav>
          <BurgerMenuItems>
            <li onClick={toggleMenu}>
              <MenuText
                href="/home"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/home");
                }}
              >
                Home
              </MenuText>
            </li>
            <li onClick={toggleMenu}>
              <MenuText
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/about");
                }}
              >
                About
              </MenuText>
            </li>
            <li onClick={toggleMenu}>
              <MenuText
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/projects");
                }}
              >
                Projects
              </MenuText>
            </li>
            <li onClick={toggleMenu}>
              <MenuText
                href="/experience"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/experience");
                }}
              >
                Experience
              </MenuText>
            </li>
            <li onClick={toggleMenu}>
              <MenuText
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/contact");
                }}
              >
                Contact
              </MenuText>
            </li>
          </BurgerMenuItems>
        </nav>
        <BurgerLogoWrapper>
          <SocialIcons />
        </BurgerLogoWrapper>
      </BurgerContainer>
    </Menu>
  );
}
