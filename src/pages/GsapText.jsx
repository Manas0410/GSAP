import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GsapText = () => {
  const scrollRef = useRef();
  const paraRef = useRef();

  useGSAP(() => {
    const box = scrollRef.current;
    gsap.to("#text", {
      opacity: 1,
      ease: "bounce.inOut",
      y: 0,
      scrollTrigger: {
        trigger: box,
        start: "top 70%",
        end: "top 50%",
        scrub: true,
      },
    });

    const paragraphs = gsap.utils.toArray(paraRef.current.children);

    paragraphs.forEach((para) => {
      gsap.fromTo(
        // ".para",
        para,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          delay: 1,
          stagger: 0.4,
          scrollTrigger: {
            trigger: para,
            start: "top 70%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <main>
      <div className="h-[200vh] bg-blue-600"></div>
      <h1 id="text" className="opacity-0 translate-y-10" ref={scrollRef}>
        GsapText
      </h1>

      <section ref={paraRef} className="">
        <p className="mt-5 text-gray-500 para">
          We can use same method like <code>gsap.to()</code>,{" "}
          <code>gsap.from()</code>, <code>gsap.fromTo()</code> and{" "}
          <code>gsap.timeline()</code> to animate text.
        </p>

        <p className="mt-5 text-gray-500 para">
          Using these methods we can achieve various text animations and effects
          like fade in, fade out, slide in, slide out, and many more.
        </p>

        <p className="mt-5 text-gray-500 para">
          For more advanced text animations and effects, you can explore the
          GSAP TextPlugin or other third-party libraries that specialize in text
          animations.
        </p>

        <p className="mt-5 text-gray-500 para">
          Read more about the{" "}
          <a
            href="https://greensock.com/docs/v3/Plugins/TextPlugin"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            TextPlugin
          </a>{" "}
          plugin.
        </p>
      </section>
      <div className="h-[200vh] bg-blue-600"></div>
    </main>
  );
};

export default GsapText;
