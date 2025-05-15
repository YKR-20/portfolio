import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Play, Image } from "lucide-react";

const GallerySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const galleryItems = [
    {
      title: "Gaming Montage",
      subtitle: "Free Fire Highlights",
      category: "video",
      icon: <Play className="text-[#121212]" />,
      iconBg: "bg-[#FF2DB6]",
      image: "https://images.unsplash.com/photo-1574717024453-354056adc766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Tally Prime Tutorial",
      subtitle: "Software Training",
      category: "video",
      icon: <Play className="text-[#121212]" />,
      iconBg: "bg-[#0DF0FF]",
      image: "https://images.unsplash.com/photo-1598550473864-52c2ea8fbda0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "My Gaming Setup",
      subtitle: "Battle Station",
      category: "gaming",
      icon: <Image className="text-[#121212]" />,
      iconBg: "bg-[#6EFF41]",
      image: "https://images.unsplash.com/photo-1542751371-6533a527fe9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Motion Graphics",
      subtitle: "Learning Project",
      category: "video",
      icon: <Play className="text-[#121212]" />,
      iconBg: "bg-[#FF2DB6]",
      image: "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Tournament Day",
      subtitle: "Free Fire Competition",
      category: "gaming",
      icon: <Image className="text-[#121212]" />,
      iconBg: "bg-[#6EFF41]",
      image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Editing Workspace",
      subtitle: "Behind the Scenes",
      category: "video",
      icon: <Play className="text-[#121212]" />,
      iconBg: "bg-[#0DF0FF]",
      image: "https://images.unsplash.com/photo-1620674156044-5f7f71d6f098?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section 
      id="gallery" 
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
            <span className="text-[#FF2DB6] text-shadow-pink">Gallery</span>
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-[#FF2DB6] mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-gray-300 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Showcasing my video editing projects and gaming highlights. I'm always learning and expanding my creative skills.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-[#2A2A2A] rounded-lg overflow-hidden group relative hover:transform hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <img 
                src={item.image}
                alt={item.title} 
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center">
                <div className="text-center p-4 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className={`w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center mb-3 mx-auto`}>
                    {item.icon}
                  </div>
                  <h4 className="text-white font-bold">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a 
            href="#contact"
            className="px-8 py-3 rounded-md bg-transparent text-[#FF2DB6] font-bold transition-all hover:bg-[#FF2DB6] hover:text-[#121212] border-2 border-[#FF2DB6] inline-flex items-center"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById("contact");
              if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <i className="fas fa-images mr-2"></i> View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
