import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import backgroundImg from "../../assets/070baf4219ed769b752fd959fa348ee1b76dd46a.png";
import frameWithRoseImg from "../../assets/84d1c3ae78b9b27a2eb57010d6a49a0cbc36e46d.png";

export default function Page4() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleOpenClick = () => {
    navigate("/page5");
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
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

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Vintage Frame with Rose and Text - Smaller Size */}
        <div className="relative w-full max-w-[450px] flex items-center justify-center">
          <img 
            src={frameWithRoseImg} 
            alt="Decorative Frame" 
            className="w-full h-auto object-contain cursor-pointer"
            onClick={() => navigate("/page3")}
          />
          
          {/* Open Button positioned inside the frame */}
          <motion.button
            onClick={handleOpenClick}
            className="absolute px-6 py-2 text-2xl rounded-full"
            style={{
              backgroundColor: isHovered ? "#A85365" : "#8B2F47",
              color: "#FFFFFF",
              fontFamily: "'Monotype Corsiva', cursive",
              border: "none",
              cursor: "pointer",
              top: "60%",
              boxShadow: isHovered 
                ? "0 8px 16px rgba(139, 47, 71, 0.4)" 
                : "0 4px 8px rgba(139, 47, 71, 0.3)",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ 
              scale: 1.1,
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 10 
            }}
          >
            Open
          </motion.button>
        </div>
      </div>
    </div>
  );
}