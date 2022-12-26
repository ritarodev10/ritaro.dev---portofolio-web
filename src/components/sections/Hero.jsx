import { useEffect, useRef, useState } from "react";
import { heroDesc, loaderDelay } from "../../config";
import {
  useEntranceAnimation,
  useMobileView,
  useMount,
  useParallax,
  useTypingEffect,
} from "../../hooks";

const Hero = () => {
  const imageRef = useRef();
  const layerRef = useRef();
  useParallax(layerRef, imageRef);
  const { animateDone } = useEntranceAnimation();
  const { typedText, typingDone } = useTypingEffect(heroDesc);
  const [isMounted] = useMount();
  const isMobile = useMobileView();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const styling = {
    section: `hidden md:flex flex-col pt-24 md:p-0 justify-center relative w-full h-auto`,
    contentWrapper: `${
      scrollPosition > 300 && animateDone
        ? "top-24 2xl:top-48"
        : "top-32 2xl:top-60"
    } absolute px-6 z-20 left-[6rem] 2xl:left-[8rem] transition-all duration-[2000ms] ease-in-out`,
    one: `font-roboto-mono text-red-neon`,
    two: `font-noto font-bold text-6xl text-orange-neon -ml-1 mt-3 mb-2`,
    three: `font-noto font-semibold text-[2.1rem] text-orange-neon`,
    four: `font-roboto-mono text-white text-base leading-loose md:w-[28.1rem] mt-6 mb-9 after:content-['|'] after:text-orange-neonafter:w-1 after:h-1 after:bg-orange-neon after:animate-blink`,
    five: `font-roboto-mono px-6 py-3 bg-transparent border-2 border-orange-neon hover:border-red-neon rounded-lg text-orange-neon hover:text-red-neon transition-all duration-300`,
    six: `${
      isMounted ? "opacity-100 blur-0" : "opacity-0 blur-3xl"
    } [transition:opacity_2000ms_1000ms,blur_2000ms_1000ms] z-0 absolute bottom-0 xl:w-auto xl:h-[40rem] 2xl:h-[50rem] xl:top-10 2xl:top-20 xl:right-[4rem] 2xl:right-[7rem]`,
    fadeUp: `${
      isMounted ? "opacity-100" : "opacity-0 translate-y-[20px]"
    } transition-all duration-300 ease-smooth`,
    showUp: `${
      typingDone ? "opacity-100 scale-100" : "opacity-0 scale-90"
    } [transition:opacity_200ms_200ms,transform_200ms_200ms,color_200ms,border_200ms] ease-smooth`,
  };

  const contents = {
    one: <h3 className={styling.one}>Hi, my name is</h3>,
    two: <h1 className={`big-heading ${styling.two}`}>Riza Rohman.</h1>,
    three: (
      <h2 className={`sub-heading ${styling.three}`}>
        I build things for the web.
      </h2>
    ),
    four: <p className={styling.four}>{typedText}</p>,
    five: (
      <a
        className={`to-contact ${styling.five}`}
        href="/"
        //   target="_blank"
        //   rel="noreferrer"
      >
        Get in touch!
      </a>
    ),
    six: (
      <img
        ref={imageRef}
        src="./assets/header-image.svg"
        className={styling.six}
      />
    ),
  };

  const items = [contents.one, contents.two, contents.three, contents.four];

  return (
    <>
      <section ref={layerRef} className={`${styling.section}`}>
        <div className={`content-wrapper ${styling.contentWrapper}`}>
          {items.map((item, i) => (
            <div
              key={i}
              className={styling.fadeUp}
              style={{ transitionDelay: `${(i + 1) * 100 + loaderDelay}ms` }}
            >
              {item}
            </div>
          ))}
          <div className={styling.showUp} style={{ transitionDelay: `200ms` }}>
            {contents.five}
          </div>
        </div>
        <div className="image-wrapper relative h-screen">{contents.six}</div>
      </section>
    </>
  );
};

export default Hero;
