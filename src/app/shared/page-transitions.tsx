"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
  initial: { opacity: 0, scale: 1.2, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)",
    transition: { duration: 0.5 },
  },
};

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className="relative overflow-x-hidden"
    >
      {children}
    </motion.div>
  );
}