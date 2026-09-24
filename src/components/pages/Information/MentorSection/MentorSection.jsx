/** @format */

import React from "react";

const MentorSection = () => {
  return (
    <section className="w-full bg-[#0b1016] text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-14">
        {/* Left Column: Mentor Visual Card */}
        <div className="w-full max-w-[320px] sm:max-w-[340px] shrink-0 mx-auto lg:mx-0">
          <div className="relative rounded-[2.5rem] border border-sky-400/40 bg-gradient-to-b from-[#1b507f] via-[#0f2a47] to-[#0a1829] px-3 pt-6 pb-4 shadow-[0_0_50px_rgba(56,189,248,0.3)] overflow-hidden">
            {/* Inner Electric Cyan Spotlight Rings */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(56,189,248,0.45)_0%,rgba(14,34,56,0.85)_65%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full border border-sky-300/20 blur-xs pointer-events-none" />

            {/* Top Floating Stat Badges */}
            <div className="relative z-20 flex justify-between items-start gap-2 px-1">
              {/* 10+ Years Badge */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl py-2 px-2.5 text-center shadow-md border border-white/60 min-w-[95px]">
                <div className="text-[13px] font-black text-slate-900 leading-tight">
                  10+ YEARS
                </div>
                <div className="text-[7.5px] font-bold text-slate-500 uppercase tracking-tight leading-tight mt-0.5">
                  OF INDUSTRY <br /> EXPERIENCE
                </div>
              </div>

              {/* Mentored 500+ Badge */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl py-2 px-2.5 text-center shadow-md border border-white/60 min-w-[95px]">
                <div className="text-[7.5px] font-bold text-slate-500 uppercase tracking-tight leading-tight">
                  MENTORED
                </div>
                <div className="text-sm font-black text-slate-900 leading-tight my-0.5">
                  500+
                </div>
                <div className="text-[7.5px] font-bold text-slate-500 uppercase tracking-tight leading-tight">
                  ENGINEERS
                </div>
              </div>
            </div>

            {/* Center Mentor Cutout Portrait */}
            <div className="relative z-10 flex justify-center -mt-4 -mb-8 pointer-events-none">
              <img
                src="src/assets/mentorImage.png" /* Use your cutout transparent PNG here */
                alt="Shubham Jain"
                className="w-56 sm:w-60 h-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
              />
            </div>

            {/* Bottom Frosted Name Card */}
            <div className="relative z-20 bg-white/95 backdrop-blur-md rounded-2xl py-3 px-4 shadow-[0_10px_25px_rgba(0,0,0,0.3)] border border-white/80 text-center text-slate-900">
              <h4 className="text-[17px] font-extrabold text-slate-900 tracking-tight leading-none">
                Shubham Jain
              </h4>
              <p className="text-[10px] font-bold text-slate-600 uppercase tracking-tight mt-1">
                EX-TECH LEAD AT GOOGLE & AMAZON
              </p>
              <p className="text-[8.5px] font-medium text-slate-400 uppercase tracking-wider mt-0.5">
                FROM A TIER-2 CITY (JALGAON)
              </p>

              {/* Brand Logos */}
              <div className="flex items-center justify-center gap-6 mt-2 pt-1.5 border-t border-slate-100">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Google"
                  className="h-3.5 object-contain"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                  alt="Amazon"
                  className="h-3 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Details */}
        <div className="flex-1 space-y-6">
          {/* Search-bar style header tag */}
          <div className="inline-flex items-center gap-2.5 bg-[#142333]/80 border border-[#1e3a5a] text-[#7dd3fc] px-4 py-2 rounded-xl text-lg sm:text-xl font-medium shadow-inner">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="text-gray-300 font-semibold tracking-wide">
              Shubham Jain
            </span>
          </div>

          {/* Subtitle */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-100 leading-snug">
            He's Not Just a Coach. He's Been on the Other Side of the Table.
          </h3>

          {/* Body Narrative */}
          <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
            <p>
              Shubham Sanjay Jain grew up in Jalgaon — a Tier-2 city where
              nobody told him how to get into big tech. No IIT tag. No
              connections. No shortcut.
            </p>

            <p className="font-semibold text-white underline decoration-gray-500 decoration-1 underline-offset-4">
              He figured it out anyway.
            </p>

            <p>
              He went on to become a Tech Lead at Google, worked alongside James
              Gosling (the creator of Java), built systems used by millions of
              users, and personally interviewed 300+ candidates at Google.
            </p>

            <p>
              He's seen exactly why engineers fail — not because they're not
              smart enough, but because nobody gave them the right direction.
            </p>

            <p>
              That's why he built this program. So you don't have to waste years
              figuring it out the hard way like he did.
            </p>
          </div>

          {/* Quote Pill Card */}
          <div className="bg-[#122338]/70 border border-[#1e3a58] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-md">
            <div className="bg-sky-500 text-white rounded-full p-1 mt-0.5 shrink-0 flex items-center justify-center">
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
            <blockquote className="text-gray-200 text-sm sm:text-[15px] font-medium leading-relaxed italic">
              "You don't need to be a genius to crack these companies. You just
              need the right direction and consistency." —{" "}
              <span className="not-italic font-semibold text-white">
                Shubham Sanjay Jain
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
