import { GALLERY } from "@/data/gallery";
import Image from "next/image";

export default function Gallery({ params }: any) {
  const { handle } = params;
  const gallery = GALLERY.find((item) => item.slug === handle);

  return (
    <div className="py-12">
      <div className="px-5 md:px-0 w-full md:w-4/5 2xl:w-3/5 mx-auto">
        <div className="space-y-3 mb-[34px]">
          <p className="text-[#4D4D4D] font-bold text-3xl">{gallery?.title}</p>

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

        {handle == "11th-swasthya-khabar-health-award" && (
          <div className="text-md space-y-3 mb-8">
            <p>
              The Swasthya Khabar Health Award 2023, held on September 08 at
              Hotel Yak & Yeti in Kathmandu, was a momentous event that
              celebrated exceptional contributions to health care and
              sustainable development in Nepal.
            </p>

            <p>
              Rt. Hon. Prime Minister Pushpa Kamal Dahal presented the Swasthya
              Khabar Health Award as the chief guest. Likewise, the event was
              participated by cabinet ministers, political leaders, high-ranking
              bureaucrats, development partners, health professionals, and
              health stakeholders from all over Nepal demonsrating a diverse and
              infuential gathering.
            </p>

            <p>
              Under the theme 'SDGs: Health and Wellbeing for All' the awards
              were presented in ten categories with nine of them aligning with
              the vital goal three of the Sustainable Development Goals (SDGs).
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
          {gallery &&
            gallery.images.map((val, ind) => {
              return (
                <div key={ind} className="flex flex-col gap-3">
                  <Image
                    className="flex-1 object-contain bg-gray-200"
                    src={val.image}
                    width={1000}
                    height={800}
                    alt="image"
                    loading="lazy"
                  />
                  <div className="min-h-[10ch]">
                    <p className="text-base">{val.caption}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
