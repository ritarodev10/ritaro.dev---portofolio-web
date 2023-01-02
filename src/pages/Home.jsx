import Layout from "../layouts/Layout";
import { About, Contact, Experience, Hero, Work } from "../components/sections";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
    </>
  );
};

export default Home;
