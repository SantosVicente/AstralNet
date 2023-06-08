'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FixedHeader = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.header
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { backgroundColor: '#ffffff' },
        hidden: { backgroundColor: 'transparent' },
      }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
    >
      {/* Conteúdo do header */}
    </motion.header>
  );
};

export default FixedHeader;
