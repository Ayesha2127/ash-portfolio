import React from "react";
import { RiMailSendFill } from "react-icons/ri";
import { LuLinkedin } from "react-icons/lu";

export default function Social() {
  return (
    <div className="p-2 flex flex-wrap justify-center item center text-center gap-8">
      <div className="text-[#0A2647]">
        {/* Wrap the icon with a mailto link */}
        <a
          href="mailto:ayeshawaseem2127@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiMailSendFill size={30} />
        </a>
      </div>

      <div className="text-[#0A2647]">
        {/* Wrap the icon with a mailto link */}
        <a
          href="https://www.linkedin.com/in/ayesha-waseem-b127532bb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LuLinkedin size={30} />
        </a>
      </div>
    </div>
  );
}
