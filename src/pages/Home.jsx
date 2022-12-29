import Layout from "../layouts/Layout";
import { About, Hero } from "../components/sections";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
};

export default Home;
