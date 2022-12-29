import { useEffect, useState } from "react";
import { About, Contact, Experience, Hero, Work } from "./components/sections";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
    </Layout>
  );
}

export default App;
