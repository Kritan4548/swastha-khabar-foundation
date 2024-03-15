"use client";

import React, { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { toast } from "sonner";

import Spinner from "@/components/Spinner";

const schema = yup.object().shape({
  fullName: yup.string().min(4).max(32).required(),
  email: yup.string().email().required(),
  phoneNumber: yup.string().required(),
  profession: yup.string().optional(),
  message: yup.string().optional(),
});

function DonateNow({ close, type = "register" }) {
  const [loading, setLoading] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = async (data) => {
    const formattedData = {
      ...data,
      phoneNumber: formatPhoneNumber(data.phoneNumber),
    };
    try {
      setLoading(true);
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(formattedData),
        headers: {
          "content-type": "application/json",
        },
      });

      if (response.ok) {
        close();
        setLoading(false);
        toast.success("Sucessfully registered.");
      }
    } catch (error) {
      toast.error("Failed to register.");
      console.log({ error });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="h-fit">
      <div className=" rounded-md mx-auto w-full px-5 py-4 shadow-md">
        {/* header */}
        <div className=" space-y-2">
          {type == "register" && (
            <p className="text-dark font-bold text-3xl">Donate</p>
          )}
        </div>
        {/* input field */}
        <div className="my-5 max-h-[50vh] md:max-h-full overflow-auto">
          <img
            src="./qr.jpg"
            alt="siddartha bank"
            className="rounded-md h-[400px] mx-auto"
          />
          {/* <div className="border mt-3 rounded-md" /> */}
          <div className="font-bold text-center py-4 bg-[#f5bf52] rounded-md my-1">
            Siddartha Bank Limited
          </div>
          {/* <div className="border mb-3 rounded-md" /> */}
          <div className="border w-full p-4 mt-2 gap-1 rounded-md flex justify-center items-center flex-col">
            <p className="text-sm md:text-lg text-center">
              Swasthya Khabar Foundation Ac/N
            </p>

            <p className="text-3xl md:text-4xl font-bold">55504669611</p>
          </div>
          <div className="mt-6">
            <p className="text-sm font-semibold">Disclaimer :</p>
            <p className="text-xs text-gray-500 text-justify">
              Your contribution to SKF will be used exclusively for our
              charitable mission and initiatives. We are committed to
              transparency and accountability. ensuring your donations will make
              a positive impact.
            </p>
          </div>
        </div>
        {/* button */}
        <div className="flex gap-3 justify-end">
          <button
            type="button"
            onClick={() => {
              close();
            }}
            className="bg-[#E8E8E8] text-dark rounded-md text-sm py-2 px-7 font-medium"
          >
            Cancel
          </button>
          {/* <button
            type="submit"
            className="bg-primary text-white rounded-md py-2 px-7 text-sm font-medium"
          >
            {loading ? <Spinner /> : "Submit"}
          </button> */}
        </div>
      </div>
    </form>
  );
}

export default DonateNow;
