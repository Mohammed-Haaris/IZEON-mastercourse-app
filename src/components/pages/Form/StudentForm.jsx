/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Shield, Star, Zap } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const SERIF = "font-['Playfair_Display',serif]";
const SANS = "font-['Inter',sans-serif]";
const BUTTON_FONT = "font-['Poppins',sans-serif]";

// Mobile-first responsive input styles
const inputClass =
  "w-full h-11 sm:h-12 px-3.5 sm:px-4 bg-slate-50 border border-slate-300 sm:border-slate-400 rounded-lg text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition";

const labelClass =
  "block text-sm sm:text-[16px] font-medium text-slate-800 mb-1.5";

/* Phone styling matching other inputs seamlessly */
const phoneTheme = {
  "--react-international-phone-height": "46px",
  "--react-international-phone-border-radius": "8px",
  "--react-international-phone-border-color": "#cbd5e1",
  "--react-international-phone-background-color": "#f8fafc",
  "--react-international-phone-text-color": "#0f172a",
  "--react-international-phone-font-size": "15px",
  "--react-international-phone-country-selector-background-color": "#f8fafc",
  "--react-international-phone-country-selector-background-color-hover":
    "#f1f5f9",
  width: "100%",
};

const StudentForm = () => {
  const [formData, setFormData] = useState({
    studentname: "",
    email: "",
    number: "",
    jobrole: "",
    experience: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div
      className={`min-h-screen flex flex-col text-white ${SANS} bg-gradient-to-br from-[#0a0f1f] to-[#17223f]`}
    >
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 py-2.5 sm:py-3.5 px-3">
        <p className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base font-semibold text-white text-center">
          <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 fill-amber-300 text-amber-300" />
          <span>LIMITED TIME: Enrollment closes soon — Save ₹900 Today</span>
          <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 fill-amber-300 text-amber-300" />
        </p>
      </div>

      <div className="w-full max-w-[1430px] mx-auto px-3 sm:px-6 pt-3 sm:pt-4 flex-grow">
        {/* Back Link */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors py-1"
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          Go Back
        </button>

        <main className="mt-3 sm:mt-5 pb-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* LEFT: Hero Content */}
          <section className="px-1 sm:px-0">
            <h1
              className={`${SERIF} text-2xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-bold leading-tight sm:leading-[1.15] tracking-tight`}
            >
              Land A Job At Top Tech Companies Like{" "}
              <span className="text-[#ff3b3b]">Google & Amazon</span> And Unlock{" "}
              <span className="text-[#ff3b3b]">2x–5x Salary</span> Growth
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-slate-300 max-w-[620px]">
              Master DSA, System Design, Resume Building & Interview Readiness —
              and go from stuck to shortlisted in just 4 months. Join thousands
              of IT professionals already on the path to MAANG.
            </p>

            {/* <div className="mt-6 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="text-xl sm:text-2xl text-slate-400 line-through">
                ₹99
              </span>
              <span
                className={`${SERIF} text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f4c542] leading-none`}
              >
                ₹9
              </span>
              <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                Save ₹90
              </span>
            </div> */}

            {/* Reviews */}
            <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-base text-slate-300">
              <div className="flex gap-0.5 sm:gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span>4.9 out of 5 (12,400+ reviews)</span>
            </div>
          </section>

          {/* RIGHT: Form Card */}
          <section className="w-full rounded-2xl sm:rounded-[28px] bg-white p-4 sm:p-7 md:p-8 text-slate-800 shadow-2xl border border-slate-100/10">
            <header className="border-b border-slate-100 pb-4 sm:pb-6 text-center">
              <h2
                className={`${SERIF} text-xl sm:text-2xl md:text-3xl font-bold text-slate-900`}
              >
                Complete Your Enrollment
              </h2>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-[15px] text-slate-600">
                Fill in your details below to get instant access
              </p>
            </header>

            <form
              onSubmit={handleSubmit}
              className="mt-5 sm:mt-7 space-y-4 sm:space-y-4.5"
            >
              <div>
                <input
                  type="text"
                  name="studentname"
                  aria-label="First Name"
                  value={formData.studentname}
                  onChange={handleChange}
                  placeholder="First Name"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  aria-label="Email ID"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email ID"
                  className={inputClass}
                  required
                />
              </div>

              {/* Phone Input wrapper with full width style */}
              <div className="[&_.react-international-phone-input]:w-full [&_.react-international-phone-input]:h-[46px] [&_.react-international-phone-input]:text-sm sm:[&_.react-international-phone-input]:text-base">
                <PhoneInput
                  defaultCountry="in"
                  value={formData.number}
                  onChange={(phone) =>
                    setFormData((prev) => ({ ...prev, number: phone }))
                  }
                  style={phoneTheme}
                  inputProps={{
                    name: "number",
                    required: true,
                    "aria-label": "Phone Number",
                  }}
                />
              </div>

              <div>
                <label htmlFor="jobrole" className={labelClass}>
                  IT Job Role
                </label>
                <input
                  id="jobrole"
                  type="text"
                  name="jobrole"
                  value={formData.jobrole}
                  onChange={handleChange}
                  placeholder="e.g. Frontend Developer"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="experience" className={labelClass}>
                  Years Of Experience
                </label>
                <input
                  id="experience"
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g. 2 Years"
                  className={inputClass}
                  required
                />
              </div>

              {/* CTA Button */}
              <button
                type="submit"
                className={`${BUTTON_FONT} mt-2 flex h-12 sm:h-14 w-full items-center justify-center gap-2.5 rounded-xl bg-[#28a745] text-base sm:text-lg font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-[#218838] active:scale-[0.98]`}
              >
                <span>Complete Order</span>
                <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white">
                  <ArrowRight
                    className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#28a745]"
                    strokeWidth={3}
                  />
                </span>
              </button>
            </form>
          </section>
        </main>
      </div>

      <footer className="bg-[#0b1226] py-4 text-center text-xs sm:text-sm text-[#5f7399]">
        All Rights Reserved
      </footer>
    </div>
  );
};

export default StudentForm;
