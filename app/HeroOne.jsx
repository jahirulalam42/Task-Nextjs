import React from "react";
import Image from "next/image";

const HeroOne = () => {
  return (
    <div>
      <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero min-h-screen overflow-hidden">
        <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
          <div className="grid grid-cols-2 gap-10 w-full md:w-1/2 lg:pr-32">
            <Image
              className="transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              src="/Image1.png"
              alt="Example"
              width={300}
              height={300}
            />
            <Image
              className="grid row-span-2 pt-24 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              src="/Image2.png"
              alt="Example"
              width={300}
              height={300}
            />
            <Image
              className="pl-6 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              src="/Image3.png"
              alt="Example"
              width={200}
              height={300}
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-end">
            <h1 className="text-2xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
              <br />
              quibusdam sint? Perspiciatis aliquam quasi illo excepturi fugit
              <br />
              cupiditate, voluptas facere qui quo laborum modi provident
              <br />
              voluptate. Corporis molestias praesentium veniam vero? Ex odio
              <br />
              blanditiis eos perspiciatis aperiam? Consectetur eligendi
              <br />
              temporibus atque repellendus unde, libero qui, fuga optio dolorum,
              <br />
              corrupti porro.
            </h1>
            <div className="flex justify-center pt-6">
              <button className="btn btn-outline btn-primary">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
