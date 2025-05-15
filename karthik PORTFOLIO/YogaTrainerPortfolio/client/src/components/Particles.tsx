import { useEffect, useRef } from "react";

interface ParticlesProps {
  count?: number;
  colors?: string[];
}

const Particles: React.FC<ParticlesProps> = ({ 
  count = 25, 
  colors = ["#0DF0FF", "#FF2DB6", "#6EFF41"] 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any existing particles
    container.innerHTML = '';

    // Create particles
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('span');
      
      // Random size between 2px and 7px
      const size = Math.random() * 5 + 2;
      
      // Random position
      const posX = Math.random() * 100;
      
      // Random animation delay and duration
      const delay = Math.random() * 10;
      const duration = Math.random() * 10 + 10;
      
      // Cycle through colors
      const color = colors[i % colors.length];
      
      // Set styles
      particle.style.position = 'absolute';
      particle.style.display = 'block';
      particle.style.borderRadius = '50%';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}vw`;
      particle.style.bottom = '-20px';
      particle.style.backgroundColor = color;
      particle.style.animation = `float ${duration}s linear infinite`;
      particle.style.animationDelay = `${delay}s`;
      
      container.appendChild(particle);
    }

    // Define the float animation if it doesn't exist
    if (!document.getElementById('particle-animation')) {
      const style = document.createElement('style');
      style.id = 'particle-animation';
      style.textContent = `
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-800px) translateX(100px);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    // Cleanup
    return () => {
      if (document.getElementById('particle-animation')) {
        document.getElementById('particle-animation')?.remove();
      }
    };
  }, [count, colors]);

  return (
    <div
      ref={containerRef}
      className="particles absolute top-0 left-0 w-full h-full overflow-hidden z-0"
    />
  );
};

export default Particles;
