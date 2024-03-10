import React from "react";
import Paragraph from "../Paragraph";
import CTA from "../CTA";

function About() {
  const text =
    "A small team with big ideas. We have the variety of an agency and the experience of a studio.";

  const data = [
    {
      direction: false,
      title: "About us",
      text: "A small team with big ideas. We have the variety of an agency and the experience of a studio.",
      image: "https://picsum.photos/200",
    },
    {
      direction: true,
      title: "Our mission",
      text: "We are a team of creatives who are excited about unique ideas and help businesses to create amazing identity by crafting top-notch digital solutions.",
      image: "https://picsum.photos/300",
    },
    {
      direction: false,
      title: "Our vision",
      text: "We are a team of creatives who are excited about unique ideas and help businesses to create amazing identity by crafting top-notch digital solutions.",
      image: "https://picsum.photos/400",
    },
  ];

  return (
    <div
      id="about-section"
      className="bg-black [background:radial-gradient(125%_125%_at_50%_90%,#000_40%,#63e_70%)] p-5 pt-[5%] sm:pt-32 overflow-x-hidden"
    >
      <Paragraph value={text} specialWordsIndices={[1, 2, 9, 15]} />
      {data.map((item, index) => (
        <CTA key={index} {...item} />
      ))}
    </div>
  );
}

export default About;
