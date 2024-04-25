"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cardsData } from "../_constants";


const Card = () => {
  const [currentCard, setCurrentCard] = useState<number>(0);

  const handleCardHover = (index: number) => {
    setCurrentCard(index);
  };

  return (
    <>
      <div className="text-center  mt-16 " id="card">
        <h1 className=" text-3xl md:text-4xl font-bold">
          Managed agency selection
        </h1>
        <h3 className="text-sm md:text-lg">
          Stengthen your onboarding process
        </h3>
      </div>

      <div className="flex flex-col items-center   md:flex-row mt-16 gap-10 mb-[20rem] mx-10 md:mx-5 cursor-pointer ">
        <Image
          className="items-center "
          width={300}
          height={300}
          alt="video image"
          src={"/video.png"}
        />

<div className="">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex items-center mt-2 gap-5 border hover:border-blue-500 rounded-md p-8 bg-gray-100 shadow-lg"
              onMouseEnter={() => handleCardHover(index + 1)}
              onMouseLeave={() => handleCardHover(0)}
            >
              <Image src={card.image} width={80} height={80} alt="icons" />
              <div>
                <h2 className={currentCard === index + 1 ? "font-bold text-blue-500" : "font-bold"}>{card.title}</h2>
                <p className="text-sm">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;

