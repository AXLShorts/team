import React, { useEffect } from "react";
import Paragraph from "../Paragraph";

function About() {
  const text =
    "A small team with big ideas. We have the variety of an agency and the experience of a studio.";

  useEffect(() => {
    document
      .querySelectorAll(".special-word")[0]
      .addEventListener("mouseenter", function () {
        document.querySelectorAll(".special-word")[1].classList.add("hovered");
      });

    document
      .querySelectorAll(".special-word")[0]
      .addEventListener("mouseleave", function () {
        document
          .querySelectorAll(".special-word")[1]
          .classList.remove("hovered");
      });

    document
      .querySelectorAll(".special-word")[1]
      .addEventListener("mouseenter", function () {
        document.querySelectorAll(".special-word")[0].classList.add("hovered");
      });

    document
      .querySelectorAll(".special-word")[1]
      .addEventListener("mouseleave", function () {
        document
          .querySelectorAll(".special-word")[0]
          .classList.remove("hovered");
      });
  }, []);

  return (
    <div className="bg-white [background:radial-gradient(125%_125%_at_50%_90%,#fff_40%,#63e_100%)] p-5 pt-[5%] sm:pt-64 overflow-x-hidden">
      <Paragraph value={text} specialWordsIndices={[1, 2, 9, 15]} />
    </div>
  );
}

export default About;
