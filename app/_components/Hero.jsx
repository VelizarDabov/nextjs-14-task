import { Button } from "@/components/ui/button";
import Image from "next/image";
import Card from "./Card";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="flex flex-row items-center mt-5 gap-10">
        {/* header */}
        <div className="ml-3">
          <h1 className="flex flex-col text-3xl md:text-4xl font-bold">
            <span>Agency</span>
            <span>procurement,</span>
            <span>outsourced.</span>
          </h1>
          <h3 className="mt-4 text-lg text-gray-600">Start the process here</h3>
          <Link href="#card">
            <Button
              variant="outline"
              className=" mt-10  hover:bg-gray-200 px-10 sm:px-16 py-7 text-white "
            >
              Start
            </Button>
          </Link>
        </div>
        {/* image */}
        <div className="mr-3">
          <Image
            className="object-cover"
            src={"/heroimg.png"}
            width={500}
            height={800}
            alt="hero image"
          />
        </div>
      </div>
      <div className="mt-36  ">
        <Card />
      </div>
    </>
  );
};

export default Hero;
