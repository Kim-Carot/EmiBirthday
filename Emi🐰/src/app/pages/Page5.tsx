import { motion } from "motion/react";
import happilyEverAfterImg from "../../assets/613f1bc299bb9eaefda4cd6b4154031d2e00ce95.png";
import disneylandTicketImg from "../../assets/029d708f170840ebb2c980fd28fa28cff7293bc9.png";
import bowImg from "../../assets/0427f54008c90f1422b528896eb442cb850eff55.png";
import backgroundImg from "../../assets/070baf4219ed769b752fd959fa348ee1b76dd46a.png";

export default function Page5() {
  return (
    <div className="relative w-full h-screen flex items-center justify-between overflow-hidden p-[30px]">
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

      {/* Left Side - Happily Ever After Frame */}
      <motion.div
        className="relative z-10 flex-shrink-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={happilyEverAfterImg}
          alt="Happily Ever After"
          className="w-[420px] h-auto object-contain"
        />
      </motion.div>

      {/* Right Side - Disneyland Ticket Section */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-2 flex-1 pr-8">

        {/* Disneyland Ticket with Animation */}
        <motion.div
          initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut"
          }}
        >
          <motion.img
            src={disneylandTicketImg}
            alt="Disneyland Ticket"
            className="w-[240px] h-auto object-contain"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 3, 0, -3, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Header - Disneyland ticket */}
        <motion.h1
          className="text-6xl text-center"
          style={{
            color: "#8B2F47",
            fontFamily: "'Monotype Corsiva', cursive",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Disneyland ticket
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-3xl text-center px-4"
          style={{
            color: "#8B2F47",
            fontFamily: "'Monotype Corsiva', cursive",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Chỉ có nước đi với tao thì mới dùng được thôi nhá
        </motion.p>

        {/* Bow Decoration with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.img
            src={bowImg}
            alt=""
            className="w-[120px] h-auto object-contain"
            animate={{
              y: [0, -6, 0],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}