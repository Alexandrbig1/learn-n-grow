import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { motion } from "framer-motion";
import MenuBurgerIcon from "../MenuBurger/MenuBurgerIcon";
import {
  BurgerWrapper,
  HeaderContainer,
  HeaderLink,
  HeaderNavWrapper,
  HeaderWrapper,
} from "./Header.styled";

// eslint-disable-next-line react/prop-types
function Header({ toggleTheme, isDarkTheme, toggleMenu }) {
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
    <HeaderContainer>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring" }}
      >
        <HeaderWrapper>
          <Logo />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <HeaderNavWrapper>
              <HeaderLink
                href="/home"
                name="home"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/home");
                }}
              >
                Home
              </HeaderLink>
              <HeaderLink
                href="/about"
                name="about"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/about");
                }}
              >
                About
              </HeaderLink>
              <HeaderLink
                href="/contact"
                name="contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/contact");
                }}
              >
                Contact
              </HeaderLink>
              <HeaderLink
                href="/testimonials"
                name="testimonials"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/testimonials");
                }}
              >
                Testimonials
              </HeaderLink>
            </HeaderNavWrapper>
          </motion.div>
          <BurgerWrapper>
            <ThemeSwitcher
              toggleTheme={toggleTheme}
              isDarkTheme={isDarkTheme}
            />
            <MenuBurgerIcon toggleMenu={toggleMenu} />
          </BurgerWrapper>
        </HeaderWrapper>
      </motion.div>
    </HeaderContainer>
  );
}

export default Header;
