"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { TbChevronDown } from "react-icons/tb";
import { Dispatch, SetStateAction, useState } from "react";

export default function GalleryDropdown({
  isActive,
  open,
  setOpen,
}: {
  isActive?: boolean;
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}) {
  const gallery_options = [
    {
      name: "11th Swasthya Khabar Health Award",
      handle: "11th-swasthya-khabar-health-award",
    },
    { name: "Policy Dialogues", handle: "policy-dialogues" },
  ];

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        className={`flex items-center gap-2 text-lg text-gray-500 lg:text-black pb-3 px-3 lg:px-0 ${
          isActive
            ? "border-b-[3px] text-primary lg:text-white border-primary lg:border-white"
            : ""
        }`}
      >
        Gallery <TbChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-none" align="start">
        {gallery_options.map((val, ind) => {
          return (
            <DropdownMenuItem
              key={ind}
              className="rounded-none"
              onClick={() => setOpen && setOpen(false)}
            >
              <Link
                className="w-full text-primary py-2 text-lg font-medium"
                href={"/gallery/" + val.handle}
              >
                {val.name}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
