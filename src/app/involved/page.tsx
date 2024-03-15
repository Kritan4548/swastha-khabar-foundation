"use client";

import React, { useState } from "react";
import { FaDonate, FaHandshake, FaLeaf } from "react-icons/fa";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import RegisterForm from "../projects/RegisterForm";
import DonateNow from "../projects/DonateNow";

function page() {
  const [open, setOpen] = useState(false);
  const [openDonate, setOpenDonate] = useState(false);
  const [type, setType] = useState("register");

  return (
    <div className="h-full my-40 px-5 md:px-0 md:w-4/5 2xl:w-3/5 mx-auto">
      <div className="space-y-[1px] mb-[34px]">
        <p className="text-[#4D4D4D] font-bold text-3xl">GET INVOLVED</p>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]  items-start">
        <div className="rounded-lg flex-1 p-[30px] flex flex-col gap-[20px] border  shadow-sm">
          <div className="flex flex-col gap-2 items-center justify-center">
            <div>
              <FaDonate size={48} className="text-primary" />
            </div>
            <span className="text-[#4D4D4D] font-bold text-2xl">Donate</span>
          </div>

          <div className=" flex flex-col gap-12 justify-between items-center">
            <p className="text-[#7B7B7B] text-xl font-normal text-center">
              Your generous contributions make a significant impact on our
              initiatives. By donating to the Swasthya Khabar Foundation, you
              become a vital part of our mission to revolutionise Nepal&apos;s
              health sector. Your support enables us to fund crucial programs,
              advocate for positive policy changes, and address critical gaps in
              healthcare. Every donation, regardless of size, contributes to
              strengthening Nepal&apos;s health governance and health systems.
            </p>

            <button
              onClick={() => setOpenDonate(true)}
              className="bg-primary text-white px-3 py-2 rounded w-full"
            >
              Donate Now
            </button>
          </div>
        </div>
        <div className="rounded-lg flex-1 p-[30px] flex flex-col gap-[20px] border  shadow-sm">
          <div className="flex flex-col gap-2 items-center justify-center">
            <div>
              <FaLeaf size={48} className="text-primary" />
            </div>
            <span className="text-[#4D4D4D] font-bold text-2xl">
              Volunteer With Us
            </span>
          </div>

          <div className="flex flex-col gap-24">
            <p className="text-[#7B7B7B] text-xl font-normal text-center">
              We welcome individuals with dedication and the necessary skills to
              volunteer with us. As a growing foundation, we may not always have
              the space to accommodate all requests, but we can facilitate
              volunteer placements in government and non-state health agencies,
              where your expertise can play a crucial role in advancing
              healthcare initiatives across Nepal.
            </p>

            <button
              onClick={() => {
                setOpen(true);
                setType("volunteer");
              }}
              className="bg-primary text-white px-3 py-2 rounded"
            >
              Volunteer
            </button>
          </div>
        </div>
        <div className="rounded-lg flex-1 p-[30px] flex flex-col gap-[20px] border  shadow-sm  ">
          <div className="flex flex-col gap-2 items-center justify-center">
            <div>
              <FaHandshake size={60} className="text-primary" />
            </div>
            <span className="text-[#4D4D4D] font-bold text-2xl">
              Collaborate With Us
            </span>
          </div>
          <div className="flex flex-col gap-12">
            <p className="text-[#7B7B7B] text-xl font-normal text-center">
              Join hands with us in organising high-profile health events and
              change initiatives that bring together professionals,
              policymakers, and stakeholders to drive positive changes in
              Nepal&apos;s healthcare landscape.
            </p>

            <button
              onClick={() => {
                setOpen(true);
                setType("collaborate");
              }}
              className="bg-primary text-white px-3 py-2 rounded"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="b p-0">
          <RegisterForm type={type} close={() => setOpen(false)} />
        </DialogContent>
      </Dialog>

      <Dialog open={openDonate} onOpenChange={setOpenDonate}>
        <DialogContent className="b p-0 w-[90vw]">
          <DonateNow type={type} close={() => setOpenDonate(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default page;
