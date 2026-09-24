/** @format */

import { curriculum } from "./LearnList";

const Learn = () => {
  return (
    <>
      <section className="w-full text-center bg-[#1D2545] text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
        <h1 className="text-2xl text-4xl  lg:text-5xl font-medium tracking-tight mb-3">
          What You'll Learn
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-medium text-gray-300 mb-10 sm:mb-14">
          Everything You Need To Go From Stuck To Shortlisted{" "}
          <span className="text-[#3b82f6] font-semibold">— In 4 Months</span>
        </p>

        <div className="grid grid-cols-1 md:px-30 md:grid-cols-2 gap-4 sm:gap-6 text-left">
          {curriculum.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-3 sm:p-4 shadow-lg border border-gray-100 flex flex-col justify-start"
            >
              {/* blue header */}
              <div className="bg-[#2563eb] text-white text-center font-bold text-base sm:text-lg py-3 px-4 rounded-xl shadow-xs">
                {item.title}
              </div>

              {/* card body */}
              <div className="p-4 sm:p-5 flex-1 flex items-center">
                <p className="text-gray-700 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal text-center sm:text-left">
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
