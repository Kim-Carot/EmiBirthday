import { useNavigate } from "react-router-dom";
import { useState } from "react";
import messageCardImg from "../../assets/86c5278a46366168b961337e250c6c59d2fce100.png";
import backgroundImg from "../../assets/070baf4219ed769b752fd959fa348ee1b76dd46a.png";

export default function Page2() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleGiftClick = () => {
    navigate("/page3");
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      />
      <div className="absolute inset-0 bg-white/50" />

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        
        <div className="flex flex-col items-center justify-center">
          
          {/* Letter Image */}
          <img
            src={messageCardImg}
            alt="Message Card"
            className="h-[85vh] w-auto object-contain"
          />

          {/* Arrow Button */}
          <button
            onClick={handleGiftClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="mt-6 w-12 h-12 rounded-full bg-white/70 backdrop-blur flex items-center justify-center shadow-md hover:shadow-lg transition"
          >
            <span
              className={`text-xl transition-transform duration-300 ${
                isHovered ? "translate-x-2" : ""
              }`}
            >
              →
            </span>
          </button>

        </div>
      </div>
    </div>
  );
}
