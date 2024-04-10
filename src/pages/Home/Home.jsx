import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Hero from "../../components/Hero/Hero";
import Testimonials from "../../components/Testimonials/Testimonials";
import { Container } from "../../components/layout";

function Home() {
  return (
    <>
      <Container>
        <Hero />
        <About />
      </Container>
      <Contact />
      <Container>
        <Testimonials />
      </Container>
    </>
  );
}

export default Home;
