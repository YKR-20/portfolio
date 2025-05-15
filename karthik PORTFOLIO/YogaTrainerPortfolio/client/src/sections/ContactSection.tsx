import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default"
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-[#0DF0FF]" />,
      title: "Email",
      value: "yogakarthikraj@example.com",
      link: "mailto:yogakarthikraj@example.com",
      desc: "Feel free to email me anytime",
      color: "text-[#0DF0FF]"
    },
    {
      icon: <Phone className="text-[#FF2DB6]" />,
      title: "Phone",
      value: "+91 98765 43210",
      link: "tel:+91987654321",
      desc: "Monday to Friday, 9AM to 6PM",
      color: "text-[#FF2DB6]"
    },
    {
      icon: <MapPin className="text-[#6EFF41]" />,
      title: "Location",
      value: "Tamil Nadu, India",
      link: "#",
      desc: "Available for online training globally",
      color: "text-[#6EFF41]"
    }
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, color: "text-[#0DF0FF] hover:bg-[#0DF0FF]" },
    { icon: <Youtube size={20} />, color: "text-[#FF2DB6] hover:bg-[#FF2DB6]" },
    { icon: <Linkedin size={20} />, color: "text-[#6EFF41] hover:bg-[#6EFF41]" },
    { icon: <Twitter size={20} />, color: "text-[#0DF0FF] hover:bg-[#0DF0FF]" }
  ];

  return (
    <section 
      id="contact" 
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
            <span className="text-white">Get In </span>
            <span className="text-[#0DF0FF] text-shadow-cyan">Touch</span>
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-[#0DF0FF] mx-auto"
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
            Have a project in mind or want to connect for gaming? Feel free to reach out through any of the channels below.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              Contact <span className="text-[#FF2DB6]">Info</span>
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#2A2A2A] flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{info.title}</h4>
                    <a 
                      href={info.link} 
                      className={`text-gray-400 hover:${info.color} transition-colors`}
                    >
                      {info.value}
                    </a>
                    <p className="text-gray-500 text-sm mt-1">{info.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h4 className="text-xl font-bold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className={`w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center ${social.color} hover:text-[#121212] transition-colors`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              Send a <span className="text-[#6EFF41]">Message</span>
            </h3>
            
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-3 bg-[#2A2A2A] border border-[#3D3D3D] rounded-md focus:outline-none focus:border-[#0DF0FF] text-white"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 bg-[#2A2A2A] border border-[#3D3D3D] rounded-md focus:outline-none focus:border-[#0DF0FF] text-white"
                  placeholder="Your Email" 
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  className="w-full px-4 py-3 bg-[#2A2A2A] border border-[#3D3D3D] rounded-md focus:outline-none focus:border-[#0DF0FF] text-white"
                  placeholder="Subject" 
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea 
                  id="message"
                  rows={5} 
                  className="w-full px-4 py-3 bg-[#2A2A2A] border border-[#3D3D3D] rounded-md focus:outline-none focus:border-[#0DF0FF] text-white resize-none"
                  placeholder="Your Message" 
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 rounded-md bg-[#0DF0FF] text-[#121212] font-bold transition-all hover:bg-transparent hover:text-[#0DF0FF] border-2 border-[#0DF0FF] flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  <i className="fas fa-paper-plane mr-2"></i> 
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
