import {
  HeroContainer,
  HeroWrapper,
  HeroTextWrapper,
  HeroImage,
  HeroImgWrapper,
  HeroTitle,
  HeroText,
  HeroButton,
  HeroTitleWrapper,
  HeroTitleStrong,
} from "./Hero.styled";

function Hero() {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroImgWrapper>
          <HeroImage src="/public/images/hero.png" alt="image" />
        </HeroImgWrapper>
        <HeroTextWrapper>
          <HeroTitleWrapper>
            <HeroTitle>
              Unlock Your Potential with{" "}
              <HeroTitleStrong>Learn-n-Grow</HeroTitleStrong> Language School
              Today!
            </HeroTitle>
            <HeroText>
              Discover a world of opportunities with Learn-n-Grow Language
              School. Whether you're a beginner or looking to enhance your
              skills, our tailored courses in German and English are designed
              for everyone. Join us and embark on an exciting journey towards
              fluency and cultural enrichment!
            </HeroText>
          </HeroTitleWrapper>
          <HeroButton>Get Started</HeroButton>
        </HeroTextWrapper>
      </HeroWrapper>
    </HeroContainer>
  );
}

export default Hero;
