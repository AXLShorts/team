import React, { useRef, useEffect } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import throttle from "lodash/throttle";

function Paragraph({ value, specialWordsIndices }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });
  const words = value.split(" ");

  useEffect(() => {
    const tooltip1 = document.querySelector(".tooltip-1");
    document
      .querySelectorAll(".special-word")[0]
      .addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        tooltip1.style.left = x - 100 + "px";
        tooltip1.style.top = y - 375 + "px";
        tooltip1.style.opacity = 1;
        tooltip1.style.transition = "all 0.1s linear";
      });
    document
      .querySelectorAll(".special-word")[0]
      .addEventListener("mouseleave", (e) => {
        tooltip1.style.left = -100 + "px";
        tooltip1.style.top = -200 + "px";
        tooltip1.style.opacity = 0;
        tooltip1.style.transition = "all 0.1s linear";
      });
    document
      .querySelectorAll(".special-word")[1]
      .addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        tooltip1.style.left = x - 100 + "px";
        tooltip1.style.top = y - 375 + "px";
        tooltip1.style.opacity = 1;
        tooltip1.style.transition = "all 0.1s linear";
      });
    document
      .querySelectorAll(".special-word")[1]
      .addEventListener("mouseleave", (e) => {
        tooltip1.style.left = -100 + "px";
        tooltip1.style.top = -200 + "px";
        tooltip1.style.opacity = 0;
        tooltip1.style.transition = "all 0.1s linear";
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
      <div className="tooltip tooltip-1">
        <p>We only have a few members</p>
      </div>
      <div className="tooltip tooltip-2">
        <p>The members are experts in diverse fields</p>
      </div>
      <div className="tooltip tooltip-3">
        <p>The members are very experienced</p>
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
