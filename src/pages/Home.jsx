import { useEffect, useRef } from "react";
import { useState } from "react";
import { About, Hero } from "../components/sections";
import { useEntranceAnimation, useMount, useTypingEffect } from "../hooks";

const Home = () => {
  const { animateDone } = useEntranceAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        animateDone ? "" : "pointer-events-none "
      } container overflow-x-hidden m-auto  bg-dark h-[5000px]`}
    >
      <Hero />
      <About />
    </div>
  );

  //   function MobileHero() {
  //     return (
  //       <div className="flex md:hidden flex-col gap-3 pt-20 md:p-0 justify-center relative w-full h-auto">
  //         <div className="md:absolute px-6 z-20 top-32 2xl:top-60 left-[8rem] 2xl:left-[11rem]">
  //           <p className="font-roboto-mono text-[1.4rem] text-red-neon">
  //             hi, my name is
  //           </p>
  //           <h1 className="font-noto font-bold text-[3.3rem] text-orange-neon -ml-1 mb-1">
  //             Riza Rohman
  //           </h1>
  //           <h2 className="font-noto font-semibold text-[1.6rem] text-orange-neon">
  //             I build things for the web.
  //           </h2>
  //         </div>
  //         <div className="relative h-[400px]">
  //           <img
  //             src="./assets/header-image.svg"
  //             className="z-0 absolute max-w-[35rem] right-[0.1rem] top-0 xl:w-auto xl:h-[40rem] 2xl:h-[50rem] xl:top-10 2xl:top-20 xl:right-[4rem] 2xl:right-[8rem]"
  //           />
  //         </div>
  //         <div className="md:absolute px-6 z-20 top-32 2xl:top-60 left-[8rem] 2xl:left-[11rem]">
  //           <p className="font-noto text-white text-lg md:w-[28rem] 2xl:w-[28rem] mt-6 mb-9">
  //             I am a full-stack developer with strong foundation in multiple
  //             programming languages and technologies. I am dedicated to building
  //             intuitive and high-quality software for my clients and users, and am
  //             always looking to learn and grow as a developer.
  //           </p>
  //           <button className="font-roboto-mono px-6 py-3 bg-transparent border-2 border-orange-neon  hover:border-red-neon rounded-lg text-orange-neon hover:text-red-neon hover:bg-opacity-10 transition-all duration-300">
  //             Get in touch
  //           </button>
  //         </div>
  //       </div>
  //     );
  //   }

  //   function Heroo() {
  //     return (
  //       <div
  //         ref={layerRef}
  //         className={`hidden md:flex flex-col pt-24 md:p-0 justify-center relative w-full h-auto`}
  //       >
  //         <div
  //           className={`${
  //             scrollPosition > 300 && animateDone
  //               ? "top-24 2xl:top-48"
  //               : "top-32 2xl:top-60"
  //           } absolute px-6 z-20 left-[6rem] 2xl:left-[8rem] transition-all duration-[2000ms] ease-in-out`}
  //         >
  //           <p
  //             className={`${
  //               isMounted ? "opacity-100" : "opacity-0 translate-y-5"
  //             } [transition:opacity_500ms_ease-out_1000ms,transform_500ms_ease-out_1000ms] font-roboto-mono text-red-neon`}
  //           >
  //             hi, my name is
  //           </p>

  //           <h1
  //             className={`${
  //               isMounted ? "opacity-100" : "opacity-0 translate-y-5"
  //             } [transition:opacity_500ms_ease-out_1100ms,transform_500ms_ease-out_1100ms] font-noto font-bold text-6xl text-orange-neon -ml-1 mt-3 mb-2`}
  //           >
  //             Riza Rohman
  //           </h1>

  //           <h2
  //             className={`${
  //               isMounted ? "opacity-100" : "opacity-0 translate-y-5"
  //             } [transition:opacity_500ms_ease-out_1200ms,transform_500ms_ease-out_1200ms] font-noto font-semibold text-[2.1rem] text-orange-neon `}
  //           >
  //             I build things for the web.
  //           </h2>

  //           <p
  //             className={`${
  //               isMounted ? "opacity-100" : ""
  //             } [transition:opacity_500ms_ease-out_2.6s,transform_500ms_ease-out_2.6s] font-roboto-mono text-white text-base leading-loose md:w-[28.1rem] mt-6 mb-9 after:content-['|'] after:w-1 after:h-1 after:bg-orange-neon after:text-orange-neon after:animate-blink`}
  //           >
  //             {typedText}
  //           </p>

  //           <button
  //             className={`${
  //               typeIsDone ? "opacity-100 scale-100" : "opacity-0 scale-75"
  //             } [transition:opacity_300ms_200ms,transform_300ms_200ms,color_200ms,border_200ms] ease-smooth font-roboto-mono px-6 py-3 bg-transparent border-2 border-orange-neon  hover:border-red-neon rounded-lg text-orange-neon hover:text-red-neon transition-all duration-300`}
  //           >
  //             Get in touch
  //           </button>
  //         </div>
  //         <div className="relative h-screen">
  //           <img
  //             ref={imageRef}
  //             src="./assets/header-image.svg"
  //             className={`${
  //               isMounted ? "opacity-100 blur-0" : "opacity-0 blur-3xl"
  //             } [transition:opacity_2000ms_ease-out_1000ms,blur_2000ms,border_1000ms] z-0 absolute transition-all duration-[2000ms] delay-[1000ms] bottom-0 xl:w-auto xl:h-[40rem] 2xl:h-[50rem] xl:top-10 2xl:top-20 xl:right-[4rem] 2xl:right-[7rem]`}
  //           />
  //         </div>
  //       </div>
  //     );
  //   }
};

export default Home;
