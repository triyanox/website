import { Children, ReactNode, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimationList = {
  fadeIn: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
  fadeInUp: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  },
  fadeInDown: {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  },
  fadeInLeft: {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  },
  fadeInRight: {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  },
  scaleUp: {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transformOrigin: "bottom center",
      transition: {
        duration: 0.5,
      },
    },
  },
  scaleIn: {
    hidden: {
      scale: 0,
      y: 60,
      transformOrigin: "bottom center",
    },
    visible: {
      scale: 1,
      y: 0,
      transformOrigin: "bottom center",
      transition: {
        duration: 0.5,
      },
    },
  },
  fadeInWithExit: {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  },
};

type ContainerProps = {
  children: JSX.Element[];
  className?: string;
};

type ItemProps = {
  children: ReactNode;
  className?: string;
  variant: keyof typeof AnimationList;
};

const StaggerContainer = ({ children, className }: ContainerProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          transition: {
            staggerChildren: 0.1,
            duration: 0.5,
          },
        },
        visible: {
          transition: {
            staggerChildren: 0.1,
            duration: 0.5,
          },
        },
      }}
    >
      {Children.map(children, (child, i) => (
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

const StaggerContainerWithObserver = ({
  children,
  className,
}: ContainerProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    return () => {
      controls.stop();
    };
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          transition: {
            staggerChildren: 0.1,
            duration: 0.5,
          },
        },
        visible: {
          transition: {
            staggerChildren: 0.1,
            duration: 0.5,
          },
        },
      }}
    >
      {Children.map(children, (child, i) => (
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

const AnimateItem = ({ children, className, variant }: ItemProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    return () => {
      controls.stop();
    };
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={AnimationList[variant]}
      initial="hidden"
      animate={controls}
      exit="hidden"
      className={className}
    >
      {children}
    </motion.div>
  );
};

const PresenceContainer = ({ children, className }: ContainerProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: {
          transition: {
            staggerChildren: 0.1,
            duration: 0.5,
          },
        },
        visible: {
          transition: {
            staggerChildren: 0.1,
            duration: 0.5,
          },
        },
      }}
    >
      <AnimatePresence mode="wait" presenceAffectsLayout>
        {children}
      </AnimatePresence>
    </motion.div>
  );
};

const PresenceItem = ({ children, className, variant }: ItemProps) => {
  return (
    <motion.div
      variants={AnimationList[variant]}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Animations = {
  StaggerContainer,
  AnimateItem,
  PresenceContainer,
  PresenceItem,
  StaggerContainerWithObserver,
};

export default Animations;
