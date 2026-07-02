import { motion } from "framer-motion";

interface FloatingElementsProps {
  count?: number;
  size?: "sm" | "md" | "lg";
  colors?: string[];
  className?: string;
}

const FloatingElements = ({
  count = 5,
  size = "md",
  colors = [
    "bg-blue-400/20",
    "bg-purple-400/20",
    "bg-cyan-400/20",
    "bg-pink-400/20",
  ],
  className = "",
}: FloatingElementsProps) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  const elements = Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: i * 2,
    duration: 15 + i * 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: 0.5 + Math.random() * 0.5,
    color: colors[i % colors.length],
  }));

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute rounded-full blur-xl ${sizeClasses[size]} ${element.color}`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -25, 15, -10, 0],
            scale: [
              element.scale,
              element.scale * 1.2,
              element.scale * 0.8,
              element.scale,
            ],
            opacity: [0.3, 0.6, 0.4, 0.3],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
