import React from "react";

const Contact = () => {
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
      id="contact"
      className="relative max-w-[600px] flex flex-col items-center gap-12"
    >
      <h3 className="font-roboto-mono font-medium text-lg text-orange-neon before:content-['04._'] | before:font-roboto-mono before:font-medium before:text-sm before:text-orange-neon">
        What's next?
      </h3>
      <h2 className="font-noto text-slate-300 text-5xl font-bold -mt-8 -mb-6">
        Get in Touch
      </h2>
      <p className="font-noto text-slate-400 text-center leading-relaxed">
        I'm currently seeking new opportunities to showcase my skills and make
        an impact, whether it's through exciting projects or full-time
        positions. Contact me to learn more about how I can contribute to your
        team or project.
      </p>
      <button className="font-roboto-mono px-6 py-3 bg-transparent border-2 border-orange-neon hover:border-red-neon rounded-lg text-orange-neon hover:text-red-neon transition-all duration-300">
        Say Hello!
      </button>
    </section>
  );
};

export default Contact;
