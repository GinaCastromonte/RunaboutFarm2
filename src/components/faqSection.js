"use client";
import React, { useState } from "react";

const FaqSection = () => {
  const [isOpen, setIsOpen] = useState(new Array(4).fill(false));

  const toggleAccordion = (index) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <section data-aos="zoom-in" className="faq section">
      <div className="container mx-auto">
        <h2 className="faq__title h2 text-center mb-[50px] relative">
          <span className="text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text">
            Frequently Asked Questions:
          </span>
        </h2>

        <div className="max-w-5xl mx-auto">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none ${
                isOpen[index] ? "open" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center justify-between mb-[10px]">
                <h4 className="h4">
                  {index === 0
                    ? "Where do all the animals come from ?"
                    : index === 1
                    ? "Do you breed the animals?"
                    : index === 2
                    ? "What happens to all the animals rescued that aren't physically able to be on the petting zoo?"
                    : "What is the usual duration of the petting zoo experience ?"}
                </h4>

                <div className="faq__btn text-accent">
                  <i
                    className={`ri ${
                      isOpen[index] ? "ri-subtract-fill" : "ri-add-fill"
                    } text-2xl`}
                  ></i>
                </div>
              </div>

              <div className="faq__answer h-0 overflow-hidden">
                <p className="font-light">
                  {index === 0
                    ? `Runabout Farm has been saving horses, ponies, and other animals from slaughterhouses and abusive homes for many years. The farm purchases these animals and provides them with veterinary care and medication if needed. Only after their physical and mental health has been fully restored, they are accepted into the pony party program`
                    : index === 1
                    ? `No, we choose to rescue and rehabilitate animals in need, showering them with love and kindness, rather than contribute to their overpopulation through breeding. Our commitment to providing them with a forever home inspires us every day.`
                    : index === 2
                    ? `Any horses and ponies that do not meet our program's standards are allowed to live out their lives happily in a pasture at Runabout Farm. Currently, Runabout Farm is home to several animals, including horses, ponies, goats, ferrets, chickens, ducks, Guinea pigs, and rabbits.`
                    : `The petting zoo experience usually lasts for 1 hour. However, please give us a call for more information and to book your experience.`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
