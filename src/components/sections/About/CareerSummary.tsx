"use client";
import { careerSummaryType } from "@/types/careerSummary";
import React, { useState } from "react";

type CareerSummaryProps = {
  data: careerSummaryType[];
};

const CareerSummary = ({ data }: CareerSummaryProps) => {
  const categories = [...new Set(data?.map((item) => item.category))];

  const [activeTab, setActiveTab] = useState(categories?.[0]);

  const Summary = () => {
    const response = data?.filter((item) => item.category === activeTab);

    return (
      <>
        {response?.map((item: careerSummaryType) => {
          return (
            <ul key={item?.id} className="mb-3">
              <li className="text-[#7e7f88] font-semibold">{item.title}</li>
              <li className="text-[#7e7f88] ">{item.category}</li>
            </ul>
          );
        })}
      </>
    );
  };

  return (
    <div className="my-5">
      <div>
        <ul className="md:flex">
          {categories?.map((item) => {
            return (
              <li
                key={item}
                onClick={() => setActiveTab(item)}
                className="mr-5 mb-2 text-sm  font-semibold  relative inline-block group cursor-pointer"
              >
                <span className={`${activeTab == item && "text-[#ff0044]"}`}>
                  {item}
                </span>

                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-[40%] bg-[#ff0044]  ${
                    activeTab == item && "transition-all duration-500 w-full"
                  } `}
                />
              </li>
            );
          })}
        </ul>

        <div className="my-5">
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default CareerSummary;
