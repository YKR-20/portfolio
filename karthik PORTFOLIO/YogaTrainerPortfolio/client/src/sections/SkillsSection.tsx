import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Presentation, Video, Mic } from "lucide-react";

interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
  isInView: boolean;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, color, isInView, delay = 0 }) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{name}</span>
        <span className={`text-[${color}]`}>{percentage}%</span>
      </div>
      <div className="h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
        <motion.div 
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: delay, ease: "easeOut" }}
          style={{
            backgroundImage: color,
            position: "relative",
          }}
        >
          <div 
            className="absolute top-0 left-0 right-0 bottom-0"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
              animation: "skill-shine 2s infinite linear"
            }}
          ></div>
        </motion.div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const professionalSkills = [
    { name: "Tally Prime", percentage: 90, color: "from-[#0DF0FF] to-[#FF2DB6]" },
    { name: "Public Speaking", percentage: 85, color: "from-[#0DF0FF] to-[#FF2DB6]" },
    { name: "Video Editing", percentage: 60, color: "from-[#0DF0FF] to-[#FF2DB6]" },
    { name: "Software Training", percentage: 95, color: "from-[#0DF0FF] to-[#FF2DB6]" }
  ];

  const gamingSkills = [
    { name: "Free Fire Proficiency", percentage: 88, color: "from-[#6EFF41] to-[#0DF0FF]" },
    { name: "Tactical Gameplay", percentage: 92, color: "from-[#6EFF41] to-[#0DF0FF]" },
    { name: "Team Coordination", percentage: 80, color: "from-[#6EFF41] to-[#0DF0FF]" },
    { name: "Quick Reflexes", percentage: 85, color: "from-[#6EFF41] to-[#0DF0FF]" }
  ];

  const serviceCards = [
    {
      icon: <Presentation className="h-8 w-8 text-[#0DF0FF]" />,
      title: "Software Training",
      description: "Specialized in teaching Tally Prime and other software applications with a focus on practical implementation.",
      color: "border-[#0DF0FF]"
    },
    {
      icon: <Video className="h-8 w-8 text-[#FF2DB6]" />,
      title: "Video Editing",
      description: "Currently learning and developing skills in video editing to create engaging content for various platforms.",
      color: "border-[#FF2DB6]"
    },
    {
      icon: <Mic className="h-8 w-8 text-[#6EFF41]" />,
      title: "Public Speaking",
      description: "Strong communication skills for effective training, presentations, and engaging with audiences.",
      color: "border-[#6EFF41]"
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="relative min-h-screen bg-[#0A0A0A] py-20"
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
            <span className="text-white">My </span>
            <span className="text-[#FF2DB6] text-shadow-pink">Skills</span>
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-[#FF2DB6] mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              Professional <span className="text-[#0DF0FF]">Skills</span>
            </h3>
            
            <div className="space-y-6">
              {professionalSkills.map((skill, index) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                  isInView={hasAnimated}
                  delay={0.4 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              Gaming <span className="text-[#6EFF41]">Skills</span>
            </h3>
            
            <div className="space-y-6">
              {gamingSkills.map((skill, index) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                  isInView={hasAnimated}
                  delay={0.6 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.map((card, index) => (
            <motion.div 
              key={index}
              className={`bg-[#2A2A2A] p-6 rounded-xl border ${card.color} hover:transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <div className="w-16 h-16 bg-[#0A0A0A]/50 rounded-full flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{card.title}</h4>
              <p className="text-gray-300">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
