import {motion, useAnimation, useInView} from 'framer-motion';
import {PropsWithChildren, useEffect, useRef} from 'react';

const animations = {
  scale: {
    visible: {opacity: 1, scale: 1, transition: {duration: 0.5}},
    hidden: {opacity: 0, scale: 0},
  },
  'from-bottom': {
    visible: {
      opacity: 1,
      transform: 'translateY(0)',
      transition: {duration: 0.5},
    },
    hidden: {opacity: 0, transform: 'translateY(3em)'},
  },
  'from-top': {
    visible: {
      opacity: 1,
      transform: 'translateY(0)',
      transition: {duration: 0.5},
    },
    hidden: {opacity: 0, transform: 'translateY(-3em)'},
  },
  'from-left': {
    visible: {
      opacity: 1,
      transform: 'translateX(0)',
      transition: {duration: 0.5},
    },
    hidden: {opacity: 0, transform: 'translateX(-3em)'},
  },
};

interface AnimatedViewProps {
  animation: 'scale' | 'from-bottom' | 'from-top' | 'from-left';
}

export default function AnimatedView({
  children,
  animation,
}: PropsWithChildren<AnimatedViewProps>) {
  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={animations[animation]}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
}
