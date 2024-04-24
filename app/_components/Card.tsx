"use client";
import Image from "next/image";
import React, { useState } from "react";

const Card = () => {
  const [currentCard, setCurrentCard] = useState<number>(0);

  const handleCardHover = (index: number) => {
    setCurrentCard(index);
  };
  return (
    <>
      <div className="text-center  mt-16" id="card">
        <h1 className=" text-3xl md:text-4xl font-bold">
          Managed agency selection
        </h1>
        <h3 className="text-sm md:text-lg">
          Stengthen your onboarding process
        </h3>
      </div>

      <div className="flex flex-col justify-center items-center  md:flex-row mt-16 gap-10 mb-16 mx-10 md:mx-5 cursor-pointer">
        <Image
          className="items-center "
          width={300}
          height={300}
          alt="video image"
          src={"/video.png"}
        />

        <div className="gap-10">
          {/* 1 */}
          <div
            className="flex items-center gap-5  border hover:border-blue-500 rounded-md p-8 bg-gray-100 shadow-lg"
            onMouseEnter={() => handleCardHover(1)}
            onMouseLeave={() => handleCardHover(0)}
          >
            <Image
              src={"/brainstorming.png"}
              width={80}
              height={80}
              alt="icons"
            />
            <div className="">
              <h2
                className={
                  currentCard === 1 ? "font-bold text-blue-500" : "font-bold"
                }
              >
                Brief
              </h2>
              <p className="text-sm">
                Complete{" "}
                <span className="font-bold">
                  bried writing or simple guidance
                </span>{" "}
                on what to include, we've got you covered.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div
            className="flex items-center gap-5 mt-5  border hover:border-blue-500 rounded-md p-8 bg-gray-100 shadow-lg md:scale-105"
            onMouseEnter={() => handleCardHover(2)}
            onMouseLeave={() => handleCardHover(0)}
          >
            <Image
              src={"/presentation.png"}
              width={80}
              height={80}
              alt="icons"
            />
            <div className="">
              <h2
                className={
                  currentCard === 2 ? "font-bold text-blue-500" : "font-bold"
                }
              >
                Search
              </h2>
              <p className="text-sm">
                In-depth agency search vocering;{" "}
                <span className="font-bold">criteria matching,</span> door
                knocking and due-diligence vetting
              </p>
            </div>
          </div>

          {/* 3 */}
          <div
            className="flex items-center mt-5 gap-5 border hover:border-blue-500 rounded-md p-8 bg-gray-100 shadow-lg md:scale-110"
            onMouseEnter={() => handleCardHover(3)}
            onMouseLeave={() => handleCardHover(0)}
          >
            <Image
              src={"/brainstorming.png"}
              width={80}
              height={80}
              alt="icons"
            />
            <div className="">
              <h2
                className={
                  currentCard === 3 ? "font-bold text-blue-500" : "font-bold"
                }
              >
                Pitch
              </h2>
              <p className="text-sm">
                Comprehensive{" "}
                <span className="font-bold">pitch management,</span> including
                comms, diary management and pitch hosting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
