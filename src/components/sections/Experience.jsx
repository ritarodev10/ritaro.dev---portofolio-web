import React from "react";

const Experience = () => {
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
      id="experience"
      className="relative max-w-[480] md:max-w-[768px] xl:max-w-[900] flex flex-col gap-8"
    >
      <div className="w-full overflow-hidden h-8 md:w-[408px]">
        <h2 className="title relative font-noto font-semibold text-2xl md:text-[1.65rem] text-slate-300 before:content-['02._'] | before:font-roboto-mono before:font-medium before:text-base md:before:text-xl before:text-orange-neon | after:content-['----------------------------------'] after:-tracking-[0.1em] after:ml-3 after:font-extralight after:text-slate-500 ">
          Where I've Worked
        </h2>
      </div>
      <div
        className="inner block md:grid"
        style={{ gridTemplateColumns: "3fr 2fr", gap: "60px" }}
      >
        <div className="description ">
          <div className="intro font-noto text-[17px] text-slate-400 flex flex-col gap-4 leading-relaxed">
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
              risus eget elit congue placerat. Proin auctor tincidunt leo, quis
              imperdiet diam auctor eu. Donec lacinia, magna sed vehicula
              viverra, turpis mi ultricies magna, in fermentum tellus lacus non
              diam.
            </p>
            <p>
              Nullam suscipit, quam vel tempus sollicitudin, ipsum nibh porta
              eros, eu faucibus lacus dolor non purus. Sed mauris metus, rhoncus
              at rutrum id, ornare a dui. Curabitur bibendum, ligula at mollis
              posuere, velit elit iaculis turpis, eget egestas dolor enim non
              dolor.
            </p>
          </div>
        </div>
        <div className="my-image mt-12 md:mt-0">
          <div className="w-[300px] h-[300px] bg-slate-300 rounded"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
