import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  containerClassName?: string;
}

const ParallaxSection = ({
  children,
  speed = 0.5,
  className = "",
  containerClassName = "",
}: ParallaxSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);

  return (
    <div ref={ref} className={containerClassName}>
      <motion.div style={{ y }} className={className}>
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;
