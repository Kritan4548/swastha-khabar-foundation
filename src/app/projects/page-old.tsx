"use client";

import Image from "next/image";
import { TbCircleCheckFilled } from "react-icons/tb";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import RegisterForm from "./RegisterForm";
import { useState } from "react";

// export const metadata = {
//   title: "Projects",
//   description: "Projects",
//   keywords: "Projects",
// };

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const CONTEXTS = [
    "Fast technology adoption but weak regulatory and facilitative environment",
    "More focus on technologyless emphasis on data, institutions and people. Often, bottlenecks are beyond technology",
    "Technology use is not necessarily aligned with strategic goals and objectives",
    "A disconnect between practitioners and  policy-makers",
    "Gaps in legal instruments to govern and  protect technologies, innovation, data, and practitioners",
    "Well-placed and nurtured digital technologies will improve access, quality, and speed in healthcare:  pathways to UHC",
  ];

  const ASPECTS = [
    "Past digital health conferences and events have been scientific in nature or have focused on policy-level interactions",
    "The goal of the March Symposium is to bring practitioners and policy-makers together",
    "The Symposium will be organized by a national civil society organisation (Swasthya Khabar Foundation) under the patronage of the  Ministry of Health and Population",
    "Swasthya Khabar has a legacy of organizing high-profile health events with the highest levels of participation",
    "The Symposium will be attended by technology developers, users, international practitioners, health managers, policymakers, political leaders, students and CSOs",
  ];

  const KEYS = [
    "Showcasing exciting digital health technologies currently implemented nationally and internationally",
    "A platform for practitioners to share their stories and interact with policymakers",
    "Discussion on the role of the government and setting up adequate institutions to foster digital health",
    "Policy dialogue on data democratisation",
    "Roundtable on the current legal environment for digital technologies, data, and users",
  ];

  const STRUCTURE = [
    "Pre-Symposium meetings and workshops",
    "Two-day Symposium: \n-Keynotes and presentations, roundtable and panel discussions, policy dialogues, technology showcase, and poster presentation",
    "One-day debrief meeting and signing of the Symposium declaration",
    "The action plan will be made public through a website, and the Swasthya Khabar Foundation conducts continuous progress tracking.",
  ];

  return (
    <div>
      <div className="px-5 md:px mx-auto w-full md:w-4/5 2xl:w-3/5">
        <div className="my-24">
          <div className="space-y-[1px] mb-[34px]">
            <p className="text-[#4D4D4D] font-bold text-3xl">Our Projects</p>
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
          <p className="font-bold">
            We are organizing a high-profile event on digital health: Nepal
            Digital Health Symposium, 2024
          </p>
        </div>

        <div className="flex flex-col gap-24 mb-24">
          <div className="flex items-center justify-center">
            <Image
              src={"/assets/symphosium.png"}
              alt="Nepal Digital Health Symposium"
              width={500}
              height={300}
            />
          </div>
          <div className="space-y-4">
            <h2 className="font-bold text-3xl">Context and Challenges</h2>
            <div className="space-y-3">
              {CONTEXTS.map((context, index) => (
                <div key={index} className="flex gap-2 items-baseline">
                  <TbCircleCheckFilled className="text-primary flex-shrink-0" />
                  <p key={index} className="">
                    {context}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-bold text-3xl">
              What makes this Symposium different?
            </h2>
            <div className="space-y-3">
              {ASPECTS.map((context, index) => (
                <div key={index} className="flex gap-2 items-baseline">
                  <TbCircleCheckFilled className="text-primary flex-shrink-0" />
                  <p key={index} className="">
                    {context}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-bold text-3xl">Key themes and areas</h2>
            <div className="space-y-3">
              {KEYS.map((context, index) => (
                <div key={index} className="flex gap-2 items-baseline">
                  <TbCircleCheckFilled className="text-primary flex-shrink-0" />
                  <p key={index} className="">
                    {context}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-bold text-3xl">Symposium Structure</h2>
            <div className="space-y-3">
              {STRUCTURE.map((context, index) => (
                <div key={index} className="flex gap-2 items-baseline">
                  <TbCircleCheckFilled className="text-primary flex-shrink-0" />
                  <p key={index} className="">
                    {context}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="bg-primary text-base px-5 py-2 rounded-none text-white w-fit"
          >
            Register Now
          </button>
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
