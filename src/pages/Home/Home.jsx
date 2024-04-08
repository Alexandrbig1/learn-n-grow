import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import Price from "../../components/Price/Price";
import Testimonials from "../../components/Testimonials/Testimonials";
import { Container } from "../../components/layout";
import { HomeWrapper } from "./Home.styled";

function Home() {
  return (
    <Container>
      <Hero />
      <About />
      <Price />
      <Testimonials />
    </Container>
  );
}

export default Home;
