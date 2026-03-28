import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import bunnyWithCakeImg from "../../assets/ffe6662be1cd72dc091d7ad5efad39e2695b5237.png";
import cakeDecorationImg from "../../assets/98a610d94f60c6886026120085b31264063ccb54.png";
import bowImg from "../../assets/1ed381792c78641724ce10be0ae3dacf4a288b15.png";
import backgroundImg from "../../assets/070baf4219ed769b752fd959fa348ee1b76dd46a.png";

export default function Page3() {
  const navigate = useNavigate();

  // Auto-navigate to Page 4 after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/page4");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

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
      <div className="relative z-10 flex flex-col items-center justify-center gap-3">
        
        {/* Top Section - Rabbit sitting in Birthday Cake */}
        <div className="relative flex flex-col items-center">
          {/* Birthday Cake Decoration (base) */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img 
              src={cakeDecorationImg} 
              alt="" 
              className="w-[200px] h-auto object-contain"
            />
            
            {/* Bunny positioned above cake to look like sitting in it */}
            <motion.div
              className="absolute bottom-[50%] left-[45%] transform -translate-x-1/2 z-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                ease: "easeOut" 
              }}
            >
              <motion.img 
                src={bunnyWithCakeImg} 
                alt="Bunny with Cake" 
                className="w-[400px] h-auto object-contain"
                animate={{ 
                  y: [0, -8, 0] 
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Text Section */}
        <motion.h1 
          className="text-5xl text-center px-8"
          style={{
            color: "#8B2F47",
            fontFamily: "'Monotype Corsiva', cursive",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Yay! You got a birthday Jellyfish
        </motion.h1>

        {/* Bow Decoration (with gentle float) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <motion.img 
            src={bowImg} 
            alt="" 
            className="w-[100px] h-auto object-contain"
            animate={{ 
              y: [0, -5, 0],
              rotate: [0, 2, 0, -2, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}