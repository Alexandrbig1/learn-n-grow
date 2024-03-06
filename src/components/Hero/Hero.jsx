import { HeroContainer, HeroWrapper, HeroTextWrapper } from "./Hero.styled";

function Hero() {
  return (
    <HeroContainer>
      <HeroWrapper>
        <img src="#" alt="image" />
        <HeroTextWrapper>
          <h1>Hero</h1>
          <p>description</p>
          <button>Button</button>
        </HeroTextWrapper>
      </HeroWrapper>
    </HeroContainer>
  );
}

export default Hero;
