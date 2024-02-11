import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  return (
    <div className="py-[10vh]">
      <h1 className="text-[6.11111111vw] font-bold">Projects</h1>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-63%"]);

  return (
    <section ref={targetRef} className="relative h-[600vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <a href={card.demo}>
      <div
        key={card.id}
        className="group relative h-[80vh] w-[66vw] bg-neutral-200"
      >
        <div className="relative h-[75vh] w-[66vw] overflow-hidden">
          <div
            style={{
              backgroundImage: `url(${card.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
          ></div>
        </div>
        <div className="w-full absolute bottom-[-4vw] left-0 flex justify-between z-1 items-center">
          <h2 className="text-[5vw] flex hover:border-b-black">
            <span>{card.title}</span> <span className="-rotate-45">&rarr;</span>
          </h2>
          <h3 className="text-[2vw]">{card.link}</h3>
        </div>
      </div>
    </a>
  );
};

export default Projects;

const cards = [
  {
    url: "https://picsum.photos/200",
    title: "Title 1",
    link: "lorem ipsum",
    demo: "#",
    id: 1,
  },
  {
    url: "https://picsum.photos/300",
    title: "Title 2",
    link: "lorem ipsum",
    demo: "#",
    id: 2,
  },
  {
    url: "https://picsum.photos/400",
    title: "Title 3",
    link: "lorem ipsum",
    demo: "#",
    id: 3,
  },
  {
    url: "https://picsum.photos/500",
    title: "Title 4",
    link: "lorem ipsum",
    demo: "#",
    id: 4,
  },
];
