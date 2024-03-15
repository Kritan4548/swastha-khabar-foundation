import RegisterButton from "@/components/common/register-button";
import { POLICY_DIALOUG, PROJECT_DATA } from "@/data/projects_data";
import Image from "next/image";
import { TbCircleCheckFilled } from "react-icons/tb";

import Health1 from "@/public/assets/gallery/health1.jpg";
import Health2 from "@/public/assets/gallery/health2.jpg";

const HealtStatus = ({ description }: { description: string }) => {
  return (
    <div className="flex flex-col gap-12">
      {description}
      <div className="flex flex-row justify-between">
        <div className="flex items-center justify-center">
          <Image
            className="rounded-md"
            src={Health1}
            alt="project-image"
            width={500}
            height={300}
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="rounded-md"
            src={Health2}
            alt="project-image"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default async function ProjectDetails({ params }: any) {
  const { handle } = params;
  let project: any;
  const findProject = PROJECT_DATA.find((item) => item.slug == handle);
  const findDialogue = POLICY_DIALOUG.find((item) => item.slug == handle);

  project = findDialogue ? findDialogue : findProject;
  return (
    <div>
      {project && (
        <div className="px-5 md:px mx-auto w-full md:w-4/5 2xl:w-3/5">
          <div className="my-24">
            <div className="space-y-3 mb-[34px]">
              <p className="text-[#4D4D4D] font-bold text-3xl">
                {project.title}
              </p>
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
            <p className="font-bold">{project?.subtitle}</p>
          </div>

          <div className="flex flex-col gap-24 mb-24">
            <div className="flex items-center justify-center">
              <Image
                src={project?.image as string}
                alt="project-image"
                width={500}
                height={300}
              />
            </div>

            {handle === "symposium" && (
              <div className="flex flex-col gap-24 mb-24">
                <div className="space-y-4">
                  <h2 className="font-bold text-3xl">Overview and Context</h2>
                  <div className="space-y-3">
                    {project?.contexts?.map((context: any, index: number) => (
                      <div key={index} className="flex gap-2 items-baseline">
                        
                        <p key={index} className="">
                          {context}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="font-bold text-3xl">
                  Focus of the Symposium
                  </h2>
                  <div className="space-y-3">
                    {project?.aspects?.map((context: any, index: number) => (
                      <div key={index} className="flex gap-2 items-baseline">
                        
                        <p key={index} className="">
                          {context}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="font-bold text-3xl">Symposium Goal and Objectives:</h2>
                  <div className="space-y-3">
                    {project.keys?.map((context: any, index: number) => (
                      <div key={index} className="flex gap-2 items-baseline">
                        
                        <p key={index} className="">
                          {context}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="font-bold text-3xl">Symposium Themes</h2>
                  <div className="space-y-3">
                    {project.themes?.map((context: any, index: number) => (
                      <div key={index} className="flex gap-2 items-baseline">
                        
                        <p key={index} className="">
                          {context}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="font-bold text-3xl">Symposium Structure</h2>
                  <div className="space-y-3">
                    {project.structure?.map((context: any, index: number) => (
                      <div key={index} className="flex gap-2 items-baseline">
                        
                        <p key={index} className="">
                          {context}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {handle == "health-status" && (
              <HealtStatus description={project.description} />
            )}

            {project.register && <RegisterButton />}
          </div>
        </div>
      )}
    </div>
  );
}
