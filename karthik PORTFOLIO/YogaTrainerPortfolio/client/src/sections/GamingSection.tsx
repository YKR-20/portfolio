import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Gamepad } from "lucide-react";

const GamingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    { value: "1250+", label: "Total Kills", color: "border-[#FF2DB6]", textColor: "text-[#FF2DB6]" },
    { value: "Diamond", label: "Current Rank", color: "border-[#0DF0FF]", textColor: "text-[#0DF0FF]" },
    { value: "87", label: "Booyahs", color: "border-[#6EFF41]", textColor: "text-[#6EFF41]" },
    { value: "2.5", label: "K/D Ratio", color: "border-[#FF2DB6]", textColor: "text-[#FF2DB6]" }
  ];

  const loadouts = [
    { name: "M249", color: "text-[#6EFF41] border-[#6EFF41]/30" },
    { name: "MP40", color: "text-[#0DF0FF] border-[#0DF0FF]/30" },
    { name: "Sniper", color: "text-[#FF2DB6] border-[#FF2DB6]/30" },
    { name: "Treatment Gun", color: "text-[#6EFF41] border-[#6EFF41]/30" }
  ];

  const highlights = [
    {
      title: "Epic 1v4 Clutch",
      desc: "Managed to eliminate an entire squad in the final circle with just a pistol.",
      tag: "Squad Wipe",
      tagColor: "bg-[#FF2DB6]",
      date: "2 weeks ago",
      achievement: "4 kills",
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Diamond Rank Achievement",
      desc: "Finally reached Diamond rank after a 5-hour continuous gameplay session.",
      tag: "Rank Push",
      tagColor: "bg-[#0DF0FF]",
      date: "1 month ago",
      achievement: "Promotion",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Local Tournament Win",
      desc: "Led my squad to victory in a local Free Fire competition against 15 teams.",
      tag: "Tournament",
      tagColor: "bg-[#6EFF41]",
      date: "3 months ago",
      achievement: "1st Place",
      image: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section 
      id="gaming" 
      ref={sectionRef}
      className="relative min-h-screen bg-[#121212] py-20"
    >
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0A0A0A] to-transparent"></div>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white">Gaming </span>
            <span className="text-[#6EFF41] text-shadow-green">Zone</span>
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-[#6EFF41] mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              My <span className="text-[#FF2DB6]">Free Fire</span> Journey
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Free Fire is more than just a game to me—it's a passion that combines strategy, quick reflexes, and teamwork. I've been actively playing and improving my skills, aiming to reach the top ranks in the game.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className={`bg-[#2A2A2A] p-4 rounded-lg border ${stat.color} text-center`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className={`${stat.textColor} text-3xl font-bold mb-1 font-[Rajdhani]`}>{stat.value}</div>
                  <div className="text-white text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="p-5 bg-[#2A2A2A] rounded-lg border border-[#6EFF41] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h4 className="text-xl font-bold text-white mb-3">Preferred Loadout</h4>
              <div className="flex flex-wrap gap-3">
                {loadouts.map((loadout, index) => (
                  <span 
                    key={index} 
                    className={`px-3 py-1 bg-[#0A0A0A] rounded-full ${loadout.color} border`}
                  >
                    {loadout.name}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.a 
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-[#6EFF41] text-[#121212] font-bold transition-all hover:bg-transparent hover:text-[#6EFF41] border-2 border-[#6EFF41]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById("contact");
                if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Gamepad className="mr-2" /> Connect For Gaming
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 rounded-xl overflow-hidden border-2 border-[#6EFF41] shadow-neon-green"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Gaming setup with neon lights" 
              className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
        
        <div className="mt-20">
          <motion.h3 
            className="text-3xl font-bold mb-8 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <span className="text-[#0DF0FF]">Gaming </span>Highlights
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div 
                key={index}
                className="bg-[#2A2A2A] rounded-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
              >
                <div className="h-48 bg-gray-800 relative">
                  <img 
                    src={highlight.image}
                    alt={highlight.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-80"></div>
                  <div className={`absolute bottom-3 left-3 ${highlight.tagColor} text-[#121212] px-2 py-1 rounded-md text-sm font-bold`}>
                    {highlight.tag}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-white font-bold mb-2">{highlight.title}</h4>
                  <p className="text-gray-400 text-sm mb-3">{highlight.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#0DF0FF] text-sm">
                      <i className="fas fa-calendar-alt mr-1"></i> {highlight.date}
                    </span>
                    <span className="text-[#6EFF41] text-sm">
                      <i className="fas fa-trophy mr-1"></i> {highlight.achievement}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingSection;
