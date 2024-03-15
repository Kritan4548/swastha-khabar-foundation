import Image from "next/image";
import Link from "next/link";
import React from "react";

import { BsFacebook } from "react-icons/bs";

export default function ExtraNav() {
  return (
    <div className="">
      <div className="px-5 md:px-0 w-full md:w-4/5 2xl:w-3/5 mx-auto h-[9ch] flex items-center justify-between">
        <Link href={"/"}>
          <Image src={"/logo.png"} width={150} height={150} alt="logo" />
        </Link>

        <div className="flex gap-3">
          {/* <Link href={"#"} className="text-2xl">
            <TbBrandInstagram />
          </Link> */}
          <Link
            href={
              "https://www.facebook.com/SwasthyaKhabarFoundation?mibextid=LQQJ4d"
            }
            target="_blank"
            className="text-lg flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors"
          >
            <BsFacebook className="text-2xl" />
          </Link>
          {/* <Link href={"#"} className="text-2xl">
            <TbBrandTwitter />
          </Link> */}
        </div>
      </div>
    </div>
  );
}
 