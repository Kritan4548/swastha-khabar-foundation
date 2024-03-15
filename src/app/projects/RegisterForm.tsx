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

function RegisterForm({ close, type = "register" }: any) {
  const [loading, setLoading] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  console.log("what is type", { type });

  function formatPhoneNumber(phoneNumber: string) {
    // Assuming the country code is 977 and the length of the country code is 3
    const countryCode = "+977";
    const phoneNumberDigits = phoneNumber.substring(3); // Remove the country code

    // Format the phone number with dashes or any other desired format
    const formattedPhoneNumber = `${countryCode} - ${phoneNumberDigits}`;

    return formattedPhoneNumber;
  }

  const onSubmitHandler = async (data: any) => {
    const formattedData = {
      ...data,
      phoneNumber: formatPhoneNumber(data.phoneNumber),
      type: type,
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
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className=" rounded-md mx-auto w-full px-5 py-4 shadow-md">
        {/* header */}
        <div className=" space-y-2">
          {type == "register" && (
            <p className="text-dark font-bold text-3xl">Register</p>
          )}
          {type == "volunteer" && (
            <p className="text-dark font-bold text-3xl">Volunteer With Us</p>
          )}
          {type == "collaborate" && (
            <p className="text-dark font-bold text-3xl">Collaborate With Us</p>
          )}
          <p className="text-[#7D7D7D] text-lg font-medium">
            Please fill the form below
          </p>
        </div>
        {/* input field */}

        <div className="my-6 space-y-4">
          <div className="flex flex-row gap-4 ">
            <div className="flex flex-1 flex-col gap-1 ">
              <label className="text-[#7D7D7D] text-base font-medium">
                Full Name
              </label>
              <input
                {...register("fullName")}
                placeholder="Enter your full name"
                className="text-sm outline-none bg-primary/10 text-primary px-4 py-3 rounded-md placeholder:text-primary/80 placeholder:font-normal placeholder:text-sm"
              />
              {errors.fullName && (
                <p className="text-red-600 text-xs font-medium">
                  Full name is required
                </p>
              )}
            </div>
          </div>

          {/* email */}
          <div className="flex flex-1 flex-col gap-1">
            <label className="text-base text-[#7D7D7D] font-medium">
              Email
            </label>
            <input
              {...register("email")}
              placeholder="Enter your email"
              className="text-sm outline-none bg-primary/10 text-primary px-4 py-3 rounded-md placeholder:text-primary/80 placeholder:font-normal placeholder:text-sm"
            />
            {errors.email && (
              <p className="text-red-600 text-xs font-medium">
                Email is required
              </p>
            )}
          </div>

          {/* phone number */}
          <div className="flex flex-1 flex-col gap-2">
            <label className="text-base text-[#7D7D7D] font-medium">
              Phone number
            </label>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <>
                  <PhoneInput
                    inputClass="w-full"
                    country={"np"}
                    {...field}
                    masks={{ np: ".... ... ..." }}
                    onlyCountries={["np"]}
                    inputProps={{
                      name: "phoneNumber",
                      required: true,
                      ref: field.ref,
                    }}
                  />
                  {fieldState.error && (
                    <p className="text-red-600 text-xs font-medium">
                      Phone Number is required
                    </p>
                  )}
                </>
              )}
            />
          </div>

          {/* sector */}
          {type !== "collaborate" && (
            <div className="flex flex-1 flex-col gap-1">
              <label className="text-base text-[#7D7D7D] font-medium">
                Educational Qualification
              </label>
              <input
                {...register("profession")}
                placeholder="Enter your qualification"
                className="text-sm outline-none bg-primary/10 text-primary px-4 py-3 rounded-md placeholder:text-primary/80 placeholder:font-normal placeholder:text-sm"
              />
              {errors.profession && (
                <p className="text-red-600 text-xs font-medium">
                  Profession is required
                </p>
              )}
            </div>
          )}

          {/* message */}
          <div className="flex flex-1 flex-col gap-1">
            <label className="text-base text-[#7D7D7D] font-medium">
              Message
            </label>
            <textarea
              {...register("message")}
              placeholder="Your message here"
              className="text-sm h-[120px] outline-none bg-primary/10 text-primary px-4 py-3 rounded-md placeholder:text-primary/80 placeholder:font-normal placeholder:text-sm"
            />
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
          <button
            type="submit"
            className="bg-primary text-white rounded-md py-2 px-7 text-sm font-medium"
          >
            {loading ? <Spinner /> : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
