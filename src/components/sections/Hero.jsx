import { useEffect, useRef, useState } from "react";
import { heroDesc, loaderDelay } from "../../config";
import {
  useDeviceType,
  useEntranceAnimation,
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
  const { isMobile } = useDeviceType();
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

  const getInTouch = () => {
    const section = document.getElementById("contact");
    const sectionY = section.offsetTop;
    window.scrollTo(0, sectionY - 100);
  };

  const styling = {
    section: `flex flex-col pt-24 md:p-0 justify-center relative w-full h-auto`,
    contentWrapper: `${
      scrollPosition > 300 && animateDone
        ? ""
        : "xl:translate-y-8 2xl:translate-y-12"
    } md:py-24 2xl:py-48 xl:px-[6rem] 2xl:px-[8rem] z-20 transition-all duration-[2000ms] ease-in-out`,
    imageWrapper: `md:absolute xl:top-10 2xl:top-20 xl:right-[4rem] 2xl:right-[7rem] -translate-x-[10rem] translate-y-[2rem] md:translate-x-0 md:translate-y-0`,
    one: `font-roboto-mono text-red-neon`,
    two: `font-noto font-bold text-[3.2rem] leading-none xl:text-6xl text-orange-neon -ml-1 mt-3 mb-2`,
    three: `font-noto font-semibold text-[1.7rem] xl:text-[2.1rem] text-slate-300`,
    four: `font-roboto-mono text-slate-400 text-base leading-loose md:w-[23.6rem] xl:w-[28.1rem] mt-6 mb-10 md:mb-10 after:content-['|'] after:text-orange-neon after:w-1 after:h-1 after:bg-orange-neon after:animate-blink`,
    five: `font-roboto-mono px-6 py-3 bg-transparent border-2 border-orange-neon hover:border-red-neon rounded-lg text-orange-neon hover:text-red-neon transition-all duration-300`,
    six: ` block lg:hidden font-roboto-mono px-6 py-3 bg-opacity-50 border-2 border-orange-neon bg-orange-neon hover:border-red-neon rounded-lg text-dark font-semibold hover:text-red-neon transition-all duration-300`,
    seven: `${
      isMounted ? "opacity-100 blur-0" : "opacity-0 blur-3xl"
    } [transition:opacity_2000ms_1000ms,blur_2000ms_1000ms] z-0 bottom-0 max-w-[160%] xl:w-auto xl:h-[40rem] 2xl:h-[50rem]`,
    fadeUp: `${
      isMounted ? "opacity-100" : "opacity-0 translate-y-[20px]"
    } transition-all duration-300 ease-smooth`,
    showUp: `${
      typingDone ? "opacity-100 scale-100" : "opacity-0 scale-90"
    } [transition:opacity_200ms_200ms,transform_200ms_200ms,color_200ms,border_200ms] ease-smooth flex gap-4`,
  };

  const contents = {
    one: <h3 className={styling.one}>Hi, my name is</h3>,
    two: <h1 className={`big-heading ${styling.two}`}>Riza Rohman</h1>,
    three: (
      <h2 className={`sub-heading ${styling.three}`}>
        I build things for the web.
      </h2>
    ),
    four: <p className={styling.four}>{typedText}</p>,
    five: (
      <button className={`to-contact ${styling.five}`} onClick={getInTouch}>
        Get in touch!
      </button>
    ),
    six: (
      <a
        className={`to-contact ${styling.six}`}
        href="/Resume.pdf"
        target="_blank"
      >
        Resume
      </a>
    ),
    seven: (
      <img
        ref={imageRef}
        src="./assets/header-image.svg"
        className={styling.seven}
      />
    ),
  };

  const items = [contents.one, contents.two, contents.three, contents.four];

  return (
    <>
      <section id="top" ref={layerRef} className={`${styling.section}`}>
        <div className={`content-wrapper ${styling.contentWrapper}`}>
          <div className="inner-wrapper h-[500px]">
            {items.map((item, i) => (
              <div
                key={i}
                className={styling.fadeUp}
                style={{ transitionDelay: `${(i + 1) * 100 + loaderDelay}ms` }}
              >
                {item}
              </div>
            ))}
            <div
              className={styling.showUp}
              style={{ transitionDelay: `200ms` }}
            >
              {contents.five} {isMobile ? contents.six : null}
            </div>
          </div>
        </div>
        <div className={`image-wrapper ${styling.imageWrapper}`}>
          {contents.seven}
        </div>
      </section>
    </>
  );
};

export default Hero;
