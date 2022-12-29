import React from "react";

const About = ({ aboutMe }) => {
  const skills = [
    { id: 1, label: "JavaScript" },
    { id: 1, label: "ReactJs" },
    { id: 1, label: "VueJs" },
    { id: 1, label: "TypeScript" },
    { id: 1, label: "Node.Js" },
    { id: 1, label: "Java" },
    { id: 1, label: "MySql" },
    { id: 1, label: "Wordpress" },
  ];
  return (
    <section
      id="about-me"
      className="relative max-w-[480] md:max-w-[768px] xl:max-w-[900] flex flex-col gap-8"
    >
      <div className="w-full overflow-hidden h-8 md:w-[408px]">
        <h2 className="title relative font-noto font-semibold text-2xl md:text-[1.65rem] text-slate-300 before:content-['01._'] | before:font-roboto-mono before:font-medium before:text-base md:before:text-xl before:text-orange-neon | after:content-['----------------------------------'] after:-tracking-[0.1em] after:ml-3 after:font-extralight after:text-slate-500 ">
          About Me
        </h2>
      </div>
      <div
        className="inner block md:grid"
        style={{ gridTemplateColumns: "3fr 2fr", gap: "60px" }}
      >
        <div className="description ">
          <div className="intro font-noto text-[17px] text-slate-400 flex flex-col gap-4 leading-relaxed">
            <p className="">
              Hi there! I'm Riza and I love creating digital projects. My
              interest in web development started in 2015 when I needed to
              streamline my online clothing business and built my own website
              with Wordpress and Woocommerce, learning HTML and CSS along the
              way.
            </p>
            <p>
              Since then, I've continued to learn and grow as a developer. I've
              worked as a freelance developer building websites, e-commerce
              platforms, and web apps for clients, and have also had the
              opportunity to work with some great companies. I'm always looking
              for new ways to improve and expand my skills in the field.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul
              className="skill list mt-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(140px, 200px))",
              }}
            >
              {skills.map((item, i) => (
                <li
                  key={i}
                  className="font-roboto-mono text-sm before:content-['▹_'] before:text-orange-neon"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="skills"></div>
        </div>
        <div className="my-image mt-12 md:mt-0">
          <div className="w-[300px] h-[300px] bg-slate-300 rounded"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
