"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import GalleryDropdown from "./gallery-dropdown";

export default function Nav() {
  const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Focus", href: "/our-focus" },
    { name: "Projects", href: "/projects" },
    { name: "Get Involved", href: "/involved" },
    // { name: "Gallery", href: "/gallery" },
  ];

  const pathname = usePathname();

  const [isToggled, setIsToggled] = useState(false);
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    setIsToggled(false);
  }, [pathname]);

  return (
    <nav className="border-gray-200 bg-primary sticky top-0 z-50">
      <div className="relative py-4 md:px-0 w-full md:w-4/5 2xl:w-3/5 h-[7ch] mx-auto flex flex-wrap items-center justify-between ">
        <button
          onClick={() => setIsToggled(!isToggled)}
          type="button"
          className="ms-4 md:ms-0 inline-flex items-center p-2 w-10 h-10 justify-center text-lg text-white rounded-lg lg:hidden hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          ref={wrapperRef}
          className={`w-full lg:w-auto ${
            isToggled ? "block" : "hidden lg:block"
          } absolute top-12 lg:relative lg:top-0`}
        >
          <ul className="font-medium p-4 flex flex-col gap-6 lg:gap-1  lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700  ">
            {NAV_LINKS.map((link, ind) => (
              <li key={ind}>
                <Link
                  href={link.href}
                  onClick={() => {
                    setIsToggled(false);
                  }}
                  className={`text-lg text-gray-500 lg:text-white p-3 ${
                    (pathname == "/" && link.href == pathname) ||
                    (link.href !== "/" && pathname.includes(link.href))
                      ? "border-b-[3px] text-primary lg:text-white border-primary lg:border-white"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <GalleryDropdown
                isActive={pathname.includes("gallery")}
                open={open}
                setOpen={setOpen}
              />
            </li>
          </ul>
        </div>
        {/* <div className="me-5 md:me-0">
          <button className="text-lg rounded-full font-medium px-4 py-2 bg-white text-primary">
            Contact Us
          </button>
        </div> */}
      </div>
    </nav>
  );
}
