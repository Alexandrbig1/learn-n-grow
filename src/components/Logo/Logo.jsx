import { LogoIcon, LogoText, LogoWrapper } from "./Logo.styled";
import { GiBeech } from "react-icons/gi";

// eslint-disable-next-line react/prop-types
function Logo({ size }) {
  return (
    <LogoWrapper href="/">
      <LogoIcon>
        <GiBeech />
      </LogoIcon>
      <LogoText>learn&grow</LogoText>
    </LogoWrapper>
  );
}

export default Logo;
