import React, { useRef, useEffect } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

function Paragraph({ value, specialWordsIndices }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });
  const words = value.split(" ");

  useEffect(() => {
    const specialWords = document.querySelectorAll(".special-word");
    const tooltip1 = document.querySelector(".tooltip-1");
    const tooltip2 = document.querySelector(".tooltip-2");
    const tooltip3 = document.querySelector(".tooltip-3");

    specialWords[0].addEventListener("mousemove", (e) => {
      tooltip1.style.opacity = "1";
      const x = e.clientX;
      tooltip1.style.transform = `translateX(${x}px)`;
      tooltip1.style.top = "0vh";
      tooltip1.style.transition = "all 0.2s linear";
      specialWords[0].classList.add("hovered");
      specialWords[1].classList.add("hovered");
    });

    specialWords[0].addEventListener("mouseleave", () => {
      tooltip1.style.opacity = "0";
      tooltip1.style.left = "-10vw";
      tooltip1.style.top = "-10vh";
      tooltip1.style.transition = "all 0.2s linear";
      specialWords[1].classList.remove("hovered");
      specialWords[0].classList.remove("hovered");
    });

    specialWords[1].addEventListener("mousemove", (e) => {
      tooltip1.style.opacity = "1";
      const x = e.clientX;
      tooltip1.style.transform = `translateX(${x}px)`;
      tooltip1.style.top = "0vh";
      tooltip1.style.transition = "all 0.2s linear";
      specialWords[0].classList.add("hovered");
      specialWords[1].classList.add("hovered");
    });

    specialWords[1].addEventListener("mouseleave", () => {
      tooltip1.style.opacity = "0";
      tooltip1.style.left = "-10vw";
      tooltip1.style.top = "-10vh";
      tooltip1.style.transition = "all 0.2s linear";
      specialWords[1].classList.remove("hovered");
      specialWords[0].classList.remove("hovered");
    });

    specialWords[2].addEventListener("mousemove", (e) => {
      tooltip2.style.opacity = "1";
      const x = e.clientX;
      tooltip2.style.transform = `translateX(${x + 200}px)`;
      tooltip2.style.top = "10vh";
      tooltip2.style.transition = "all 0.2s linear";
      specialWords[2].classList.add("hovered");
    });

    specialWords[2].addEventListener("mouseleave", () => {
      tooltip2.style.opacity = "0";
      tooltip2.style.top = "30vh";
      tooltip2.style.transition = "all 0.2s linear";
      specialWords[2].classList.remove("hovered");
    });

    specialWords[3].addEventListener("mousemove", (e) => {
      tooltip3.style.opacity = "1";
      const x = e.clientX;
      tooltip3.style.transform = `translateX(${x}px)`;
      tooltip3.style.top = "30vh";
      tooltip3.style.transition = "all 0.2s linear";
    });

    specialWords[3].addEventListener("mouseleave", () => {
      tooltip3.style.opacity = "0";
      tooltip3.style.top = "10vh";
      tooltip3.style.transition = "all 0.2s linear";
    });
  }, []);

  return (
    <div className="relative">
      <p ref={element} className="paragraph">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          const isSpecialWord = specialWordsIndices.includes(i);
          return (
            <Word
              key={i}
              range={[start, end]}
              progress={scrollYProgress}
              isSpecial={isSpecialWord}
            >
              {word}
            </Word>
          );
        })}
      </p>
      <div className="tooltip tooltip-1 hidden lg:flex backdrop-blur-lg  opacity-0">
        <p>We only have a few members</p>
      </div>
      <div className="tooltip tooltip-2 hidden lg:flex backdrop-blur-lg  opacity-0">
        <p>Diverse Team</p>
      </div>
      <div className="tooltip tooltip-3 hidden lg:flex backdrop-blur-lg  opacity-0">
        <p>Experienced Members</p>
      </div>
    </div>
  );
}

const Word = ({ children, range, progress, isSpecial }) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className={`word ${isSpecial ? "special-word" : ""}`}>
      {characters.map((character, i) => {
        const start = range[0] + i * step;
        const end = range[0] + step * (i + 1);
        return (
          <Character
            key={i}
            range={[start, end]}
            progress={progress}
            isSpecial={isSpecial}
          >
            {character}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({ children, range, progress, isSpecial }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className="shadow">{children}</span>
      <motion.span
        style={{
          opacity,
        }}
        className={`character ${isSpecial ? "special-character" : ""}`}
      >
        {children}
      </motion.span>
    </span>
  );
};
export default Paragraph;
