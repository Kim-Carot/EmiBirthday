import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import backgroundImg from "../../assets/7d89cc381573e9c55e3bbf07923f668877ba1810.png";
import ovalFrameImg from "../../assets/5c5a2d8810df1754da8f224ebe7554e0f9313f8e.png";
import letterImg from "../../assets/7be1cb07a69c0f57683a0521228d2013c1ba2ce9.png";

export default function Page1() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleLetterClick = () => {
    navigate("/page2");
  };

  return (
    <div 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with 50% opacity */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
        }}
      />

      {/* Container for the oval frame and content */}
      <div className="relative flex items-center justify-center w-full max-w-[90vw] max-h-[90vh] z-10">
        {/* Pink Oval Frame */}
        <img 
          src={ovalFrameImg} 
          alt="Frame" 
          className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] h-auto object-contain"
        />
        
        {/* Text positioned in the upper half of the oval */}
        <div className="absolute top-[32%] left-1/2 transform -translate-x-1/2 text-center w-full px-4">
          <h1 
            className="text-xl sm:text-2xl md:text-3xl leading-tight"
            style={{ 
              color: "#8B2F39",
              fontFamily: "'Monotype Corsiva', cursive",
              fontStyle: "italic",
              fontWeight: "normal",
            }}
          >
            Happy 20th
          </h1>
          <h2 
            className="text-xl sm:text-2xl md:text-3xl leading-tight"
            style={{ 
              color: "#8B2F39",
              fontFamily: "'Monotype Corsiva', cursive",
              fontStyle: "italic",
              fontWeight: "normal",
            }}
          >
            birthday
          </h2>
        </div>

        {/* Letter Icon positioned in the center of the oval with animations */}
        <motion.div
          className="absolute top-[62%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          style={{
            filter: "drop-shadow(0 8px 12px rgba(0, 0, 0, 0.25))",
          }}
          animate={isHovered ? {} : { y: [0, -10, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={handleLetterClick}
        >
          <motion.img
            src={letterImg}
            alt=""
            className="w-[80px] sm:w-[100px] md:w-[120px] h-auto object-contain"
            animate={
              isHovered
                ? {
                    scale: [1, 1.15, 1],
                    rotate: [0, -8, 8, -8, 0],
                  }
                : {}
            }
            transition={{
              duration: 0.6,
              repeat: isHovered ? Infinity : 0,
              repeatType: "loop",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}