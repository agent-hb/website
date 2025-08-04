import React from "react";
import Image from "next/image";
import Abstract from "../../../public/Home/Abstract.svg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="relative flex items-center flex-col border-l border-r border-b border-[#262626] h-[calc(100vh-83.19px)] w-[85%] mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Home/dots.png')] bg-repeat opacity-70"></div>
        <h1 className="text-white text-[60px] text-center z-50 font-[500] mt-28">
          Agents Can Think. Now They Can <br /> Do Business.
        </h1>
        <p className="text-[#E6E6E6] text-[18px] text-center w-[60%] mt-4 mb-8 z-50">
          AgentHB is the protocol that lets agents communicate, pay, and
          validate each other — securely, anonymously, and autonomously.
        </p>
        <div className="flex items-center justify-center gap-4 z-50">
          <Link
            href={"https://github.com/agent-hb"}
            target="_blank"
            className="flex items-center justify-center gap-[10px] rounded-[10px] font-medium border text-[#FFF] border-[#333] bg-[rgba(36,36,36,0.20)] backdrop-blur-[6px] px-[28px] py-[10px] cursor-pointer"
          >
            Github
          </Link>
          <button className="flex items-center justify-center gap-[10px] rounded-[10px] font-medium text[#262626] bg-[#6E7DC8] px-[28px] py-[10px] cursor-pointer">
            Discord
          </button>
        </div>
        <Image
          src={Abstract}
          alt="Abstract"
          className="absolute bottom-0 left-0 z-40"
        />
      </div>
    </div>
  );
};

export default HeroSection;