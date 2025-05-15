import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Particles from "@/components/Particles";
import { ChevronDown } from "lucide-react";

const phrases = [
  "Software Trainer",
  "Free Fire Gamer",
  "Video Editor",
  "Tech Enthusiast"
];

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeedRef = useRef(100);
  const timerRef = useRef<number | null>(null);

  const typeText = () => {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      setTypedText(currentPhrase.substring(0, charIndex - 1));
      setCharIndex(prev => prev - 1);
      typingSpeedRef.current = 50;
    } else {
      setTypedText(currentPhrase.substring(0, charIndex + 1));
      setCharIndex(prev => prev + 1);
      typingSpeedRef.current = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      setIsDeleting(true);
      typingSpeedRef.current = 1000; // Pause at end of phrase
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      typingSpeedRef.current = 500; // Pause before typing next phrase
    }
  };

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(typeText, typingSpeedRef.current);
    
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [typedText, charIndex, isDeleting, phraseIndex]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <Particles />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="mb-8 flex items-center justify-center w-32 h-32 rounded-full bg-[#2A2A2A] border-4 border-[#0DF0FF]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <span className="text-4xl">YK</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-white">Hi, I'm </span>
            <span className="text-[#0DF0FF] text-shadow-cyan">Yogakarthikraj</span>
          </motion.h1>
          
          <motion.div 
            className="text-2xl md:text-3xl text-white mb-8 font-[Rajdhani] tracking-wide"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span>{typedText}</span>
            <span className="text-[#FF2DB6] animate-pulse">|</span>
          </motion.div>
          
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            {[
              { 
                text: "Software Trainer", 
                icon: "laptop-code", 
                color: "#0DF0FF", 
                delay: 0.6 
              },
              { 
                text: "Free Fire Gamer", 
                icon: "gamepad", 
                color: "#FF2DB6", 
                delay: 0.7 
              },
              { 
                text: "Video Editor", 
                icon: "video", 
                color: "#6EFF41", 
                delay: 0.8 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className={`bg-[#2A2A2A] px-4 py-2 rounded-lg border border-[${item.color}]`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: item.delay, duration: 0.5 }}
              >
                <i className={`fas fa-${item.icon} text-[${item.color}] mr-2`}></i>
                <span className="text-white">{item.text}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="flex gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a 
              href="#about" 
              className="px-8 py-3 rounded-md bg-[#0DF0FF] text-[#121212] font-bold transition-all hover:bg-transparent hover:text-[#0DF0FF] border-2 border-[#0DF0FF] shadow-neon-cyan"
              onClick={(e) => {
                e.preventDefault();
                scrollToAbout();
              }}
            >
              About Me
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-md bg-transparent text-[#FF2DB6] font-bold transition-all hover:bg-[#FF2DB6] hover:text-[#121212] border-2 border-[#FF2DB6]"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById("contact");
                if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <a 
          href="#about" 
          className="text-white text-4xl"
          onClick={(e) => {
            e.preventDefault();
            scrollToAbout();
          }}
        >
          <ChevronDown size={36} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
