import React from "react";
import Image from "next/image";
import Container from "../../../public/Footer/Container.svg";
import logo from "../../../public/Home/logo.png";

const Footer = () => {
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
          <div className="relative z-10 flex items-center justify-center flex-col h-[482.94px]">
            <Image src={logo} alt="logo" className="w-[80px] mb-4" />
            <h2 className="text-[#FFF] text-[36px] font-[500]">
              Thank you for your Interest in Agent.
            </h2>
            <p className="text-[#E6E6E6] text-center mb-6 mt-2">
              We would love to hear from you and discuss how we can help <br />{" "}
              bring your digital ideas to life. Here are the different ways you{" "}
              <br /> can get in touch with us.
            </p>
            <button className="flex items-center gap-2 rounded bg-[#6E7DC8] text-[15px] px-5 py-2 text-[#262626] font-medium hover:bg-[#5a6ba3] transition-colors cursor-pointer">
              Start Project
            </button>
          </div>
        </div>
        <div className="w-full px-8 py-12">
          <div className="mb-12 text-center">
            <h3 className="text-[#FFF] text-[24px] font-medium mb-4">
              Stay Updated
            </h3>
            <p className="text-[#A6A6A6] text-[16px] mb-6">
              Get the latest updates on agent technology trends, new features,
              and exclusive content.
            </p>
            <div className="flex justify-center">
              <div className="flex gap-3 max-w-md w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-[#262626] border border-[#333] rounded text-[#FFF] text-[14px] placeholder-[#A6A6A6] focus:outline-none focus:border-[#6E7DC8]"
                />
                <button className="px-6 py-3 bg-[#6E7DC8] text-[#262626] text-[15px] font-medium rounded hover:bg-[#5a6ba3] transition-colors cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-8 mb-8 border-t border-[#262626] pt-6">
            <div>
              <h3 className="text-[#FFF] text-[18px] font-medium mb-4">
                Agent HB
              </h3>
              <p className="text-[#A6A6A6] text-[14px] mb-4">
                Building the future of autonomous agent networks with secure
                messaging, payments, and seamless integration.
              </p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-[#262626] rounded flex items-center justify-center cursor-pointer hover:bg-[#333]">
                  <span className="text-[#FFF] text-sm">T</span>
                </div>
                <div className="w-8 h-8 bg-[#262626] rounded flex items-center justify-center cursor-pointer hover:bg-[#333]">
                  <span className="text-[#FFF] text-sm">G</span>
                </div>
                <div className="w-8 h-8 bg-[#262626] rounded flex items-center justify-center cursor-pointer hover:bg-[#333]">
                  <span className="text-[#FFF] text-sm">L</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[#FFF] text-[16px] font-medium mb-4">
                Products
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-[#A6A6A6] text-[14px] hover:text-[#FFF] transition-colors"
                  >
                    Agent SDK
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#A6A6A6] text-[14px] hover:text-[#FFF] transition-colors"
                  >
                    Messaging Protocol
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#A6A6A6] text-[14px] hover:text-[#FFF] transition-colors"
                  >
                    Payment Network
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#A6A6A6] text-[14px] hover:text-[#FFF] transition-colors"
                  >
                    Verification System
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#A6A6A6] text-[14px] hover:text-[#FFF] transition-colors"
                  >
                    MCP Integration
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#FFF] text-[16px] font-medium mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-[#A6A6A6] text-[14px] hover:text-[#FFF] transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#A6A6A6] text-[14px] hover:text-[#FFF] transition-colors"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#A6A6A6] text-[14px] hover:text-[#FFF] transition-colors"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#A6A6A6] text-[14px] hover:text-[#FFF] transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#A6A6A6] text-[14px] hover:text-[#FFF] transition-colors"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#FFF] text-[16px] font-medium mb-4">
                Support
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-[#A6A6A6] text-[14px] hover:text-[#FFF] transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#A6A6A6] text-[14px] hover:text-[#FFF] transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#A6A6A6] text-[14px] hover:text-[#FFF] transition-colors"
                  >
                    Developer Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#A6A6A6] text-[14px] hover:text-[#FFF] transition-colors"
                  >
                    Status Page
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#A6A6A6] text-[14px] hover:text-[#FFF] transition-colors"
                  >
                    Bug Reports
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#262626] pt-6 flex justify-between items-center">
            <div className="flex gap-6">
              <a
                href="#"
                className="text-[#A6A6A6] text-[14px] hover:text-[#FFF] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#A6A6A6] text-[14px] hover:text-[#FFF] transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-[#A6A6A6] text-[14px] hover:text-[#FFF] transition-colors"
              >
                Security
              </a>
            </div>
            <p className="text-[#A6A6A6] text-[14px]">
              © 2024 Agent HB. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;