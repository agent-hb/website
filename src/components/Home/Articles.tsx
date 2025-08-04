import React from "react";
import Image from "next/image";
import Container from "../../../public/Articles/Container.svg";
// Add placeholder images - replace with actual article images
import Article from "../../../public/Articles/article.png";

const articles = [
  {
    date: "12.15.2024",
    category: "Development, Guide",
    title: "Building Autonomous Agent Networks: A Complete Guide",
    desc: "Learn how to create and deploy autonomous agents that can communicate, collaborate, and transact securely on decentralized networks.",
    image: Article,
  },
  {
    date: "12.10.2024",
    category: "Security, ZK Proofs",
    title: "Implementing Zero-Knowledge Proofs for Agent Verification",
    desc: "Discover how ZK proofs ensure task validation and output verification in autonomous agent systems without revealing sensitive data.",
    image: Article,
  },
  {
    date: "12.05.2024",
    category: "Integration, MCP",
    title: "MCP Integration: Enabling Context-Aware Agent Operations",
    desc: "Explore how Model Context Protocol allows agents to access enterprise data safely while maintaining privacy and security.",
    image: Article,
  },
];

const Articles = () => {
  return (
    <div className="w-full">
      <div className="relative flex items-center flex-col border-l border-r border-b border-[#262626] w-[85%] mx-auto overflow-hidden">
        <div className="relative w-full">
          <Image
            src={Container}
            alt="Container"
            className="absolute top-0 left-0 z-0"
          />
          <div
            className="absolute top-0 left-0 z-5 w-full h-full"
            style={{
              background: `linear-gradient(0deg, rgba(15, 25, 45, 0.5) 0%, rgba(15, 25, 45, 0.8) 100%)`,
              backgroundBlendMode: "multiply",
            }}
          />
          <div className="relative z-10 flex items-center justify-center flex-col h-[271.8px]">
            <h2 className="text-[#FFF] text-[36px] mb-2 font-[500]">
              Our Articles
            </h2>
            <p className="text-[#E6E6E6]">
              Explore our latest insights, tutorials, and resources to stay
              updated with the newest trends and knowledge.
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 grid-rows-1">
          {articles.map((article, index) => (
            <div key={index} className="relative p-6 border border-[#262626]">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-[#A6A6A6] text-[14px]">{article.date}</p>
                  <p className="text-[#A6A6A6] text-[14px]">
                    {article.category}
                  </p>
                </div>
                <div className="mb-4">
                  <Image
                    src={article.image}
                    alt={article.title}
                    className="w-full rounded-[8px]"
                  />
                </div>
                <h3 className="text-[18px] text-[#FFF] font-medium mb-3">
                  {article.title}
                </h3>
                <p className="text-[#E6E6E6] text-[15px] mb-6">
                  {article.desc}
                </p>
              </div>
              <button className="flex justify-center items-center gap-[10px] rounded-[4px] bg-[#262626] text-[#FFF] w-full py-[10px] self-stretch cursor-pointer">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;