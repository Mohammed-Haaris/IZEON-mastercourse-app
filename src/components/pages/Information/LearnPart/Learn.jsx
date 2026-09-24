/** @format */

import { curriculum } from "./LearnList";

const Learn = () => {
  return (
    <>
      <section className="w-full text-center bg-[#030B17] text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
        <h1 className="text-2xl text-4xl  lg:text-5xl font-medium tracking-tight mb-3">
          What You'll Learn
        </h1>
        <p className="text-base sm:text-lg md:text-3xl font-medium text-gray-300 mb-10 md:mb-8">
          Everything You Need To Go From Stuck To Shortlisted{" "}
          <span className="text-[#3b82f6] font-semibold">— In 4 Months</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mx-auto px-2 sm:px-4 text-left">
          {curriculum.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-2 sm:p-2.5 shadow-lg border border-gray-100 flex flex-col justify-between w-full overflow-hidden"
            >
              {/* Blue Header - keeping your exact font classes */}
              <div className="bg-[#1A73E8] text-white text-center font-medium text-base md:text-2xl py-2 px-3 rounded-xl shadow-xs">
                {item.title}
              </div>

              {/* Card Body - keeping your exact font classes */}
              <div className="px-3 py-3 sm:px-4 sm:py-4 flex-1 flex items-center">
                <p className="text-gray-700 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal text-left">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Learn;
