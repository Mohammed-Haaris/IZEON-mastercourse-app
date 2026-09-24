/** @format */

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Will This Actually Help Me Crack Google Or Amazon?",
      answer:
        "Yes, the curriculum and problem sets are specifically tailored to align with top tier product-based company interview patterns.",
    },
    {
      question: "I Have A Full-Time Job. Do I Have Enough Time For This?",
      answer:
        "The program is self-paced with structured roadmaps designed specifically for working professionals with tight schedules.",
    },
    {
      question: "What If My DSA Is Very Weak Right Now?",
      answer:
        "The roadmap starts right from fundamentals and progresses step-by-step from beginner to advanced topics.",
    },
    {
      question:
        "How Is This Different From Free YouTube Content Or Cheaper Courses?",
      answer:
        "You get a curated, distraction-free roadmap, verified cheatsheets, interview banks, and personalized reviews rather than scattered tutorials.",
    },
    {
      question:
        "How Is This Different From Free YouTube Content Or Cheaper Courses?",
      answer:
        "Structured guidance saves hundreds of hours of trial and error with direct actionable feedback.",
    },
    {
      question: "What If I Don't See Results?",
      answer:
        "Consistent execution of the framework ensures noticeable improvements in your problem-solving speed and interview confidence.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen w-full bg-[#0D1117] px-4 py-16 text-white md:px-8 ">
      {/* Title */}
      <div className="text-center">
        <h2 className=" text-3xl font-bold tracking-wide text-white md:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ Accordion List */}
      <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="cursor-pointer rounded bg-white px-6 py-4 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="select-none text-xl font-bold text-gray-800">
                  {isOpen ? <Minus /> : <Plus />}
                </span>
                <span className="text-base font-bold text-gray-800 md:text-lg">
                  {faq.question}
                </span>
              </div>

              {/* Collapsible Answer */}
              {isOpen && (
                <div className="mt-3 pl-7 text-sm leading-relaxed text-gray-600 md:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
