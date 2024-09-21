import React from "react";
import Image from "next/image";

const HeroThree = () => {
  return (
    <div className="bg-emerald-500 h-96 rounded-b-[50%] p-8">
      <div className="hero min-h-fit mt-28">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="/Image5.png"
            alt="Description of image"
            width={500} // Desired width
            height={300} // Desired height
            className="rounded-lg" // Optional Tailwind CSS class
          />
          <div className="mx-40">
            <h1 className="text-4xl font-bold pb-6">Collection Featured!</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.
              Aperiam velit nemo sed <br /> saepe neque dignissimos quos quis
              non,
              <br />
              repellat molestiae fugit doloribus illum culpa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroThree;
