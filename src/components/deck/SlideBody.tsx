import React from "react";
import { motion } from "framer-motion";
import classnames from "classnames";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

interface Props {
  className?: string;
  children?: React.ReactNode;
  header?: React.ReactNode;
  centered?: boolean;
  steps?: React.ReactNode[];
}

export function SlideBody({ className, children, header, centered }: Props) {
  return (
    <motion.div
      className="h-full flex flex-col"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {header}
      <div
        className={classnames(
          "flex-1",
          centered && "flex flex-col items-center justify-center",
          className
        )}
      >
        {children}
      </div>
    </motion.div>
  );
}
