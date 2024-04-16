import Link from "next/link";
import React from "react";
import {
  TbBrandFacebook,
  TbBrandWhatsapp,
  TbMail,
  TbMapPin,
  TbPhoneCall,
} from "react-icons/tb";

import Facebook from "@/public/assets/facebook.svg";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-[#077E32] py-[40px]">
      <div className="px-5 md:px-0 w-full md:w-4/5 2xl:w-3/5 mx-auto ">
        {/* <div className=" w-full flex flex-col">
          <span className="text-[#078033] font-bold text-[28px] ">
            SWASTHYA
          </span>
          <span className="text-white font-semibold text-[28px] leading-8">
            KHABAR
          </span>
          <span className="text-gray-400 font-medium text-[16px]">
            FOUNDATION
          </span>
        </div> */}

        <div className="flex flex-col lg:flex-row justify-between w-full gap-6 my-[30px]">
          {/* <div className="">
            <div className=" flex flex-col gap-2">
              <p href={"#"} className="font-semibold text-xl text-gray-100">
                Website
              </p>
              <Link
                href={"#"}
                className="text-lg text-gray-300 hover:text-gray-100 transition-colors"
              >
                About
              </Link>
              <Link
                href={"#"}
                className="text-lg text-gray-300 hover:text-gray-100 transition-colors"
              >
                Developers
              </Link>
              <Link
                href={"#"}
                className="text-lg text-gray-300 hover:text-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href={"#"}
                className="text-lg text-gray-300 hover:text-gray-100 transition-colors"
              >
                Terms
              </Link>
              <Link
                href={"#"}
                className="text-lg text-gray-300 hover:text-gray-100 transition-colors"
              >
                Conditions
              </Link>
            </div>
          </div> */}
          <div className=" w-full flex flex-col ">
            <div className=" flex flex-col">
              <span className="text-white font-bold text-4xl ">SWASTHYA</span>
              <span className="text-white font-semibold text-4xl leading-8">
                KHABAR
              </span>
              <span className="text-white font-medium text-2xl">
                FOUNDATION
              </span>
          
            </div>
            <div className=" flex flex-col gap-2 my-5 items-end mt-20  w-fit">
              <p className="text-white text-left  w-full">
                Our Parent Media House
              </p>

              <div className=" flex flex-row gap-4 ">
                <Link href={"https://nepallive.com/"} target="_blank">
                  <div className=" w-24 flex items-center flex-col gap-2 font-semibold">
                    <img
                      src="https://nepallive.com/themes/nepal-live/frontend/images/logo.png"
                      alt="media"
                      className="h-14"
                    />

                    <span className="text-white text-xs text-center">
                      Nepal Live
                    </span>
                  </div>
                </Link>

                <Link href={"https://swasthyakhabar.com/"} target="_blank">
                  <div className=" w-24 flex items-center flex-col gap-2 font-semibold">
                    <img
                      src="https://swasthyakhabar.com/themes/swasthyakhabar/images/logo.png"
                      className="h-10"
                    />

                    <span className="text-white text-xs text-center">
                      Swasthya Khabar
                    </span>
                  </div>
                </Link>

                <Link href={"https://www.nepallivetoday.com/"} target="_blank">
                  <div className=" w-24 flex items-center flex-col gap-2 font-semibold">
                    <img
                      src="https://i0.wp.com/www.nepallivetoday.com/wp-content/uploads/2021/04/cropped-Nepal-lIve-today-Nepal-live-logo-01.jpg?w=1621&ssl=1"
                      alt="nepal live today"
                      className="h-10"
                    />

                    <span className="text-white text-xs text-center">
                      Nepal Live Today
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="">
            <span className="font-semibold text-[18px] text-gray-100">
              Contact Us
            </span>
            <div className=" flex gap-3 my-[15px]">
              {/* <Link
                href={"#"}
                className="text-2xl text-gray-300 hover:text-gray-100 transition-colors"
              >
                <TbBrandInstagram />
              </Link> */}
              <Link
                href={
                  "https://www.facebook.com/SwasthyaKhabarFoundation?mibextid=LQQJ4d"
                }
                className=" text-gray-300 hover:text-gray-100 transition-colors flex items-center gap-2"
              >
                <TbBrandFacebook className="text-primary text-xl flex-shrink-0" />
                <span className="text-lg">Swasthya Khabar Foundation</span>
              </Link>
              {/* <Link
                href={"#"}
                className="text-2xl text-gray-300 hover:text-gray-100 transition-colors"
              >
                <TbBrandTwitter />
              </Link> */}
            </div>

            <div className="flex flex-col gap-2 ">
              <span className="flex items-center gap-2">
                <TbMapPin className="text-primary text-xl" />
                <span className="text-lg text-gray-200">
                  Anamnagar, Kathmandu
                </span>
              </span>
              <span className=" flex items-center gap-2">
                <TbPhoneCall className="text-primary text-xl" />
                <span className="text-lg text-gray-200">+977 15705056</span>
              </span>
              <span className=" flex items-center gap-2">
                <TbBrandWhatsapp className="text-primary text-xl" />
                <span className="text-lg text-gray-200">+977 9843782183</span>
              </span>
              <Link
                href={"mailto:info@swasthyafoundation.org"}
                className="text-gray-300 hover:text-gray-100 transition-colors flex items-center gap-2"
              >
                <TbMail className="text-primary text-xl flex-shrink-0" />
                <span className="text-lg">info@swasthyafoundation.org</span>
              </Link>
            </div>
          </div>
        </div>

        <p className="text-[#8E8E8E] text-base">
          © 2024 Swasthya Khabar Foundation. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
