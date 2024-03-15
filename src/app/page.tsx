// @ts-nocheck

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {  TbChevronRight } from "react-icons/tb";

import RegisterForm from "./projects/RegisterForm";

import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col items-center justify-between">
      <div className="h-[88dvh] w-full relative flex flex-col">
        <div className="h-full w-full absolute">
          <Image
            fill={true}
            className="object-cover"
            src="/team.png"
            alt="image"
          />
        </div>
        {/* TODO - To remove random image */}
        <div className="bg-gray-900/70 relative flex-1 flex items-center">
          <div className="px-5 md:px-0 w-full md:w-4/5 2xl:w-3/5 mx-auto flex flex-col h-full justify-center items-start">
            <div className=" space-y-3">
              <h1 className="md: w-2/3 text-4xl font-bold text-white tracking-tight">
                IMPROVING HEALTH, <br /> REVOLUTIONIZING HEALTHCARE
              </h1>
              <p className="md:w-2/4 text-gray-200 font-medium text-xl tracking-wide">
                Welcome to Swasthya Khabar Foundation (SKF), a Nepali non-profit
                organisation that aspires to elevate health to the forefront of
                Nepal's development agenda and create a lasting impact by
                actively engaging policymakers, amplifying people&apos;s voices,
                and fostering positive change in health governance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 bg-white w-full">
        <div className="px-5 md:px-0 w-full md:w-4/5 2xl:w-3/5 mx-auto flex flex-col gap-20">
          <div>
            <div className="space-y-[1px] mb-[34px]">
              <p className="text-[#4D4D4D] font-bold text-[24px]">
                Our Upcoming Project
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="145"
                height="4"
                viewBox="0 0 145 4"
                fill="none"
              >
                <line y1="2" x2="109" y2="2" stroke="#078033" strokeWidth="4" />
                <line
                  x1="115"
                  y1="2"
                  x2="129"
                  y2="2"
                  stroke="#078033"
                  strokeWidth="4"
                />
                <line
                  x1="135"
                  y1="2"
                  x2="145"
                  y2="2"
                  stroke="#078033"
                  strokeWidth="4"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className=" flex flex-col gap-2">
                <div className="rounded-lg border overflow-hidden">
                  <Image
                    src={"/assets/symphosium.png"}
                    height={500}
                    width={500}
                    alt="symposium"
                  />
                </div>

                <div className=" flex justify-between w-full gap-2">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="bg-primary text-lg px-5 py-2 text-white w-fit"
                  >
                    Register Now
                  </button>

                  <Link
                    className="font-semibold text-xl text-primary/80 hover:text-primary flex items-center gap-2 hover:gap-3 transition-all"
                    href={"/projects"}
                  >
                    View Project
                    <TbChevronRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-[1px] mb-[34px]">
              <p className="text-[#4D4D4D] font-bold text-[24px]">
                Our Upcoming Event
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="145"
                height="4"
                viewBox="0 0 145 4"
                fill="none"
              >
                <line y1="2" x2="109" y2="2" stroke="#078033" strokeWidth="4" />
                <line
                  x1="115"
                  y1="2"
                  x2="129"
                  y2="2"
                  stroke="#078033"
                  strokeWidth="4"
                />
                <line
                  x1="135"
                  y1="2"
                  x2="145"
                  y2="2"
                  stroke="#078033"
                  strokeWidth="4"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className=" flex flex-col gap-2">
                <div className="rounded-lg border overflow-hidden p-3">
                  <Image
                    src={"/assets/12th-health-award.jpg"}
                    height={500}
                    width={500}
                    alt="12th-health-award"
                  />
                </div>

                <div className=" flex justify-between w-full gap-2">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="bg-primary text-lg px-5 py-2 text-white w-fit"
                  >
                    Register Now
                  </button>

                  <Link
                    className="font-semibold text-xl text-primary/80 hover:text-primary flex items-center gap-2 hover:gap-3 transition-all"
                    href={`/projects/12th-swasthya-khabar-health-award`}
                  >
                    View Project
                    <TbChevronRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-[1px] mb-[34px]">
              <p className="text-[#4D4D4D] font-bold text-[24px]">
                Recent Policy Dialogue
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="145"
                height="4"
                viewBox="0 0 145 4"
                fill="none"
              >
                <line y1="2" x2="109" y2="2" stroke="#078033" strokeWidth="4" />
                <line
                  x1="115"
                  y1="2"
                  x2="129"
                  y2="2"
                  stroke="#078033"
                  strokeWidth="4"
                />
                <line
                  x1="135"
                  y1="2"
                  x2="145"
                  y2="2"
                  stroke="#078033"
                  strokeWidth="4"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className=" flex flex-col gap-2 mx-10">
               
                <div className="rounded-lg border overflow-hidden  ">
                  <Image
                    src={"/assets/economy-problem.jpg"}
                    height={400}
                    width={500}
                    alt="economy-problem"
                  />
                </div>
                <div className=" flex justify-end w-full gap-2">
                  <Link
                    className="font-semibold text-xl text-primary/80 hover:text-primary flex items-center gap-2 hover:gap-3 transition-all"
                    href={`/projects/economy-problem`}
                  >
                    View More
                    <TbChevronRight />
                  </Link>
                </div>
               
                <div className="rounded-lg border overflow-hidden ">
                  <Image
                    src={"/assets/health-status.png"}
                    height={400}
                    width={500}
                    alt="health-status"
                  />
                </div>
                <div className=" flex justify-end w-full gap-2">
                  <Link
                    className="font-semibold text-xl text-primary/80 hover:text-primary flex items-center gap-2 hover:gap-3 transition-all"
                    href={`/projects/health-status`}
                  >
                    View More
                    <TbChevronRight />
                  </Link>
                </div>
               
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-[1px] mb-[34px]">
              <p className="text-[#4D4D4D] font-bold text-[24px]">
                Our Recent Event
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="145"
                height="4"
                viewBox="0 0 145 4"
                fill="none"
              >
                <line y1="2" x2="109" y2="2" stroke="#078033" strokeWidth="4" />
                <line
                  x1="115"
                  y1="2"
                  x2="129"
                  y2="2"
                  stroke="#078033"
                  strokeWidth="4"
                />
                <line
                  x1="135"
                  y1="2"
                  x2="145"
                  y2="2"
                  stroke="#078033"
                  strokeWidth="4"
                />
              </svg>
            </div>
            <div className="mb-10">
              <p className="text-xl font-semibold ">
                11<sup>th</sup> Swasthya Khabar Health Award
              </p>
              <p className="text-lg">
                The Health Award was focused on advocating for health-related
                sustainable development goals.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="rounded-lg border overflow-hidden w-full">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/X77O25ue8Lk?si=mfj8jr8m-Fxsks7m"
                  // frameBorder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="b p-0">
          <RegisterForm close={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
