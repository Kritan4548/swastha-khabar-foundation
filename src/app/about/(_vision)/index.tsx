import React from "react";

function page() {
  return (
    <div className="bg-[#F1F1F1] py-[40px]">
      <div className="px-5 md:px-0 w-full md:w-4/5 2xl:w-3/5 mx-auto flex flex-col gap-[56px]">
        <div className=" gap-5 flex flex-col">
          <div className=" flex items-center gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M16 20C16 21.0609 16.4214 22.0783 17.1716 22.8284C17.9217 23.5786 18.9391 24 20 24C21.0609 24 22.0783 23.5786 22.8284 22.8284C23.5786 22.0783 24 21.0609 24 20C24 18.9391 23.5786 17.9217 22.8284 17.1716C22.0783 16.4214 21.0609 16 20 16C18.9391 16 17.9217 16.4214 17.1716 17.1716C16.4214 17.9217 16 18.9391 16 20Z"
                  stroke="#078033"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38 20C33.2 28 27.2 32 20 32C12.8 32 6.8 28 2 20C6.8 12 12.8 8 20 8C27.2 8 33.2 12 38 20Z"
                  stroke="#078033"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-primary font-semibold text-2xl">
              OUR VISION
            </span>
          </div>

          <p className="text-[#797979] text-xl">
            We envision a Nepal where health transcends its traditional
            boundaries and becomes a pivotal political agenda to respond to the
            health needs of the citizens.
          </p>
        </div>

        <div className=" gap-5 flex flex-col">
          <div className=" flex items-center gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
              >
                <path
                  d="M19 11.0833C17.4343 11.0833 15.9037 11.5476 14.6018 12.4175C13.2999 13.2874 12.2852 14.5238 11.686 15.9704C11.0868 17.417 10.93 19.0088 11.2355 20.5445C11.541 22.0801 12.295 23.4908 13.4021 24.5979C14.5093 25.7051 15.9199 26.4591 17.4556 26.7645C18.9913 27.07 20.583 26.9132 22.0296 26.314C23.4762 25.7149 24.7126 24.7002 25.5825 23.3983C26.4524 22.0964 26.9167 20.5658 26.9167 19M20.5834 4.83711C17.648 4.5078 14.6828 5.0988 12.098 6.52838C9.51313 7.95796 7.43644 10.1555 6.15513 12.8169C4.87383 15.4783 4.45123 18.4722 4.94581 21.3843C5.44039 24.2964 6.8277 26.9828 8.91583 29.072C11.004 31.1612 13.6897 32.5499 16.6016 33.0459C19.5134 33.5419 22.5075 33.1209 25.1696 31.8409C27.8316 30.5609 30.0302 28.4853 31.4611 25.9012C32.8919 23.3171 33.4844 20.3523 33.1566 17.4167M23.75 14.25V9.5L28.5 4.75V9.5H33.25L28.5 14.25H23.75ZM23.75 14.25L19 19M17.4167 19C17.4167 19.4199 17.5835 19.8227 17.8805 20.1196C18.1774 20.4165 18.5801 20.5833 19 20.5833C19.42 20.5833 19.8227 20.4165 20.1196 20.1196C20.4166 19.8227 20.5834 19.4199 20.5834 19C20.5834 18.5801 20.4166 18.1773 20.1196 17.8804C19.8227 17.5835 19.42 17.4167 19 17.4167C18.5801 17.4167 18.1774 17.5835 17.8805 17.8804C17.5835 18.1773 17.4167 18.5801 17.4167 19Z"
                  stroke="#078033"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-primary font-semibold text-2xl">
              OUR MISSION
            </span>
          </div>

          <p className="text-[#797979] text-xl">
            At Swasthya Khabar Foundation, we aim to catalyse positive
            transformations in Nepal's health governance landscape. We strive to
            recognise and motivate Nepal's health workers, leverage the
            collective expertise of the Nepali diaspora, and amplify the voices
            of citizens in shaping evidence-based health policies. Through
            high-profile events and sustained advocacy efforts, we aim to raise
            the political profile of health to create a healthier and more
            equitable Nepal, where the well-being of every citizen is
            prioritised.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
