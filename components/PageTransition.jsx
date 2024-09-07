import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const MatrixEffect = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 13;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0'; // Green color
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const interval = setInterval(draw, 8);

    return () => clearInterval(interval);
  }, []);

  return <canvas id="matrix" className="matrix"></canvas>;
};

const MatrixTransition = ({ children }) => {
  const [isTransitionComplete, setIsTransitionComplete] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Reset the transition state whenever the pathname changes
    setIsTransitionComplete(false);
  }, [pathname]);

  return (
    <>
      {!isTransitionComplete && (
        <motion.div
          className="fixed inset-0 h-full w-full bg-black z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
          onAnimationComplete={() => setIsTransitionComplete(true)}
        >
          <MatrixEffect />
        </motion.div>
      )}

      {isTransitionComplete && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </>
  );
};

export default MatrixTransition;
