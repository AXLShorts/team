import { useRef } from "react";
import React from "react";
import { motion, useInView } from "framer-motion";

function CTA({ direction, title, text, image }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "100% 0px 0px 0px" });

  return (
    <motion.div
      className={`flex-col justify-center items-center gap-5 sm:gap-10 p-5 sm:p-10 ${
        direction ? "sm:flex sm:flex-row-reverse" : "sm:flex sm:flex-row"
      }`}
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s ease-out",
      }}
    >
      <motion.div
        className={`w-full sm:w-2/5 flex flex-col gap-4 ${
          direction ? "sm:text-right" : "sm:text-left"
        }`}
      >
        <h2 className="font-bold text-4xl">{title}</h2>
        <p className="text-lg">{text}</p>
      </motion.div>
      <motion.div className="w-full sm:w-2/5">
        <img src={image} alt="" className="h-[40vh] w-[100vw]" />
      </motion.div>
    </motion.div>
  );
}

export default CTA;
