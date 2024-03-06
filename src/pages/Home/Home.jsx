import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import Testimonials from "../../components/Testimonials/Testimonials";
import { HomeWrapper } from "./Home.styled";

function Home() {
  return (
    <HomeWrapper>
      <Hero />
      <About />
      <Testimonials />
    </HomeWrapper>
  );
}

export default Home;
