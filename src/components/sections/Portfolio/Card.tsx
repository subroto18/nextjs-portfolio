"use client";
import { modalState } from "@/atoms/modalAtom";
import Button from "@/components/ui/Button";
import Img from "@/components/ui/Img";
import Modal from "@/components/ui/Modal";

import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const Card = () => {
  const setModalOpen = useSetRecoilState(modalState);

  return (
    <div
      onClick={() => setModalOpen(true)}
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
            <Button
              className="text-center m-auto flex mt-5 cursor-pointer "
              text={"View Details"}
            />
            <Modal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
