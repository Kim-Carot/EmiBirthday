import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { useState } from "react";
import messageCardImg from "../../assets/86c5278a46366168b961337e250c6c59d2fce100.png";
// import decorativeFrameImg from "../../assets/d8bd4f84d8c2ba31f440036ca93c0acfb48315d0.png";
// import giftBoxImg from "../../assets/f90fb813c50fc075aa523dab2792c3c1a983a7ec.png";
// import foxImg from "../../assets/c3910ad88b5b6dc895a76c558a78b20f258482a1.png";
// import duckImg from "../../assets/c3741aa2d835a0195df8949508901ede2aa0837d.png";
// import mouseWithCupcakeImg from "../../assets/15d3ef0c361b74aa1ff746b6d6d13cc5906c3729.png";
// import miceCakeImg from "../../assets/7620b4145f1f0ea49ed35798f6156e54973008ea.png";
// import cupcakeStandImg from "../../assets/83a27e53121168ec13d3b7b24ad0fac3dc205184.png";
import backgroundImg from "../../assets/070baf4219ed769b752fd959fa348ee1b76dd46a.png";

export default function Page2() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleGiftClick = () => {
    navigate("/page3");
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

      {/* Main Content - Split Layout */}
      <div className="relative z-10 w-full h-full flex flex-row items-center justify-center">
        
        {/* LEFT SIDE - Message Card */}
        <div className="flex-shrink-0 flex items-center justify-center h-full">
          <img 
            src={messageCardImg} 
            alt="Message Card" 
            className="h-[85vh] w-auto object-contain"
          />
        </div>

        {/* RIGHT SIDE - Frame with Gift and Bottom Images */}
        {/* <div className="flex-1 flex flex-col items-center justify-between h-full py-8">
          
          {/* TOP - Pink Frame with "Open it!" and Gift */}
          <div className="relative w-[700px] h-[700px] flex items-center justify-center">
            <img 
              src={decorativeFrameImg} 
              alt="Decorative Frame" 
              className="absolute inset-0 w-full h-full object-contain"
            />
            
            {/* Centered Container for Text and Gift */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-0">
              {/* Gift Box with animation */}
              <motion.div
                className="cursor-pointer"
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
                onClick={handleGiftClick}
              >
                <motion.img
                  src={giftBoxImg}
                  alt=""
                  className="w-[135px] h-auto object-contain"
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

              {/* Open it! Text - Moved up by 20px */}
              <h2 
                className="text-5xl text-center whitespace-nowrap"
                style={{
                  color: "#8B6F5B",
                  fontFamily: "'Monotype Corsiva', cursive",
                  marginTop: "-30px",
                }}
              >
                Open it!
              </h2>
            </div>
          </div>

          {/* BOTTOM - 5 Animal Images in a Row */}
          <div className="flex items-center justify-center pb-4">
            <img src={foxImg} alt="Fox" className="w-24 h-24 object-contain" style={{ margin: "10px" }} />
            <img src={duckImg} alt="Duck" className="w-24 h-24 object-contain" style={{ margin: "10px" }} />
            <img src={mouseWithCupcakeImg} alt="Mouse with Cupcake" className="w-24 h-24 object-contain" style={{ margin: "10px" }} />
            <img src={miceCakeImg} alt="Mice with Cake" className="w-24 h-24 object-contain" style={{ margin: "10px" }} />
            <img src={cupcakeStandImg} alt="Cupcake Stand" className="w-24 h-24 object-contain" style={{ margin: "10px" }} />
          </div>
        </div>
      </div> */}
    </div>
  );
}
