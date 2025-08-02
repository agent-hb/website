import React from "react";
import Image from "next/image";

const logos = [
  { src: "/Trust/adobe.svg", alt: "Adobe" },
  { src: "/Trust/amazon.svg", alt: "Amazon" },
  { src: "/Trust/slack.svg", alt: "Slack" },
  { src: "/Trust/spotify.svg", alt: "Spotify" },
  { src: "/Trust/zapier.svg", alt: "Zapier" },
  { src: "/Trust/zoom.svg", alt: "Zoom" },
];

const TrustedBy = () => {
  return (
    <div className="w-full">
      <div className="relative flex items-center flex-col border-l border-r border-b border-[#262626] w-[85%] h-[150px] mx-auto">
        <span className=" px-[34px] py-[10px] absolute top-[-22px] z-[50] rounded-[20px] border border-[#262626] bg-[#1A1A1A] text-[#FFF] text-[15px] font-medium">
          Trusted By 250+ Companies
        </span>
        <div className="w-full flex items-center justify-between mt-14 px-[90px]">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="w-[100px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
