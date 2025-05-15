import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Laptop, Gamepad } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative min-h-screen bg-[#121212] py-20"
    >
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#121212] to-transparent"></div>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white">About </span>
            <span className="text-[#0DF0FF] text-shadow-cyan">Me</span>
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-[#0DF0FF] mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="rounded-xl overflow-hidden border-2 border-[#0DF0FF] shadow-neon-cyan"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Tech workspace setup" 
              className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          
          <div>
            <motion.h3 
              className="text-3xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Who am I?
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Hey there! I'm <span className="text-[#0DF0FF] font-semibold">Yogakarthikraj</span>, a 21-year-old Software Trainer with a passion for technology and gaming. With an MCA degree under my belt, I specialize in training others in software applications while pursuing my own creative interests.
            </motion.p>
            
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <GraduationCap className="text-[#0DF0FF]" />,
                  title: "Education",
                  desc: "Master of Computer Applications (MCA)",
                  delay: 0.6
                },
                {
                  icon: <Laptop className="text-[#FF2DB6]" />,
                  title: "Profession",
                  desc: "Software Trainer specializing in Tally Prime",
                  delay: 0.7
                },
                {
                  icon: <Gamepad className="text-[#6EFF41]" />,
                  title: "Passion",
                  desc: "Free Fire Gaming & Video Editing",
                  delay: 0.8
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="flex items-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: item.delay }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <a 
                href="#skills" 
                className="px-6 py-2 rounded-md bg-[#2A2A2A] text-[#0DF0FF] border border-[#0DF0FF] hover:bg-[#0DF0FF] hover:text-[#121212] transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('skills');
                }}
              >
                <i className="fas fa-code mr-2"></i> My Skills
              </a>
              <a 
                href="#gaming" 
                className="px-6 py-2 rounded-md bg-[#2A2A2A] text-[#FF2DB6] border border-[#FF2DB6] hover:bg-[#FF2DB6] hover:text-[#121212] transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('gaming');
                }}
              >
                <i className="fas fa-gamepad mr-2"></i> Gaming Profile
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
