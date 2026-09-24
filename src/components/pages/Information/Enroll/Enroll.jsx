/** @format */

const EnrollInformation = () => {
  const bonuses = [
    {
      id: 1,
      badge: "Bonus 1",
      title: "DSA Roadmap & Curated Problem List (Beginner → Advanced)",
      worth: "Worth 2000/-",
    },
    {
      id: 2,
      badge: "Bonus 2",
      title: "System Design Cheatsheets (LLD + HLD)",
      worth: "Worth 2000/-",
    },
    {
      id: 3,
      badge: "Bonus 3",
      title: "Resume Templates + Personalized Review",
      worth: "Worth 2000/-",
    },
    {
      id: 4,
      badge: "Bonus 4",
      title: "LinkedIn Optimization Guide",
      worth: "Worth 2000/-",
    },
    {
      id: 5,
      badge: "Bonus 5",
      title: "Company-Wise Interview Question Bank",
      worth: "Worth 2000/-",
    },
    {
      id: 6,
      badge: "Bonus 6",
      title: "Full Recording Access + Revision Material",
      worth: "Worth 2000/-",
    },
  ];

  return (
    <section className="w-full bg-white px-4 py-8 md:px-10">
      {/* Heading */}
      <div className="pt-4 text-center md:pt-10">
        <h1 className="text-2xl font-bold text-gray-700 md:text-4xl">
          Enroll Today And
          <span className="text-[#257AE9]"> Get These Bonuses</span>
        </h1>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
        {bonuses.map((bonus) => (
          <div
            key={bonus.id}
            className="relative flex flex-col justify-between rounded-xl border-2 border-blue-400 bg-[#F4F9FF] p-6 pb-4 shadow-sm"
          >
            {/* 1. Updated Badge: Moved out of flow and applied absolute positioning */}
            <span className="absolute left-6 top-[-18px] inline-block rounded-md bg-[#2563EB] px-6 py-1.5 text-sm font-semibold text-white">
              {bonus.badge}
            </span>

            {/* Title - Add mt-4 to compensate for the top padding being free of the badge */}
            <h3 className="mt-4 text-base font-semibold text-gray-700 md:text-lg">
              {bonus.title}
            </h3>

            {/* Worth Pill */}
            <div className="mt-6">
              <span className="inline-block rounded-md bg-[#BFDBFE] px-4 py-1 text-sm font-medium text-gray-700">
                {bonus.worth}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnrollInformation;
