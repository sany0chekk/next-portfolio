"use client";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

// Типи пропсів для компонента
interface SequentialAnimationProps {
  children: ReactNode; // Дочірні елементи, які будуть анімовані
  delayStep?: number; // Крок затримки для кожного елемента
}

const SequentialAnimation: React.FC<SequentialAnimationProps> = ({
  children,
  delayStep = 0.2,
}) => {
  return (
    <>
      {React.Children.map(children, (child, index) =>
        child ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * delayStep,
              ease: "easeOut",
            }}
          >
            {child}
          </motion.div>
        ) : null
      )}
    </>
  );
};

export default SequentialAnimation;
