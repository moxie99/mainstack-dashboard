"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { RiDashboardLine } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi";
import { AiOutlineHourglass } from "react-icons/ai";
import { TbCameraPlus } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { RxTrash } from "react-icons/rx";
import { MdOutlineSubscriptions, MdOutlineFilePresent } from "react-icons/md";
import { GiAlarmClock } from "react-icons/gi";
import SidebarItem from "./SidebarItem";

interface SidebarChildrenProps {
  children: React.ReactNode;
}

const sidebarItems = [
  {
    text: "Dashboard",
    icon: RiDashboardLine,
  },
  {
    text: "Item 1",
    icon: HiOutlinePencil,
  },
  {
    text: "Item 2",
    icon: BsPeople,
  },
  {
    text: "Item 3",
    icon: AiOutlineHourglass,
  },
  {
    text: "OTHERS 1",
    icon: null,
  },
  {
    text: "Item 4",
    icon: TbCameraPlus,
  },
  {
    text: "Item 5",
    icon: RxTrash,
  },
  {
    text: "OTHERS 2",
    icon: null,
  },
  {
    text: "Item 6",
    icon: MdOutlineSubscriptions,
  },
  {
    text: "Item 7",
    icon: MdOutlineFilePresent,
  },
  {
    text: "Item 8",
    icon: GiAlarmClock,
  },
];
const Sidebar: React.FC<SidebarChildrenProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between lg:w-[10vw] md:w-[15vw]">
        <div className="flex flex-col items-center">
          <div className="mt-[23px] mb-[49px]">
            <Image
              src={"/images/placeholder.png"}
              priority={true}
              alt="avatar"
              height="40"
              width="40"
              className="rounded-full"
            />
          </div>
          <div>
            {sidebarItems.map(({ text, icon }) => {
              if (!icon) {
                return (
                  <h3 key={text} className="mt-[32px] mr-[0] mb-[20px]">
                    {text}
                  </h3>
                );
              }

              const lctext = text.toLowerCase().replace(/\s+/g, "");

              return <SidebarItem key={text} text={text} icon={icon} />;
            })}
          </div>
          <div className="flex items-center justify-between gap-1 lg:mt-[100px] md:mt-[8rem] mt-[1rem]">
            <div>
              <Image
                src={"/images/image.png"}
                priority={true}
                alt="avatar"
                height="30"
                width="30"
                className="rounded-full"
              />
            </div>
            <h3 className="text-base">Blessing Daniels</h3>
            <div>
              <BsThreeDots size={26} />
            </div>
          </div>
        </div>
      </div>
      <main className="w-full ml-40">{children}</main>
    </div>
  );
};

export default Sidebar;

{
  /* <Link href="/">
            <div className="inline-block p-3 text-white bg-purple-800 rounded-lg">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href="/">
            <div className="inline-block p-3 my-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/customers">
            <div className="inline-block p-3 my-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href="/orders">
            <div className="inline-block p-3 my-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href="/">
            <div className="inline-block p-3 my-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
              <FiSettings size={20} />
            </div>
          </Link> */
}
