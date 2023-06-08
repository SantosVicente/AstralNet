'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
}

const ScrollAnimation = ({
  children,
  delay = 0,
  duration = 0.7,
  y = 100,
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
      initial={{ opacity: 0, y: y}}
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: y },
      }}
      transition={{ duration: duration, delay: delay, ease: [0, 0.57, 0.51, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
