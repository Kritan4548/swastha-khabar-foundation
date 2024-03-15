"use client";

import Image from "next/image";
import { TbCircleCheckFilled } from "react-icons/tb";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import RegisterForm from "./RegisterForm";
import { POLICY_DIALOUG, PROJECT_DATA } from "@/data/projects_data";
import Link from "next/link";

// export const metadata = {
//   title: "Projects",
//   description: "Projects",
//   keywords: "Projects",
// };

export default function Projects() {
  return (
    <div>
      <div className="px-5 md:px mx-auto w-full md:w-4/5 2xl:w-3/5 ">
        <div className="my-16 ">
          <div className="space-y-3">
            <p className="text-[#4D4D4D] font-bold text-3xl">
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
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {POLICY_DIALOUG.map((project, ind) => {
            return (
              <Link
                key={ind}
                href={`/projects/${project.slug}`}
                className="p-6 rounded-lg border aspect-video flex items-center hover:shadow-lg transition-all"
              >
                <Image
                  src={project.image}
                  className="h-full w-full object-contain"
                  height={500}
                  width={500}
                  alt="project"
                />
              </Link>
              
            );
          })}
        </div>

        <div className="my-16 ">
          <div className="space-y-3">
            <p className="text-[#4D4D4D] font-bold text-3xl">
              Our Upcoming Projects
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
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {PROJECT_DATA.map((project, ind) => {
            return (
              <Link
                key={ind}
                href={`/projects/${project.slug}`}
                className="p-6 rounded-lg border aspect-video flex items-center hover:shadow-lg transition-all"
              >
                <Image
                  src={project.image}
                  className="h-full w-full object-contain"
                  height={500}
                  width={500}
                  alt="project"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
