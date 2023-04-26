"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IconType } from "react-icons";

interface SidebarItemProps {
  icon: IconType;
  text: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, text }) => {
  const [active, setActive] = useState("");
  const router = useRouter();
  const lctext = text.toLowerCase().replace(/\s+/g, "");
  return (
    <div
      onClick={() => {
        router.push(`/${lctext}`);
        setActive(lctext);
      }}
      className="
      flex 
      items-center 
        justify-center 
        gap-2
        p-3items-center  
        hover:text-slate-800
        transition
        cursor-pointer 
        mt-[34px] mb-[34px]
        "
    >
      <Icon
        size={26}
        className={`${
          active ? "text-[#FF5403]" : "text-[#56616B]"
        } font-medium text-sm`}
      />
      <h3
        className={`${
          active ? "text-[#FF5403]" : "text-[#56616B]"
        } font-medium text-base`}
      >
        {text}
      </h3>
    </div>
  );
};

export default SidebarItem;
