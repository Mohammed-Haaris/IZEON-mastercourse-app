/** @format */

const Eligiblity = () => {
  const forYouList = [
    "You're a software engineer (0–13 years of experience) stuck in a service company",
    "You've tried preparing on your own but keep losing momentum",
    "You feel your DSA or System Design isn't strong enough for top companies",
    "You're applying but your resume isn't getting shortlisted",
    "You freeze up in interviews even when you know the answer",
    "You want structured guidance — not just another course to complete",
  ];

  const notForYouList = [
    "You're looking for a shortcut with zero effort",
    "You're not willing to commit 1–2 hours daily",
    "You just want a certificate to add to your LinkedIn",
  ];

  return (
    <>
      <section className="w-full bg-[#fbfbfb] py-14 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-5xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2d3748] text-center mb-10 sm:mb-12">
            Who This Is For
          </h2>

          {/* 2-Column Responsive Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Left Column: This Is For You If */}
            <div className="space-y-3">
              {/* Header Badge */}
              <div className="inline-block bg-[#22c55e] text-white text-sm sm:text-base font-semibold px-6 py-2.5 rounded-xl shadow-xs">
                This Is NOT For You If:
              </div>

              {/* List Cards */}
              <div className="space-y-3 pt-1">
                {forYouList.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-xs hover:border-[#86efac] transition-colors duration-150"
                  >
                    <div className="bg-[#22c55e] text-white rounded-md p-1 mt-0.5 shrink-0 flex items-center justify-center">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-[#334155] text-sm sm:text-[15px] font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: This Is NOT For You If */}
            <div className="space-y-3">
              {/* Header Badge */}
              <div className="inline-block bg-[#ef4444] text-white text-sm sm:text-base font-semibold px-6 py-2.5 rounded-xl shadow-xs">
                This Is For You If:
              </div>

              {/* List Cards */}
              <div className="space-y-3 pt-1">
                {notForYouList.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#fef2f2] border border-[#fecaca] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-xs hover:border-[#fca5a5] transition-colors duration-150"
                  >
                    <div className="bg-[#ef4444] text-white rounded-md p-1 mt-0.5 shrink-0 flex items-center justify-center">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-[#334155] text-sm sm:text-[15px] font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Eligiblity;
