import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const BounceEffect = ({ children, delay = 0, speed = 1 }) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { triggerOnce: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
    }
  }, [isInview]);

  return (
    <div ref={ref} style={{ position: "relative", display: "flex" }}>
      <motion.div
        variants={{
          hidden: { y: -1000 },
          visible: { y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: speed, type: "spring", damping: 10, stiffness: 100, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
