/** @format */

import { statistics } from "./ListOutData";
import { brands } from "./ListOutData";
import bgCardImage from "../../../../assets/bgCardImage.webp";

const ListOut = () => {
  return (
    <>
      {/* listout */}
      <section className="w-full bg-[#fbfbfb] py-16 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {statistics.map((item) => (
              <div
                key={item.id}
                className="bg-white/90 border border-gray-200/80 rounded-2xl py-8 px-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 relative overflow-hidden"
                style={{
                  backgroundImage: `url(${bgCardImage})`,
                }}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-600 tracking-tight">
                    {item.numInformation}
                  </h3>
                  <p className="mt-2 md:text-2xl sm:text-base font-medium text-gray-500">
                    {item.information}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center">
            <h4 className="text-2xl md:text-3xl font-bold text-[#2e3744] tracking-tight mb-8">
              Learners From Brands Like
            </h4>

            {/* brands */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2.5 sm:gap-4 py-2 w-full max-w-sm sm:max-w-none mx-auto">
              {brands
                ?.filter((brand) => Boolean(brand?.logo))
                .map((brand) => (
                  <div
                    key={brand.id}
                    className="bg-white border border-gray-200 rounded-xl px-3 py-2.5 h-12 flex items-center justify-center shadow-xs"
                  >
                    <img
                      src={brand.logo}
                      alt={`${brand.name || "Brand"} logo`}
                      className="max-h-5 w-auto max-w-[75px] sm:max-w-[85px] object-contain"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListOut;
