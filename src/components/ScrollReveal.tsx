import React from "react";
import { motion } from "framer-motion";

type Animation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "none";

type Props = {
  as?: keyof JSX.IntrinsicElements;
  animation?: Animation;
  delay?: number; // ms
  duration?: number; // seconds
  once?: boolean;
  threshold?: number; // 0-1
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const variantsMap: Record<Animation, any> = {
  "fade-up": { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } },
  "fade-down": { hidden: { opacity: 0, y: -18 }, visible: { opacity: 1, y: 0 } },
  "fade-left": { hidden: { opacity: 0, x: -18 }, visible: { opacity: 1, x: 0 } },
  "fade-right": { hidden: { opacity: 0, x: 18 }, visible: { opacity: 1, x: 0 } },
  "zoom-in": { hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } },
  none: { hidden: { opacity: 1 }, visible: { opacity: 1 } },
};

export default function ScrollReveal({
  as = "div",
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.12,
  className = "",
  style,
  children,
  ...rest
}: Props) {
  const Component: any = (motion as any)[as] || motion.div;
  const variants = variantsMap[animation] || variantsMap["fade-up"];

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={variants}
      transition={{ duration, delay: delay / 1000, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  );
}
