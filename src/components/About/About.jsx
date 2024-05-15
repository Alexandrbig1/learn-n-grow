import {
  AboutContainer,
  AboutIcon,
  AboutItem,
  AboutMenu,
  AboutText,
} from "./About.styled";
import { Tb24Hours } from "react-icons/tb";
import { BiConversation } from "react-icons/bi";
import { GrSchedule } from "react-icons/gr";
import { AiOutlineThunderbolt } from "react-icons/ai";

function About() {
  return (
    <AboutContainer id="about">
      <AboutMenu>
        <AboutItem>
          <AboutIcon>
            <Tb24Hours />
          </AboutIcon>
          <AboutText>Live classes online 24/7</AboutText>
        </AboutItem>
        <AboutItem>
          <AboutIcon>
            <BiConversation />
          </AboutIcon>
          <AboutText>Practice speaking in small groups or 1-on-1</AboutText>
        </AboutItem>
        <AboutItem>
          <AboutIcon>
            <GrSchedule />
          </AboutIcon>
          <AboutText>Choose your program and custom schedule.</AboutText>
        </AboutItem>
        <AboutItem>
          <AboutIcon>
            <AiOutlineThunderbolt />
          </AboutIcon>
          <AboutText>Learn more, learn faster, and have fun.</AboutText>
        </AboutItem>
      </AboutMenu>
    </AboutContainer>
  );
}

export default About;
