import React from "react";

// Import your logos from assets
import ChatGPTImage from "../assets/ChatGPT_Image_Oct_4__2025_at_06_34_39_PM-removebg-preview.png";


// Put all actual image imports here
const logos: string[] = [
  ChatGPTImage,
  //,
  //,
  //,
];

export default function LogoSlider() {
  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="mb-8 text-center">
        <h3 className="text-xl md:text-2xl font-light text-gold-400 tracking-widest uppercase opacity-80">
          Partners & Collaborators
        </h3>
      </div>

      <div className="w-full">
        <div
          className="slider-motion whitespace-nowrap flex items-center"
          style={{ animation: "slide 35s linear infinite" }}
        >
          {logos.concat(logos).map((src, i) => (
            <div key={i} className="flex-shrink-0 px-8 py-4">
              <div className="bg-gradient-to-b from-gold-500/10 via-gold-500/5 to-transparent rounded-[16px] border border-gold-500/15 backdrop-blur-md shadow-lg flex items-center justify-center h-24 w-44 md:h-28 md:w-56 mx-auto">
                <img
                  src={src}
                  alt={`Partner logo ${i + 1}`}
                  className="max-h-16 md:max-h-20 w-auto mx-auto object-contain grayscale hover:grayscale-0 contrast-125 brightness-110 transition-all duration-300"
                  style={{ filter: "drop-shadow(0 1px 2px #d6b059cc)" }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
