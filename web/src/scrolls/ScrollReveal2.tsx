'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
}

const ScrollAnimationX = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 100,
}: ScrollAnimationProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: x}}
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: x },
      }}
      transition={{ duration: duration, delay: delay, ease: [0, 0.57, 0.51, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationX;
