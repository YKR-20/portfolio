import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed w-full h-full top-0 left-0 flex flex-col justify-center items-center bg-[#121212] z-[9999]">
      <motion.div
        className="w-24 h-24 rounded-full border-5 border-transparent border-t-[#0DF0FF] border-b-[#FF2DB6]"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="text-[#0DF0FF] text-shadow-cyan text-2xl font-bold font-[Rajdhani] tracking-wider mt-6 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        LOADING...
      </motion.div>
      <motion.div
        className="text-white font-[Rajdhani] text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Initializing the gaming experience
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
