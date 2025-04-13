"use client";

import Button from "@/components/ui/Button";
import Img from "@/components/ui/Img";
import Modal from "@/components/ui/Modal";
import { useModalStore } from "@/store/useModalStore";

import React from "react";

const Card = () => {
  const { isOpen, setIsOpen } = useModalStore();

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="rounded relative cursor-pointer transition-all duration-300 hover:scale-110  hover:text-white "
      >
        <div className="h-[28rem]">
          <Img
            alt="development"
            className="w-full h-full object-cover rounded"
            src="https://cdn.pixabay.com/photo/2024/10/16/09/14/alps-9124288_1280.jpg"
          />
          <div className="absolute inset-0 bg-black/50 rounded" />
          <div className="absolute inset-0 flex items-center justify-center text-white  hover:bg-gradient-to-b hover:from-[rgb(240,24,74)] hover:to-[rgb(0,0,0,0.6)] rounded">
            <div className="mt-[10rem]">
              <p className="text-sm text-center mb-6">Development</p>
              <h6 className="font-bold text-[1.3rem] mt-2 mb-6 w-[80%] m-auto text-center">
                Getting tickets to the big show
              </h6>
              <Button className="text-center m-auto flex mt-5 cursor-pointer ">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="m-5 ">
          <h1 className="text-white font-bold text-1xl my-2">YouTube Clone</h1>
          <Img
            className="rounded"
            src="https://images.indianexpress.com/2024/02/YouTube-YouTube-1.jpg"
          />

          {/* <div className="aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allowFullScreen
              className="w-full h-full rounded"
            ></iframe>
          </div> */}

          <div className="my-2">
            <h6 className="text-white my-4 font-semibold">🚀 Features:</h6>
            <ul className="max-h-[12rem] overflow-scroll">
              <li className="text-white">
                ✅ Using Redux for state management
              </li>
              <li className="text-white">
                ✅ Using Api polling technique for live chat
              </li>
              <li className="text-white">✅ N-level nested comments</li>
              <li className="text-white">
                ✅ Tailwind for modern user interface
              </li>
              <li className="text-white">✅ Shimmer effect for loading</li>
              <li className="text-white">
                ✅ Debouncing for optimized Search api
              </li>
              <li className="text-white">✅ Api caching for optimized api</li>

              <li className="text-white">✅ Api caching for optimized api</li>

              <li className="text-white">✅ Api caching for optimized api</li>
            </ul>

            <div className="flex flex-wrap gap-2 my-3">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-sm">
                HTML
              </span>
              <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-sm">
                CSS
              </span>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded-sm">
                TypeScript
              </span>
            </div>

            <div className="flex gap-2">
              <a
                href="https://your-live-site.com"
                target="_blank"
                className="inline-flex items-center px-3 py-2 bg-green-100 text-green-800 text-xs font-medium rounded-full hover:bg-green-200 transition"
              >
                🔗 Live
              </a>

              <a
                href="https://github.com/your-repo"
                target="_blank"
                className="inline-flex items-center px-3 py-2 bg-gray-100 text-gray-800 text-xs font-medium rounded-full hover:bg-gray-200 transition"
              >
                🐙 GitHub
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Card;
