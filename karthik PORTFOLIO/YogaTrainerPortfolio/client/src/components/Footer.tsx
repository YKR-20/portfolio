const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <a 
              href="#home" 
              className="text-2xl font-bold"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              <span className="text-[#0DF0FF] text-shadow-cyan">YOGA</span>
              <span className="text-[#FF2DB6] text-shadow-pink">KARTHIK</span>
              <span className="text-[#6EFF41] text-shadow-green">RAJ</span>
            </a>
            <p className="text-gray-400 mt-2">Software Trainer & Gaming Enthusiast</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Yogakarthikraj. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-1">
              Designed with <span className="text-[#FF2DB6]">❤</span> and code
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
