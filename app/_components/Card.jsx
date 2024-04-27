import Image from "next/image";
import { cardsData } from "../_constants";

const Card = () => {
  return (
    <div className="bg-[url('/background.png')] bg-cover bg-left-top">
      <div className="text-center mt-16 " id="card">
        <h1 className="text-3xl md:text-4xl font-bold">
          Managed agency selection
        </h1>
        <h3 className="text-sm md:text-lg">
          Strengthen your onboarding process
        </h3>
      </div>

      <div className="flex flex-col items-center md:flex-row mt-16 gap-10 mb-[20rem] mx-10 md:mx-5 cursor-pointer ">
        <Image
          className="items-center "
          width={300}
          height={300}
          alt="video image"
          src={"/video.png"}
        />

        <div>
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex items-center mt-4 gap-5 border hover:border-blue-500 rounded-md p-8 bg-gray-100 shadow-lg hover:scale-105"
            >
              <Image src={card.image} width={80} height={80} alt="icons" />
              <div>
                <h2 className="font-bold hover:text-blue-500">{card.title}</h2>
                <p className="text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
