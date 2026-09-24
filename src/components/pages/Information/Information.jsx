/** @format */

import stringData from "../../../stringValues/stringValues";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";

const Information = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans antialiased pb-24 selection:bg-blue-500 selection:text-white">
      {/* 1. Top Bar Notice Section */}
      <section className="bg-[#1A73E8] py-3 text-center shadow-sm">
        <p className="px-4 text-xs font-semibold uppercase tracking-wider text-white sm:text-sm md:text-base">
          {stringData.header}
        </p>
      </section>

      {/* 2. Main Hero Context Section */}
      <section className="px-4 pt-10 pb-6 mx-auto max-w-6xl text-center md:pt-16">
        {/* Main Dynamic Headline */}
        <h1 className="text-3xl font-extrabold tracking-tight text-[#1E293B] sm:text-4xl md:text-5xl md:leading-[1.25] max-w-5xl mx-auto">
          {stringData.header_information.partOne}{" "}
          <span className="text-[#1A73E8]">
            {stringData.header_information.partTwo}
          </span>{" "}
          {stringData.header_information.partThree}
        </h1>

        {/* Sub-headline Paragraph */}
        <p className="mt-6 text-base font-normal leading-relaxed text-[#5A6E85] md:text-xl max-w-4xl mx-auto">
          Follow A Proven{" "}
          <span className="font-bold text-[#1A73E8]">
            4-Month Roadmap Covering DSA + System Design
          </span>{" "}
          — Built For Working Engineers Who Want An Offer Letter, Not Just A
          Certificate.
        </p>
      </section>

      {/* 3. Mentor Information & Masterclass Dynamic Cards Grid */}
      <section className="px-4 mt-8 mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:items-stretch">
          {/* Left Column: Profile Accent Container */}
          <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm w-full md:w-auto">
            {/* Mock Portrait Space */}
            <div className="relative flex-shrink-0 w-24 h-24 bg-gradient-to-tr from-slate-200 to-slate-100 rounded-full border-2 border-white shadow-md overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-slate-400">
                [ Profile Image ]
              </div>
            </div>

            {/* Experience Badges Container */}
            <div className="flex flex-col gap-2">
              <div className="px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-[10px] font-bold text-amber-800 tracking-wide uppercase">
                  {stringData.stats.exp}
                </p>
              </div>
              <div className="px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-[10px] font-bold text-blue-800 tracking-wide uppercase">
                  {stringData.stats.mentored}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Masterclass Logistics Detail Card */}
          <div className="flex-1 w-full bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between">
            {/* Card Header Label */}
            <div className="bg-slate-50 border-b border-slate-200 py-2.5 px-4 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Masterclass Details
              </p>
            </div>

            {/* Split Details Container */}
            <div className="grid grid-cols-2 divide-x divide-slate-100 p-4 text-center items-center flex-1">
              {/* Date Box */}
              <div className="flex flex-col items-center justify-center text-center space-y-1">
                {/* Lucide Calendar icon centered above the text */}
                <div className="text-slate-500 mb-1 flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>

                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Date
                </p>

                <p className="text-sm font-bold text-slate-800">
                  {stringData.stats.date}
                </p>
              </div>

              {/* Time Box */}
              <div className="flex flex-col items-center justify-center text-center space-y-1">
                {/* Lucide Clock icon centered above the text */}
                <div className="text-slate-500 mb-1 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>

                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Time
                </p>

                <p className="text-sm font-bold text-slate-800">
                  {stringData.stats.time}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sticky Bottom Action Prompt */}
      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-slate-100 p-4 shadow-[0_-8px_30px_rgb(0,0,0,0.04)] z-50 flex justify-center">
        <button
          onClick={() => navigate("/studentform")}
          className="w-full max-w-xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-extrabold text-base tracking-wider uppercase py-4 px-8 rounded-xl shadow-lg shadow-rose-500/20 active:scale-[0.99] transition-all duration-150"
        >
          Enroll Now For ₹ 9
        </button>
      </div>
    </div>
  );
};

export default Information;
