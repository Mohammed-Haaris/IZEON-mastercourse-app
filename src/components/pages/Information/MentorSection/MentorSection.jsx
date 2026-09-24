/** @format */

import React from "react";

const MentorSection = () => {
  return (
    <section className="w-full bg-[#0b1016] text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-14">
        {/* Left Column: Mentor Visual Card */}
        <div className="w-full max-w-[340px] sm:max-w-[380px] shrink-0">
          <div className="relative rounded-3xl border border-sky-400/40 bg-gradient-to-b from-[#173859] via-[#0e2238] to-[#0a1523] p-4 pt-6 shadow-[0_0_50px_-10px_rgba(56,189,248,0.25)] overflow-hidden text-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Top Stat Badges */}
            <div className="relative z-10 flex justify-between items-start px-2 mb-2">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl py-1.5 px-2.5 text-center shadow-md border border-gray-100">
                <span className="block text-xs font-black text-gray-900 leading-tight">
                  10+ YEARS
                </span>
                <span className="block text-[8px] font-bold text-gray-500 tracking-wider">
                  OF INDUSTRY EXPERIENCE
                </span>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-xl py-1.5 px-2.5 text-center shadow-md border border-gray-100">
                <span className="block text-[8px] font-bold text-gray-500 tracking-wider">
                  MENTORED
                </span>
                <span className="block text-sm font-black text-gray-900 leading-none">
                  500+
                </span>
                <span className="block text-[8px] font-bold text-gray-500 tracking-wider">
                  ENGINEERS
                </span>
              </div>
            </div>

            {/* Mentor Image */}
            <div className="relative z-0 -mt-3 mb-2 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
                alt="Shubham Jain"
                className="w-48 sm:w-56 h-56 sm:h-64 object-cover object-top rounded-2xl"
              />
            </div>

            {/* Bottom Floating White Info Box */}
            <div className="relative z-10 bg-white rounded-2xl py-3 px-4 shadow-lg text-gray-900 border border-gray-100">
              <h4 className="text-base sm:text-lg font-extrabold text-[#111827]">
                Shubham Jain
              </h4>
              <p className="text-[10px] sm:text-[11px] font-semibold text-gray-500 uppercase tracking-tight mt-0.5">
                Ex-Tech Lead at Google & Amazon
              </p>
              <p className="text-[9px] text-gray-400 font-medium">
                FROM A TIER-2 CITY (JALGAON)
              </p>

              {/* Logos */}
              <div className="flex items-center justify-center gap-5 mt-2 pt-1 border-t border-gray-100">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Google"
                  className="h-4 object-contain"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                  alt="Amazon"
                  className="h-3.5 object-contain"
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
