import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import Price from "../../components/Price/Price";
import Testimonials from "../../components/Testimonials/Testimonials";
import { HomeWrapper } from "./Home.styled";

function Home() {
  return (
    <HomeWrapper>
      <Hero />
      <About />
      <Price />
      <Testimonials />
    </HomeWrapper>
  );
}

export default Home;
