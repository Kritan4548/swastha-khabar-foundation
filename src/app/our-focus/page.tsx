import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FOCUS_AREA } from "./data";

export const metadata = {
  title: "Our Focus",
  description: "Our Focus",
  keywords: "Our Focus",
};

function page() {
  return (
    <div className="h-full md:my-40 my-20 px-5 md:px-0 w-full md:w-3/5 mx-auto">
      <div className="space-y-[1px] mb-[34px]">
        <p className="text-[#4D4D4D] font-bold text-3xl">FOCUS AREAS</p>
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

      <div className="flex flex-col gap-[14px]">
        {FOCUS_AREA.map((focus) => (
          <Accordion
            className="border border-[#E1E1E1]  rounded-md "
            type="single"
            collapsible
            key={focus.id}
          >
            <AccordionItem
              value={String(focus.id)}
              className="border-b-0 px-[10px]"
            >
              <AccordionTrigger className="text-[#4D4D4D] text-xl font-semibold flex gap-2 text-left capitalize">
                {focus.title}
              </AccordionTrigger>
              <AccordionContent className="text-[#7D7D7D] text-xl font-normal ">
                {focus.content}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default page;
