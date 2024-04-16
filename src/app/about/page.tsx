import React from "react";

import Vision from "./(_vision)";
import Team from "./(_team)";
import Image from "next/image";

export const metadata = {
  title: "About us",
};

function page() {
  return (
    <div>
      <div className="px-5 md:px-0 md:w-4/5 2xl:w-3/5 mx-auto my-12 flex flex-col gap-12">
        <div className=" flex flex-col gap-2">
          <div className="space-y-[1px] mb-[34px]">
            <p className="text-[#4D4D4D] font-bold text-3xl">About Us</p>
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
          {/* <div className="rounded-lg border overflow-hidden p-3">
            */}
          <p className="text-[#797979] text-xl ">
            Carrying 14 years of media legacy of our parent organisation,
            Swasthya Khabar, a part of Nepal Live Group, Swasthya Khabar
            Foundation (SKF) aims at bringing the citizens health issues to the
            fore and linking them to the policy processes. We have supported, as
            well as contested, numerous health-related policies. For more than a
            decade, we have organised Health Awards events annually to recognise
            the contributions of not only health workers but also individuals
            from various sectors and institutions. Through SKF, we aspire to
            build upon our legacy and expand our scope to a broader health
            policy, governance, and advocacy realm. SKF is registered as a
            non-profit foundation in Nepal’s Office of the Company Registrar.
          </p>
          {/* <Image
                    src={"/assets/12th-health-award.jpg"}
                    height={500}
                    width={500}
                    alt="12th-health-award"
                  /> */}
          {/* </div> */}
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">Why did we start SKF?</p>
          <p className="text-[#797979] text-xl">
            While Civil Society Organisations (CSOs) and non-state actors have
            emerged as prominent entities in Nepal’s health landscape in recent
            years, most are engaged as service delivery agents, health technical
            partners and research agencies to supplement the ongoing efforts.
            However, healthcare systems are complex and strongly influenced by
            the country’s political and socio-economic factors. Health
            governance—particularly in federal Nepal—is a critical health
            systems component where the CSOs can make an invaluable
            contribution, yet their presence remains thin. Furthermore, many
            solutions to healthcare issues often lie beyond the purview of
            traditional and customary public health actors like the Ministry of
            Health and Population, which requires a broad-based engagement.
            Individuals' educational and income status directly correlates with
            their health, and the country’s labour policy may positively or
            negatively impact the health of concerned population groups. CSOs
            have ample avenues to capitalise on local accountability and policy
            advocacy opportunities to strengthen health governance and make a
            positive dent in the health outcomes of Nepali citizens. We
            established SKF in September 2023 to bridge this gap.
          </p>
        </div>
      </div>
      <Vision />
      <Team />
    </div>
  );
}

export default page;
