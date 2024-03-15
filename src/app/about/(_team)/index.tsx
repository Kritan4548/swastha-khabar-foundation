import { User2Icon } from "lucide-react";
import Image from "next/image";
import React from "react";

export type Member = {
  name: string;
  role: string;
  image?: string;
};

const Member = ({ image, name, role }: Member) => {
  return (
    <div className="flex gap-3 border rounded-md p-3 items-center">
      <div className="bg-gray-100 h-32 w-32 border rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
        {image ? (
          <Image
            className="h-full w-full object-cover"
            src={image}
            alt={name}
            height={500}
            width={500}
            objectPosition="center"
          />
        ) : (
          <User2Icon />
        )}
      </div>

      <div className=" w-full flex flex-col">
        <span className="text-[#212529] text-xl font-bold">{name}</span>
        <span className="text-[#797979] text-base">{role}</span>
      </div>
    </div>
  );
};

function Index() {
  const TEAMS = {
    board_and_management: [
      {
        name: "Anil Nyaupane",
        role: "Media Entrepreneur",
        image: "/assets/members/anil_nyaupane.jpg",
      },
      {
        name: "Dr. Amit Bhandari",
        role: "Health, Nutrition & Development Consultant",
        image: "/assets/members/amit_bhandari.jpeg",
      },
      {
        name: "Dr. Subash Pyakurel",
        role: "Healthcare Innovator",
        image: "/assets/members/subash_pyakurel.jpg",
      },
      {
        name: "Ranju  Mehata",
        role: "Public Health Expert",
        image: "/assets/members/ranju_mehata.jpeg",
      },
      {
        name: "Manish Gautam",
        role: "Public Health Research Designer & Data Expert",
        image: "/assets/members/manish_gautam.jpeg",
      },
    
      {
        name: "Narmada Nyaupane",
        role: "President, SwasthyaKhabar.com",
        image: "/assets/members/namrada_neupane.jpeg",
      },
      {
        name: "Prabin Dhakal",
        role: "Editor, SwasthyaKhabar.com",
        image: "/assets/members/praveen_dhakal.jpeg",
      },
      {
        name: "Dhan Bahadur Khadka",
        role: "Executive Editor, SwasthyaKhabar.com",
        image: "/assets/members/dhan_bahadur_khadka.jpg",
      },
    ],
    advisors: [
      {
        name: "Prof. Dr. Kiran Regmi",
        role: "Former Health Secretary, MOHP",
        image: "/assets/members/kiran_regmi.jpg",
      },
      {
        name: "Dr. Mangal Rawal",
        role: "Vice Chancellor, Karnali Academy Of Health Sciences",
        image: "/assets/members/mangal_rawal.jpeg",
      },
      {
        name: "Dr. Lochan Karki",
        role: "Rector, National Academy of Medical Sciences",
        image: "/assets/members/lochan_karki.jpg",
      },
      {
        name: "Jyoti Baniya",
        role: "Advocate/Chairman Forum for Protection of Consumer Rights Nepal",
        image: "/assets/members/jyoti_baniya.jpg",
      },
      {
        name: "Dr. Bhoj Raj Adhikari",
        role: "Consultant Physician, Associate Professor, NAMS",
        image: "/assets/members/bhoj_raj_adhikari.jpeg",
      },
      {
        name: "Sudip Pokhrel",
        role: "Health Policy Advisor",
        image: "/assets/members/sudip_pokhrel.jpeg",
      },
      {
        name: "Amit Aryal",
        role: "Health System Advisor",
        image: "/assets/members/amit_aryal.jpg",
      },
      {
        name: "Er. Rajendra Prasad Poudel",
        role: "Digital Health Consultant",
        image: "/assets/members/rajendra_prasad.png",
      },
    ],
    management: [
      {
        name: "Durga Dulal",
        role: "Focal, Government Liaison",
        image: "/assets/members/durga_dulal.png",
      },
      {
        name: "Dr. Prakash Banjade",
        role: "Health Policy Researcher",
        image: "/assets/members/prakash_banjade.png",
      },
      {
        name: "Romika Neupane",
        role: "Program Coordinator",
        image: "/assets/members/romika_neupane.jpg",
      },
      {
        name: "Ashim Neupane",
        role: "Research and Outreach",
        image: "/assets/members/ashim_neupane.png",
      },
      {
        name: "Tripti Acharya",
        role: "Accountant",
        image: "/assets/members/tripti.jpg",
      },
      {
        name: "Dilip Gautam",
        role: "Office Assistant",
        image: "/assets/members/dilip_gautam.png",
      },
      {
        name: "Nimesh Jung Rai",
        role: "Photo/Videographer",
        image: "/assets/members/nimesh_rai.png",
      },
      {
        name: "Rajesh Lama",
        role: "Transportation Assistant",
        image: "/assets/members/rajesh_lama.jpg",
      },
    ],
  };

  return (
    <div className="py-[40px] ">
      <div className="px-5 md:px-0 w-full md:w-4/5 2xl:w-3/5 mx-auto">
        <div className="space-y-4">
          <p className="text-[#212529] text-3xl font-bold mb-[10px]">
            OUR TEAM
          </p>

          <div className=" flex flex-col gap-10">
            <div className=" flex flex-col gap-2">
              <span className="text-[#797979] text-xl font-medium">
                Advisors
              </span>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
                {TEAMS.advisors.map((member: Member) => (
                  <Member
                    key={member.name}
                    name={member.name}
                    role={member.role}
                    image={member.image}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[#797979] text-xl font-medium ">
                Board Members
              </span>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
                {TEAMS.board_and_management.map((member: Member) => (
                  <Member
                    key={member.name}
                    name={member.name}
                    role={member.role}
                    image={member.image}
                  />
                ))}
              </div>
            </div>

            <div className=" flex flex-col gap-2">
              <span className="text-[#797979] text-xl font-medium">
                Management Team
              </span>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
                {TEAMS.management.map((member: Member) => (
                  <Member
                    key={member.name}
                    name={member.name}
                    role={member.role}
                    image={member.image}
                  />
                ))}
              </div>
            </div>

            {/* <div className=" flex flex-col gap-2">
              <span className="text-[#797979] text-[16px] font-medium">
                Staff
              </span>

              <div className=" grid grid-cols-1 md:grid-cols-4 gap-2">
                <Member />
                <Member />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
